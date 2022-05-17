import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ITask } from '../_models/task';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  tasks:ITask[]=[];
  inprogress:ITask[]=[];
  done:ITask[]=[];
  todoForm !:FormGroup;
  updateIndex:any;
  isEditEnabled:boolean=false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.todoForm=this.fb.group({
      task:['',Validators.required]
    })
  }
  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  addTask(item:any){
    console.log(item);
    this.tasks.push({
      description:this.todoForm.value.task,
      done:false
    })
    this.todoForm.reset();
    console.log(this.isEditEnabled);
  }
  deleteTask(i:number){
    this.tasks.splice(i,1);
  }
  deleteInprogressTask(i:number){
    this.inprogress.splice(i,1)
  }
  deleteDoneTask(i:number){
    this.done.splice(i,1);
  }
  onEdit(item:ITask,i:number){
    this.todoForm.controls['task'].setValue(item.description);
    this.updateIndex=i;
    this.isEditEnabled=true;
    console.log(i);

  }
  updateTask(){
    this.tasks[this.updateIndex].description=this.todoForm.value.task;
    this.tasks[this.updateIndex].done=false;
    this.todoForm.reset();
    this.updateIndex=undefined;
    this.isEditEnabled=false;
  }

}
