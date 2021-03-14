package io.github.support.terminal.application

import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import com.fasterxml.jackson.module.kotlin.KotlinModule
import org.apache.commons.lang3.StringUtils
import org.apache.http.HttpHost
import org.apache.http.auth.AuthScope
import org.apache.http.auth.UsernamePasswordCredentials
import org.apache.http.client.CredentialsProvider
import org.apache.http.impl.client.BasicCredentialsProvider
import org.apache.http.impl.client.HttpClientBuilder
import org.apache.http.impl.client.ProxyAuthenticationStrategy
import org.springframework.beans.factory.annotation.Value
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.EnableMBeanExport
import org.springframework.context.annotation.PropertySource
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory
import org.springframework.http.converter.ByteArrayHttpMessageConverter
import org.springframework.scheduling.annotation.EnableAsync
import org.springframework.scheduling.annotation.EnableScheduling
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.web.client.RestTemplate
import java.util.concurrent.Executor
import java.util.concurrent.ExecutorService
import java.util.concurrent.Executors

@EnableAsync
@EnableScheduling
@EnableMBeanExport
@PropertySource(value = ["file:\${user.home}/.support-terminal/config.properties"], ignoreResourceNotFound = true)
@SpringBootApplication
open class ApplicationContextConfiguration {
    @Value("\${proxy_host:#{null}}")
    private val PROXY_HOST: String? = null

    @Value("\${proxy_port:#{null}}")
    private val PROXY_PORT: Int? = null

    @Value("\${proxy_username:#{null}}")
    private val PROXY_USERNAME: String? = null

    @Value("\${proxy_password:#{null}}")
    private val PROXY_PASSWORD: String? = null

    @Bean
    open fun passwordEncoder(): PasswordEncoder = BCryptPasswordEncoder()

    @Bean
    open fun restTemplate(): RestTemplate {
        val restTemplate = RestTemplate()
        //если нам передали порт и хост
        addProxyIfExists(restTemplate)
        return restTemplate
    }

    @Bean(name = ["threadPoolTaskExecutor"])
    open fun threadPoolTaskExecutor(): Executor {
        return ThreadPoolTaskExecutor()
    }

    @Bean
    open fun objectMapper(): ObjectMapper {
        val mapper =  ObjectMapper()
        mapper.registerModule(KotlinModule())
        mapper.registerModule(JavaTimeModule())
        return mapper;
    }

    @Bean
    open fun executorService(): ExecutorService {
        return Executors.newFixedThreadPool(100)
    }

    @Bean
    open fun restTemplateForFiles(): RestTemplate {
        val restTemplate = RestTemplate()
        addProxyIfExists(restTemplate)
        restTemplate.messageConverters.add(ByteArrayHttpMessageConverter())
        return restTemplate
    }

    private fun addProxyIfExists(restTemplate: RestTemplate) {
        //если нам передали порт и хост
        if (!StringUtils.isEmpty(PROXY_HOST) && PROXY_PORT != null) {
            val clientBuilder = HttpClientBuilder.create()
            clientBuilder.useSystemProperties()
            clientBuilder.setProxy(HttpHost(PROXY_HOST!!.trim { it <= ' ' }, PROXY_PORT))

            //если креды передали
            if (!StringUtils.isEmpty(PROXY_USERNAME) && !StringUtils.isEmpty(PROXY_PASSWORD)) {
                val credsProvider: CredentialsProvider = BasicCredentialsProvider()
                credsProvider.setCredentials(
                        AuthScope(PROXY_HOST.trim { it <= ' ' }, PROXY_PORT),
                        UsernamePasswordCredentials(PROXY_USERNAME!!.trim { it <= ' ' }, PROXY_PASSWORD!!.trim { it <= ' ' })
                )
                clientBuilder.setDefaultCredentialsProvider(credsProvider)
                clientBuilder.setProxyAuthenticationStrategy(ProxyAuthenticationStrategy())
            }
            val client = clientBuilder.build()
            val factory = HttpComponentsClientHttpRequestFactory()
            factory.httpClient = client
            restTemplate.requestFactory = factory
        }
    }
}