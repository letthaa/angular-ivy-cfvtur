import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filme, filmes } from '../filmes';

@Component({
  selector: 'app-filme-details',
  templateUrl: './filme-details.component.html',
  styleUrls: ['./filme-details.component.css'],
})
export class FilmeDetailsComponent implements OnInit {
  filme: Filme | undefined;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const filmeId = Number(routeParams.get('filmeId'));
    this.filme = filmes.find((filme) => filme.id == filmeId);
  }
}
