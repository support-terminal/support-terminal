import {Component, ViewEncapsulation} from '@angular/core';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import DataForm from '../models/DataForm';
import {DataFormsService} from '../services/data-forms.service';

@Component({
  selector: 'add-data-form',
  templateUrl: './add-data-form.component.html',
  styleUrls: ['./add-data-form.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AddDataFromComponent {

  constructor(public dialogRef: MatDialogRef<AddDataFromComponent>,
              private dataFormsService: DataFormsService,
              private snackBar: MatSnackBar ) { }

  add(form: DataForm):void{
    this.dataFormsService.add(form)
      .subscribe( command => {
        this.dialogRef.close();
          this.snackBar.open('Форма добавлена', '', {
              duration: 3000,
              panelClass: 'colorGreen',
              horizontalPosition: 'right'
          });
      });
  }

  close(){
    this.dialogRef.close();
  }


}
