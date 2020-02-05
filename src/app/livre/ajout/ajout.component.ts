import { Component, OnInit } from '@angular/core';
import { LivreService } from 'src/app/services/livre.service';
import { Livre } from '../model-livre';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  livre: Livre;

  constructor(
    private livreService: LivreService,
    private route: Router,
    ) { }

  ngOnInit() {
     // tslint:disable-next-line:new-parens
     this.livre = new Livre;
  }

  // la methode onSubmit soumet le formulaire
  onSubmit(): void {
    this.livre.id = this.livreService.getAllLivres().length + 1;
    this.livreService.addLivre(this.livre);
    this.route.navigate(['/listeLivres']);

  }

}
