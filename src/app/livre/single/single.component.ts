import { LivreService } from 'src/app/services/livre.service';
import { Component, OnInit } from '@angular/core';
import { Livre } from '../model-livre';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  livre: Livre = null;
  livres: Livre[] = null;

  // l’utilisation d’un service dans un composant en Angular consiste à l’injecter dans le constructeur de celui-ci
  // Tout ceci fonctionne qu’après avoir déclarer notre service dans la propriété providers du decorateur @Component.
  constructor(
    private route: ActivatedRoute,
    private livreService: LivreService,
    private router: Router

  ) {}

  ngOnInit(): void {
   const id = +this .route.snapshot.params.id;
   this.livre = this.livreService.getOne(id);
  }

  retour(): void {
    this.router.navigate(['/listeLivres']);
  }


  }






