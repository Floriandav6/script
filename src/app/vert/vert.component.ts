import { Component, OnInit } from '@angular/core';
import {RecetteService} from "../shared/recette/recette.service";
import {Recette} from "../shared/recette/recette.model";

@Component({
  selector: 'app-vert',
  templateUrl: './vert.component.html',
  styleUrls: ['./vert.component.css']
})
export class VertComponent implements OnInit {
  public pathIMG: string = "https://davila.bes-webdeveloper-seraing.be/admin_porfolio/assets/dist/img/upload/rea/";
  creations: Recette[] = [];
  constructor(public recetteService: RecetteService) { }

  ngOnInit(): void {
    this.recetteService.getRecettes().subscribe(data => {
      this.creations = data;
      this.creations = this.creations.filter(creation => creation.id_color === 4);
    });
  }

}
