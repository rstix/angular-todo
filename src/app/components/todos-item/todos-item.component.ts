import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss']
})
export class TodosItemComponent implements OnInit {

  @Input() todo:Todo;

  constructor() { }

  ngOnInit(): void {
  }

  setClasses(){
    return {
      todo: true,
      'is-complete': this.todo.completed
    }
  }

  onToggle(todo){
    todo.completed = !todo.completed 
  }

  onDelete(todo){
    console.log('todo')
  }

}
