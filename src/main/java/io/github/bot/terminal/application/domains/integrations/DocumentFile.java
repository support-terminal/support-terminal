package io.github.bot.terminal.application.domains.integrations;

import java.io.ByteArrayOutputStream;
import java.io.IOException;


public class DocumentFile {
    private String filename;
    private byte[] payload;

    public DocumentFile() {
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public byte[] getPayload() {
        return payload;
    }

    public void setPayload(byte[] payload) {
        this.payload = payload;
    }

    public DocumentFile(String filename, ByteArrayOutputStream payload) {
        this.filename = filename;
        this.payload = payload.toByteArray();
    }

    public long getSize() {
        return payload.length;
    }

    public byte[] getBytes() throws IOException {
        return payload;
    }

}
