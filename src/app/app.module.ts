import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { BabyPipe } from './pipes/baby.pipe';
import { FormsModule } from '@angular/forms';
import { FoodService } from 'src/app/services/food.service';
import { OrderComponent } from './components/order/order.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { PizzaComponent } from './components/food/pizza/pizza.component';
import { TacosComponent } from './components/food/tacos/tacos.component';
import { HamburgersComponent } from './components/food/hamburgers/hamburgers.component';
import { OrderContainerComponent } from './components/order-container/order-container.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FishTacosComponent } from './components/food/fish-tacos/fish-tacos.component';
import { BeefTacosComponent } from './components/food/beef-tacos/beef-tacos.component';
import { PokeComponent } from './components/poke/poke.component';
import { PokeService } from 'src/app/services/poke.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    OrderComponent,
    OrderItemsComponent,
    BabyPipe,
    PizzaComponent,
    TacosComponent,
    HamburgersComponent,
    OrderContainerComponent,
    NavBarComponent,
    FishTacosComponent,
    BeefTacosComponent,
    PokeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],

  // providers can be used to register services
  providers: [ FoodService, PokeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
