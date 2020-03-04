import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaComponent } from 'src/app/components/food/pizza/pizza.component';
import { HamburgersComponent } from 'src/app/components/food/hamburgers/hamburgers.component';
import { TacosComponent } from 'src/app/components/food/tacos/tacos.component';
import { FishTacosComponent } from 'src/app/components/food/fish-tacos/fish-tacos.component';
import { BeefTacosComponent } from 'src/app/components/food/beef-tacos/beef-tacos.component';
import { PokeComponent } from 'src/app/components/poke/poke.component';

/**
 * Registration of our routes
 * when the URL context is /pizzas then the router-outlet will render PizzaComponent
 */
const routes: Routes = [{
  component: PokeComponent,
  path: 'pokemon'
 }, {
  component: PizzaComponent,
  path: 'pizzas'
}, {
  component: HamburgersComponent,
  path: 'hamburgers'
}, {
  component: TacosComponent,
  path: 'tacos',
  children: [{
    path: 'fish',
    component: FishTacosComponent
  }, {
    path: 'beef',
    component: BeefTacosComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
