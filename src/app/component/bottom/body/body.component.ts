import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
// @Input() todoList:any
// @Input() todo:any
// @Input() toEditIndex:any
  constructor() { }

  ngOnInit(): void {
    
  }
  // handleEdit(index:any){
  //   console.log(index)
  //   debugger
  //   this.toEditIndex=index
  //   this.todo=this.todoList[index].do
  // }
}
