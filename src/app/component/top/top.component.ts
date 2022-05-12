import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  todo:string=""
  todoArr:any=[
    { do:"TASK1", isDone:false,},
    { do:"QWERTY", isDone:true,}
  ]
  toEditIndex:number=-1
  constructor() { }

  ngOnInit(): void {
  }

  handleInputChange(event:any){

    this.todo=(event.target as HTMLInputElement).value
  }
  handleEdit(index:any,isDone:any){
    console.log(index)
    debugger
    if(!isDone){
    this.toEditIndex=index
    this.todo=this.todoArr[index].do
    }
    else{
      this.todo=""
    }
  }
  handleMarkDone(index:any){
    this.todoArr[index].isDone=true
  }
  handleDelete(index:any){
    this.todoArr.splice(index,1)
  }

  addToDo(){
    if(this.todo!=="" && this.todo!==" " ){
      if(this.toEditIndex!==-1){
      this.todoArr[this.toEditIndex].do=this.todo 
this.todo=""
this.toEditIndex=-1
      }
      else{

      
    let addNewTodo={
      do:this.todo,
      isDone:false,
    }
    // let newArr=[]
    this.todoArr=[...this.todoArr,addNewTodo]
    console.log(this.todoArr)
    this.todo=""}
  }}
}
