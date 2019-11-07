import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolsComponent } from './tools.component';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { DepressionToolsModule } from 'src/app/modal/tools/depressiontools/depressiontools.module';
import { DepressionComponent } from 'src/app/modal/tools/depressiontools/depressiontools.component';
import { ManicToolsModule } from 'src/app/modal/tools/manictools/manictools.module';
import { ManictoolsComponent } from 'src/app/modal/tools/manictools/manictools.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    DepressionToolsModule,
    ManicToolsModule
  ],
  declarations: [
    ToolsComponent
  ],
  exports: [
    ToolsComponent
],
  entryComponents: [
    DepressionComponent,
    ManictoolsComponent
  ]
})
export class ToolsModule {}
