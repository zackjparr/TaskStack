import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss'],
  providers: [TaskService]
})
export class UpdateTaskComponent implements OnInit {

  @Input() Id: number;
  task: Task;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.GetTask(this.Id).subscribe(
      (response: any) => {
        console.log(response);
        this.task = response;
      }
    );
  }

  UpdateTask(id:number) {
    let name: string = (<HTMLInputElement>document.getElementById("tmName" + this.Id)).value;
    console.log(name);
    let desc: string = (<HTMLInputElement>document.getElementById("briefDesc" + this.Id)).value;
    console.log(desc);
    let ddate: string = (<HTMLInputElement>document.getElementById("dueDate" + this.Id)).value;
    console.log(ddate);

    let newTask: Task = { id: this.Id, tmName:name, briefDesc:desc, dueDate:ddate, isCompleted:false };

    this.taskService.UpdateTask(newTask, this.Id).subscribe(
      (response: any) => { location.reload() }
    );
  }


}
