package io.github.bot.terminal.application.domains.common.services

import io.github.bot.terminal.application.domains.integrations.DocumentFile
import org.apache.commons.collections4.ListUtils
import org.apache.poi.hssf.usermodel.HSSFCell
import org.apache.poi.hssf.usermodel.HSSFWorkbook
import org.apache.poi.ss.usermodel.CellStyle
import org.apache.poi.ss.usermodel.HorizontalAlignment
import org.apache.poi.ss.usermodel.VerticalAlignment
import org.springframework.stereotype.Service
import java.io.ByteArrayOutputStream
import java.sql.Timestamp
import java.util.*

@Service
class ExcelManagerService {

    fun createExcelDocumentFile(fileName: String,
                                rows: List<Map<String, Any>>): DocumentFile {
        val hssfWorkbook = HSSFWorkbook()
        if (rows.isEmpty()) {
            return DocumentFile(fileName, ByteArrayOutputStream())
        }
        var cell: HSSFCell
        val keysColumnsList: MutableList<String> = ArrayList()
        keysColumnsList.addAll(rows[0].keys)
        val boldStyle = getBoldStyle(hssfWorkbook)
        val centerStyle = getCenterStyle(hssfWorkbook)
        for (resultsRowsSheet in ListUtils.partition(rows, 65535)) {
            val sheet = hssfWorkbook.createSheet()
            val headRow = sheet.createRow(0)
            headRow.setRowStyle(getBoldStyle(hssfWorkbook))
            for (i in keysColumnsList.indices) {
                cell = headRow.createCell(i)
                cell.setCellValue(keysColumnsList[i])
                cell.setCellStyle(boldStyle)
            }
            for (i in resultsRowsSheet.indices) {
                val row = sheet.createRow(i + 1)
                val rowResult = resultsRowsSheet[i]
                val j = intArrayOf(0)
                rowResult.forEach { (column: String, value: Any) ->
                    val rowCell = row.createCell(j[0])
                    when(value){
                        is Timestamp -> rowCell.setCellValue(value.toString())
                        is UUID -> rowCell.setCellValue(value.toString())
                        is Int -> rowCell.setCellValue(value as Double)
                        is Double -> rowCell.setCellValue(value)
                        is Long ->  rowCell.setCellValue(value as Double)
                        else -> rowCell.setCellValue(value.toString())
                    }
                    rowCell.setCellStyle(centerStyle)
                    j[0]++
                }
            }
            for (i in keysColumnsList.indices) {
                sheet.autoSizeColumn(i)
            }
        }
        val os = ByteArrayOutputStream()
        hssfWorkbook.write(os)
        hssfWorkbook.close()
        return DocumentFile(fileName, os)
    }

    private fun getBoldStyle(hssfWorkbook: HSSFWorkbook): CellStyle {
        val style: CellStyle = hssfWorkbook.createCellStyle()
        val font = hssfWorkbook.createFont()
        font.bold = true
        font.fontHeightInPoints = 10.toShort()
        style.setFont(font)
        style.setAlignment(HorizontalAlignment.CENTER)
        style.setVerticalAlignment(VerticalAlignment.CENTER)
        style.wrapText = true
        return style
    }

    private fun getCenterStyle(hssfWorkbook: HSSFWorkbook): CellStyle {
        val style: CellStyle = hssfWorkbook.createCellStyle()
        val font = hssfWorkbook.createFont()
        font.fontHeightInPoints = 10.toShort()
        style.setFont(font)
        style.setAlignment(HorizontalAlignment.CENTER)
        style.setVerticalAlignment(VerticalAlignment.CENTER)
        style.wrapText = true
        return style
    }
}