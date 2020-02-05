import { LivreService } from './../services/livre.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

 
  constructor( private livreService: LivreService) { }

  ngOnInit() {
  }



}
