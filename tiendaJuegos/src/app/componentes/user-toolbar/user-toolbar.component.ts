import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-toolbar',
  templateUrl: './user-toolbar.component.html',
  styleUrls: ['./user-toolbar.component.css']
})
export class UserToolbarComponent {

  @Input() titulo:string = "";
  @Input() returnPath:string = "";

  constructor(private rutedor:Router  ){}

  protected return(){
    this.rutedor.navigate([this.returnPath]);
  }

  protected goToPage(path:string){
    this.rutedor.navigate([path]);
  }
}
