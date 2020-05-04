import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import DataForm from '../models/DataForm';
import {DataFormsService} from '../services/data-forms.service';


@Component({
    selector: 'edit-data-form',
    templateUrl: './edit-data-form.component.html',
    styleUrls: ['./edit-data-form.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class EditDataFormComponent {

    private dataForm: DataForm;

    constructor(public dialogRef: MatDialogRef<EditDataFormComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private dataFormsService: DataFormsService,
                private snackBar: MatSnackBar) {
        this.dataForm = data.dataForm;
    }

    edit(dataForm: DataForm): void {
        console.log(dataForm);
        this.dataFormsService.update(dataForm)
            .subscribe(dataForm => {
                this.snackBar.open('Изменения сохранены', '', {
                    duration: 3000,
                    panelClass: 'colorGreen',
                    horizontalPosition: 'right'
                });
            });
    }

    changeState(changeEvent: any) {
        if(changeEvent.checked){
            this.dataForm.state = 'ENABLED';
        }else{
            this.dataForm.state = 'DISABLED';
        }
    }

    delete() {
        this.dataFormsService.delete(this.dataForm.id)
            .subscribe(command => {
                this.dialogRef.close();
                this.snackBar.open('Удалено', '', {
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
