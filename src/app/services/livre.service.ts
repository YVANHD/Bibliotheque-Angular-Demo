import { Injectable } from '@angular/core';
import { LIVRES, Livre } from '../livre/model-livre';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor() { }

      // retourner la liste des livres
    getAllLivres(): Livre[] {
      return LIVRES;
    }

       // retourner le livre dont l'id est passé en parametre
    getOne(id: number): Livre {
      const livres = this.getAllLivres();
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < livres.length; i++) {
          if (id === livres[i].id) {
            return livres[i];
          }
      }
    }

    addLivre(livre: Livre): void {
      LIVRES.push(livre);

    }

    updateLivre(livre: Livre): void {
      for ( let i = 0; i < this.getAllLivres().length ; i++) {
        if (livre.id === this.getAllLivres()[i].id) {
          this.getAllLivres()[i] = livre;
        }
      }
    }

    deleteLivre(livre: Livre): void {
      // tslint:disable-next-line:prefer-for-of
      for ( let i = 0; i < this.getAllLivres().length; i++) {
        if (livre.id === this.getAllLivres()[i].id) {
          this.getAllLivres().splice(i, 1);
          console.log('livre supprimmé');
        }
      }
    }

}
