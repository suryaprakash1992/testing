import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgGridModule} from "ag-grid-angular/main";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyGridApplicationComponent } from './my-grid-application/my-grid-application.component';
import { RedComponentComponent } from './red-component/red-component.component';




@NgModule({
  declarations: [
    AppComponent,
    MyGridApplicationComponent,
    RedComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents(
      [RedComponentComponent]
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
