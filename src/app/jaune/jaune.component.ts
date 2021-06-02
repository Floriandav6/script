import { Component, OnInit } from '@angular/core';
import {RecetteService} from "../shared/recette/recette.service";
import {Recette} from "../shared/recette/recette.model";

@Component({
  selector: 'app-jaune',
  templateUrl: './jaune.component.html',
  styleUrls: ['./jaune.component.css']
})
export class JauneComponent implements OnInit {
  public pathIMG: string = "https://davila.bes-webdeveloper-seraing.be/admin_porfolio/assets/dist/img/upload/rea/";

  public creations: Recette[] = [];
  constructor(private recetteService: RecetteService) { }

  ngOnInit(): void {
    this.recetteService.getRecettes().subscribe(data => {
      this.creations = data;
      this.creations = this.creations.filter(creation => creation.id_color === 2 );
    });
  }

}
