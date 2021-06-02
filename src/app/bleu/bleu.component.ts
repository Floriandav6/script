import { Component, OnInit } from '@angular/core';
import {RecetteService} from "../shared/recette/recette.service";
import {Recette} from "../shared/recette/recette.model";

@Component({
  selector: 'app-bleu',
  templateUrl: './bleu.component.html',
  styleUrls: ['./bleu.component.css']
})
export class BleuComponent implements OnInit {
  public pathIMG: string = "https://davila.bes-webdeveloper-seraing.be/admin_porfolio/assets/dist/img/upload/rea/";

  public creations: Recette[] = [];

  constructor(private recettese:RecetteService) {  }

  ngOnInit(): void {
    this.recettese.getRecettes().subscribe(data => {
      this.creations = data;
      this.creations = this.creations.filter(creation => creation.id_color === 1 );
    });
  }
}
