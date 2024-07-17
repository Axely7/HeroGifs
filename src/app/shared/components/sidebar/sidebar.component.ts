import { Component, EventEmitter, Output } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Output()
  public onEmitTag: EventEmitter<string> = new EventEmitter()


  constructor(private gifsService: GifsService){}

  get tags(){
    return this.gifsService.tagsHistory;
  }

  emitTag(tag: string): void{
    this.gifsService.searchTag(tag)

  }

}
