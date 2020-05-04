import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCodemirrorModule} from 'ngx-mat-codemirror';
import {MatExpansionModule} from '@angular/material/expansion';

const modules = [
  MatCodemirrorModule,
  MatSnackBarModule,
  MatSlideToggleModule,
  ReactiveFormsModule,
  FormsModule,
  MatTooltipModule,
  MatSelectModule,
  MatInputModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  FlexLayoutModule,
  MatMenuModule,
  MatListModule,
  MatDialogModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatProgressSpinnerModule
];


@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class AngularMaterialModule{ }
