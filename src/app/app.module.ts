import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListFilmesComponent } from './list-filmes/list-filmes.component';
import { FilmeDetailsComponent } from './filme-details/filme-details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ListFilmesComponent },
      { path: 'filmes/:filmeId', component: FilmeDetailsComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ListFilmesComponent,
    FilmeDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
