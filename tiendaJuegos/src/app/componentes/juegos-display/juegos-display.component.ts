import { Component, Input, SimpleChanges } from '@angular/core';
import { Videojuego } from 'src/app/interfases/videojuego';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-juegos-display',
  templateUrl: './juegos-display.component.html',
  styleUrls: ['./juegos-display.component.css']
})
export class JuegosDisplayComponent implements OnChanges {


  @Input() public videojuegos: Videojuego[] = [];
  protected curendDisplay: Videojuego[] = [];
  @Input() public mode: number = 0;

  protected currentPage: number = 0;
  protected max_page: number = 0
  protected max_per_Page: number = 8;

  private itemsPerPage: number[] = [];

  ngOnChanges(changes: SimpleChanges) {

    if (changes["videojuegos"]) {
      this.initDisplay()
    }

  }

  private initDisplay() {

    this.max_page = Math.ceil(this.videojuegos.length / this.max_per_Page);

    let counter = this.videojuegos.length;

    while (counter > this.max_per_Page) {
      this.itemsPerPage.push(this.max_per_Page);
      counter -= this.max_per_Page;
    }

    if (counter > 0) {
      this.itemsPerPage.push(counter);
    }

    this.currentPage = 1;
    this.changePage();
  }

  public next() {

    if (this.currentPage + 1 <= this.max_page) {
      this.currentPage += 1;
      this.changePage();
    }

  }

  public last() {
    if (this.currentPage - 1 > 0) {
      this.currentPage -= 1;
      this.changePage();


    }
  }

  private changePage() {
    let index = (this.max_per_Page * (this.currentPage - 1));
    this.curendDisplay = this.videojuegos.slice(index, index + this.itemsPerPage[this.currentPage - 1]);
  }

}
