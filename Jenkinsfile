pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh './gradlew clean bootJar'
      }
    }
    stage('UploadOnSite') {
      steps {
        sh '''HOST=vh112.timeweb.ru
USER=cm41657_ftp
PASS=FUP3qNjA


PROJECT_VERSION=$(./gradlew properties | grep ^version: | awk \'{print $2}\')
echo ${PROJECT_VERSION}

FILE_HASH=$(sha1sum platform/build/libs/platform-${PROJECT_VERSION}.jar | awk \'{print $1}\')


cat >./index.php <<EOF
<?php
use \\Psr\\Http\\Message\\ServerRequestInterface as Request;
use \\Psr\\Http\\Message\\ResponseInterface as Response;

require \'../../vendor/autoload.php\';

EOF

echo \'$app = new \\Slim\\App;\' >> ./index.php
echo \'$app ->get("/actual-version", function (Request $request, Response $response, array $args) {\' >> ./index.php
echo \'$object = new stdClass();\' >> ./index.php
echo \'$object->version = "\'${PROJECT_VERSION}\'";\' >> ./index.php
echo \'$object->fileName = "platform-\'${PROJECT_VERSION}\'.jar";\' >> ./index.php
echo \'$object->artifactLink = "http://nixvision.com/artifacts/support-terminal/platform-\'${PROJECT_VERSION}\'.jar";\' >> ./index.php
echo \'$object->artifactHash = "\'${FILE_HASH}\'";\' >> ./index.php
echo \'return $response ->withStatus(200)->withHeader("Content-Type", "application/json")->write(json_encode($object));\' >> ./index.php

echo \'});\' >> ./index.php
echo \'$app ->run();\' >> ./index.php




ftp -invp $HOST << EOF
user $USER $PASS
cd public_html
mkdir artifacts
cd artifacts
mkdir support-terminal
cd support-terminal
put platform/build/libs/platform-${PROJECT_VERSION}.jar platform-${PROJECT_VERSION}.jar
put index.php index.php

bye
EOF'''
      }
    }
  }
}