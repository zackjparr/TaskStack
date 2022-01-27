import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-full-crud',
  templateUrl: './full-crud.component.html',
  styleUrls: ['./full-crud.component.css'],
  providers: [TaskService]
})
export class FullCRUDComponent implements OnInit {

  tasks?: Task[] = [];
  constructor(private taskService: TaskService) {
 
    this.taskService.GetTaskList().subscribe(

        (response: any) => { this.tasks = response }
    )
  }

  //The constructor is for filling out properties and nothing else 
  //ngOnInit is for handling any other kind of setup (function calls etc)
  ngOnInit() {
  }

  DeleteTask(id: number, index: number) {
    this.taskService.DeleteTask(id).subscribe(
      (response: any) => {
        console.log(id + " was deleted successfully from our database");
        this.tasks.splice(index, 1);
      }
    );
  }

  EditTask(id: number) {
    let displayPanel = document.getElementById("display" + id);
    let editPanel = document.getElementById("edit" + id);

    //If the display is the string empty, by default the element is being shown 
    if (displayPanel.style.display === ""
      || displayPanel.style.display === "inherit") {
      displayPanel.style.display = "none";
      editPanel.style.display = "inherit";
    }
    else if (displayPanel.style.display === "none") {
      displayPanel.style.display = "inherit";
      editPanel.style.display = "none";
    }
  }

  

}