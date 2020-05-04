import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import BotCommand from '../models/BotCommand';
import {BotCommandsService} from '../services/bot-commands.service';


@Component({
    selector: 'edit-bot-command',
    templateUrl: './edit-bot-command.component.html',
    styleUrls: ['./edit-bot-command.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class EditBotCommandComponent {

    private command: BotCommand;

    constructor(public dialogRef: MatDialogRef<EditBotCommandComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private botCommandsService: BotCommandsService,
                private snackBar: MatSnackBar) {
        this.command = data.command;
    }

    edit(command: BotCommand): void {
        this.botCommandsService.update(command)
            .subscribe(command => {
                this.snackBar.open('Изменения сохранены', '', {
                    duration: 3000,
                    panelClass: 'colorGreen',
                    horizontalPosition: 'right'
                });
            });
    }

    changeCommandState(changeEvent: any) {
        if(changeEvent.checked){
            this.command.state = 'ENABLED';
        }else{
            this.command.state = 'DISABLED';
        }
    }

    delete() {
        console.log('delete')
        this.botCommandsService.delete(this.command.id)
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
