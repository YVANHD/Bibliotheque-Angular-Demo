import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Livre } from '../model-livre';
import { LivreService } from 'src/app/services/livre.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lister',
  templateUrl: './lister.component.html',
  styleUrls: ['./lister.component.css']
})
export class ListerComponent implements OnInit {
  // importation des objets Livre et LIVRES
  // creation dune propriete tableau de personne initialisé avec LIVRES via la methode ngOnInit()
  private livres: Livre[];

  constructor(
    private router: Router,
    private livreService: LivreService
    private http: HttpClient ) { }

  ngOnInit(): void {
  this.livres = this.livreService.getAllLivres();
  }

  // on cree une action de click sur le livre selectionné. ceci est la
  // methode pour intercepter le click
  selectLivr(livre: Livre): void {
    // au click sur un element, ecrire les infos dans la console
      console.log(livre);
      // au click sur un element, afficher les infos dans une boite de dialogue
      // alert('Le Titre ' + livre.name + ' écrit par ' + livre.auteur);
      this.router.navigate(['livre', livre.id]);
  }

  deleteLivre(livre: Livre): void {
    if (window.confirm('etes-vous sur de vouloir supprimer ?')) {
      this.livreService.deleteLivre(livre);
      this.livres = this.livreService.getAllLivres();
    }
  }

}
