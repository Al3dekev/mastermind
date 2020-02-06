import { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {GameComponent} from './components/game/game.component';

const appRoutes: Routes = [
  {path: 'game', component: GameComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
