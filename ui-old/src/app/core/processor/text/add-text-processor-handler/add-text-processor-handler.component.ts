import {Component, ViewEncapsulation} from '@angular/core';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {TextProcessorsHandlersService} from '../services/text-processors-handlers.service';
import TextProcessorHandler from '../models/TextProcessorHandler';


@Component({
  selector: 'add-text-processor-handler',
  templateUrl: './add-text-processor-handler.component.html',
  styleUrls: ['./add-text-processor-handler.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AddTextProcessorHandlerComponent {

  constructor(public dialogRef: MatDialogRef<AddTextProcessorHandlerComponent>,
              private textProcessorsHandlersService: TextProcessorsHandlersService,
              private snackBar: MatSnackBar) { }

  add(textProcessorHandler: TextProcessorHandler):void{
    this.textProcessorsHandlersService.add(textProcessorHandler)
      .subscribe( handler => {
        this.dialogRef.close();
        this.snackBar.open('Обработчик добавлен','',{
          duration: 3000,
          panelClass:'colorGreen',
          horizontalPosition:'right'
        });
      });
  }

  close(){
    this.dialogRef.close();
  }

}
