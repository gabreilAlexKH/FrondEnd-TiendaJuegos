import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-toolbar',
  templateUrl: './user-toolbar.component.html',
  styleUrls: ['./user-toolbar.component.css']
})
export class UserToolbarComponent {

  @Input() titulo:string = "";
  @Input() hasReturn:boolean = false;

}
