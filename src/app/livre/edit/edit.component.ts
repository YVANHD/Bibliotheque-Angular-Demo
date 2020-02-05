import { Component, OnInit } from '@angular/core';
import { Livre } from '../model-livre';
import { Router, ActivatedRoute } from '@angular/router';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
livre: Livre;

  constructor(private router: Router,
              private livreService: LivreService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.params.id;
    this.livre = this.livreService.getOne(id);
  }


  onEdit(): void {
    this.livreService.updateLivre(this.livre);
    this.router.navigate(['/listeLivres']);
  }



}
