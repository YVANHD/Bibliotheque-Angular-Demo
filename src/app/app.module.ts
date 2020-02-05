import { LivreService } from './services/livre.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LivreComponent } from './livre/livre.component';
import { FontDirective } from './font.directive';
import { HomeComponent } from './home/home.component';
import { SingleComponent } from './livre/single/single.component';
import { AjoutComponent } from './livre/ajout/ajout.component';
import { EditComponent } from './livre/edit/edit.component';
import { ListerComponent } from './livre/lister/lister.component';

@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    HomeComponent,
    SingleComponent,
    AjoutComponent,
    EditComponent,
    ListerComponent,

    FontDirective,
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule apres BrowserModule.
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  // declaration des services dans providers
  providers: [
LivreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
