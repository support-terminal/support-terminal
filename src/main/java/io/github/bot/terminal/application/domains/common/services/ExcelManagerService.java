package io.github.bot.terminal.application.domains.common.services;


import io.github.bot.terminal.application.domains.integrations.DocumentFile;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections4.ListUtils;
import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.HorizontalAlignment;
import org.apache.poi.ss.usermodel.VerticalAlignment;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
public class ExcelManagerService {

    public DocumentFile createExcelDocumentFile(String fileName, List<Map<String, Object>> rows) throws IOException {

        HSSFWorkbook hssfWorkbook = new HSSFWorkbook();
        if (rows.size() == 0) {
            return new DocumentFile(fileName, new ByteArrayOutputStream());
        }

        HSSFCell cell;
        List<String> keysColumnsList = new ArrayList<>();
        keysColumnsList.addAll(rows.get(0).keySet());

        CellStyle boldStyle = getBoldStyle(hssfWorkbook);
        CellStyle centerStyle = getCenterStyle(hssfWorkbook);

        for (List<Map<String, Object>> resultsRowsSheet : ListUtils.partition(rows, 65535)) {

            HSSFSheet sheet = hssfWorkbook.createSheet();
            HSSFRow headRow = sheet.createRow(0);
            headRow.setRowStyle(getBoldStyle(hssfWorkbook));

            for (int i = 0; i < keysColumnsList.size(); i++) {
                cell = headRow.createCell(i);
                cell.setCellValue(keysColumnsList.get(i));
                cell.setCellStyle(boldStyle);
            }

            for (int i = 0; i < resultsRowsSheet.size(); i++) {
                HSSFRow row = sheet.createRow(i + 1);
                Map<String, Object> rowResult = resultsRowsSheet.get(i);

                final int[] j = {0};
                rowResult.forEach((column, value) -> {

                    HSSFCell rowCell = row.createCell(j[0]);
                    if (value instanceof Timestamp) {
                        rowCell.setCellValue(value.toString());
                    } else if (value instanceof java.util.UUID) {
                        rowCell.setCellValue(value.toString());
                    } else if (value instanceof Integer) {
                        rowCell.setCellValue((Integer) value);
                    } else if (value instanceof Double) {
                        rowCell.setCellValue((Double) value);
                    } else if (value instanceof Long) {
                        rowCell.setCellValue((Long) value);
                    } else {
                        rowCell.setCellValue(value.toString());
                    }
                    rowCell.setCellStyle(centerStyle);
                    j[0]++;
                });
            }

            for (int i = 0; i < keysColumnsList.size(); i++) {
                sheet.autoSizeColumn(i);
            }
        }

        ByteArrayOutputStream os = new ByteArrayOutputStream();
        hssfWorkbook.write(os);
        hssfWorkbook.close();

        return new DocumentFile(fileName, os);
    }

    private CellStyle getBoldStyle(HSSFWorkbook hssfWorkbook) {
        CellStyle style = hssfWorkbook.createCellStyle();
        HSSFFont font = hssfWorkbook.createFont();
        font.setBold(true);
        font.setFontHeightInPoints((short) 10);
        style.setFont(font);
        style.setAlignment(HorizontalAlignment.CENTER);
        style.setVerticalAlignment(VerticalAlignment.CENTER);
        style.setWrapText(true);
        return style;
    }

    private CellStyle getCenterStyle(HSSFWorkbook hssfWorkbook) {
        CellStyle style = hssfWorkbook.createCellStyle();
        HSSFFont font = hssfWorkbook.createFont();
        font.setFontHeightInPoints((short) 10);
        style.setFont(font);
        style.setAlignment(HorizontalAlignment.CENTER);
        style.setVerticalAlignment(VerticalAlignment.CENTER);
        style.setWrapText(true);
        return style;
    }
}
