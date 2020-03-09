import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from "@angular/material";
import TextProcessorHandler from "../models/TextProcessorHandler";
import {TextProcessorsHandlersService} from "../services/text-processors-handlers.service";


@Component({
    selector: 'edit-bot-command',
    templateUrl: './edit-text-processor-handler.component.html',
    styleUrls: ['./edit-text-processor-handler.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class EditTextProcessorHandlerComponent {

    private textProcessorHandler: TextProcessorHandler;

    constructor(public dialogRef: MatDialogRef<EditTextProcessorHandlerComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private textProcessorsHandlersService: TextProcessorsHandlersService,
                private snackBar: MatSnackBar) {
        this.textProcessorHandler = data.textProcessorHandler;
    }

    edit(textProcessorHandler: TextProcessorHandler): void {
        this.textProcessorsHandlersService.update(textProcessorHandler)
            .subscribe(command => {
                this.snackBar.open("Изменения сохранены", '', {
                    duration: 3000,
                    panelClass: 'colorGreen',
                    horizontalPosition: 'right'
                });
            });
    }


    delete() {
        console.log("delete")
        this.textProcessorsHandlersService.delete(this.textProcessorHandler.id)
            .subscribe(command => {
                this.dialogRef.close();
                this.snackBar.open("Удалено", '', {
                    duration: 3000,
                    panelClass: 'colorGreen',
                    horizontalPosition: 'right'
                });
            });
    }

    close() {
        this.dialogRef.close();
    }

}
