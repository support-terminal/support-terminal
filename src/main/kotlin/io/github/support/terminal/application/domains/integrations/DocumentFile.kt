package io.github.support.terminal.application.domains.integrations

import java.io.ByteArrayOutputStream

class DocumentFile {
    var filename: String
    var bytes: ByteArray

    constructor(filename: String, payload: ByteArrayOutputStream) {
        this.filename = filename
        bytes = payload.toByteArray()
    }

    val size: Long
        get() = bytes.size.toLong()

}