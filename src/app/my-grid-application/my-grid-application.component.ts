import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid";
import {RedComponentComponent} from "../red-component/red-component.component";

@Component({
  selector: 'app-my-grid-application',
  templateUrl: './my-grid-application.component.html',
  //styleUrls: ['./my-grid-application.component.css']
})
export class MyGridApplicationComponent  {

  private gridOptions: GridOptions;
  private gridApi;
  selectedGame: Object = {};
  testdata=[
      {
        id:"1",
        value:"India"
       },
       {
           id:"2",
           value:"pak"
       }
]
  
    constructor() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = [
            {
                headerName: "ID",
                field: "id",
                width: 100
            },
            {
                headerName: "Value",
                field: "value",
                cellRendererFramework: RedComponentComponent,
                width: 100
            },

        ];
        this.gridOptions.rowData = [
            {id: 5, value: 10},
            {id: 10, value: 15},
            {id: 15, value: 20}
        ]
    }
    check(){
      console.log("hai");
      debugger;

    }
    onGridinit(param){
      param.GridOptions.api.sizeColumnsToFit();
      debugger;
      this.gridApi=param.GridOptions.api;
      
    }
}

