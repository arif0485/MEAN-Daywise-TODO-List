import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  toDoDate;
  toDoText;
  toDoListArray:Todo[] = [];
  constructor(public todoService: TodoService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.todoService.getTasks().subscribe(
      (res) => {
        this.groupingTasks(res['data']);
      },
      (err) => {
        alert('Error Occured');
      }
    );
  }

  groupingTasks(arr) {
    let datesArray = [];
    let result = [];
    arr.forEach((obj) => {
      let ind = datesArray.indexOf(obj.date);
      let tempObj = {
        id: obj._id,
        isChecked: obj.isChecked,
        title: obj.title,
      };
      if (ind !== -1) {
        result[ind]['data'].push(tempObj);
      } else {
        datesArray.push(obj.date);
        result.push({
          date: obj.date,
          data: [tempObj],
        });
      }
    });
    this.toDoListArray = result;
  }

  saveTask(form: NgForm) {
    let datePipe = new DatePipe('en-US');
    let dateFormatted = datePipe.transform(this.toDoDate, 'MM/dd/yyyy');
    let toDoObj = {
      date: dateFormatted,
      isChecked: false,
      title: this.toDoText,
    };
    this.todoService.saveTask(toDoObj).subscribe(
      (res) => {
        this.getTasks();
        form.resetForm();
      },
      (err) => {
        alert('Error Occured');
      }
    );
  }
  alterCheck(obj) {
    let toDoObj = {
      isChecked: !obj.isChecked,
    };
    this.todoService.updateTask(toDoObj, obj.id).subscribe(
      (res) => {
        this.getTasks();
      },
      (err) => {
        alert('Error Occured');
      }
    );
  }

  onDelete(id) {
    this.todoService.deleteTask(id).subscribe(
      (res) => {
        this.getTasks();
      },
      (err) => {
        alert('Error Occured');
      }
    );
  }


  getFormattedDate(date) {
    return new Date(date).toDateString();
  }
}
