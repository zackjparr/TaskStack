import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [TaskService]
})
export class AddComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  CreateTask() {
    let name: string = (<HTMLInputElement>document.getElementById("tmName")).value;
    console.log(name);
    let desc: string = (<HTMLInputElement>document.getElementById("briefDesc")).value;
    console.log(desc);
    let ddate: string = (<HTMLInputElement>document.getElementById("dueDate")).value;
    console.log(ddate);

    let newTask: Task = { id: 0, tmName:name, briefDesc:desc, dueDate:ddate, isCompleted:false };

    this.taskService.CreateTask(newTask).subscribe(
      (response: any) => { location.reload() }
    );
  }
}
