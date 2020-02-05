import { AjoutComponent } from './livre/ajout/ajout.component';
import { ListerComponent } from './livre/lister/lister.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleComponent } from './livre/single/single.component';
import { EditComponent } from './livre/edit/edit.component';



const appRoutes: Routes = [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'listeLivres',              // represente un url de L'application
       component: ListerComponent  // represente le composant qui gere cet URL
    },
    {
      path: 'livre/:id',              // represente un url de L'application
       component: SingleComponent  // represente le composant qui gere cet URL
    },
    {
      path: 'ajouterLivre',              // represente un url de L'application
       component: AjoutComponent  // represente le composant qui gere cet URL
    },
    {
      path: 'modifierLivre/:id',              // represente un url de L'application
       component: EditComponent  // represente le composant qui gere cet URL
    },
    {
      path: '',               // la racine de l'appli
       redirectTo: '/home',  // redirige vers l'url qui doit gerer notre page d'accueil
        pathMatch: 'full'     // tout url non définie devra etre considéré comme vide('')
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
