import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
//Inyectar en el constructor
  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  get historial(){
    return this.gifsService.historial;
  }

}
