import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolsComponent } from './tools.component';
import { NavbarModule } from 'src/app/navbar/navbar.module';
import { SimpleComponent } from 'src/app/modal/tools/depression/simple/simple.component';
import { SimpleDepressionModule } from 'src/app/modal/tools/depression/simple/simple.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    SimpleDepressionModule
  ],
  declarations: [
    ToolsComponent
  ],
  exports: [
    ToolsComponent
],
entryComponents: [
  SimpleComponent
]
})
export class ToolsModule {}
