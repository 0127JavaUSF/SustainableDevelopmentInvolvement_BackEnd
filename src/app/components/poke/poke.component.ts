import { Component, OnInit } from '@angular/core';
import { PokeService, PokeData } from 'src/app/services/poke.service';

@Component({
  selector: 'app-poke',
  templateUrl: './poke.component.html',
  styleUrls: ['./poke.component.css']
})
export class PokeComponent implements OnInit {

  pokeData = {
    name: '',
    imgSrc: '',
    id: ''
  };

  pokeInput = '';
  constructor(private pokeService: PokeService) { }

  ngOnInit() {
  }

  /**
   * When search is called, we will ask the PokeService
   * to find data for us. Because this involves HTTP
   * it will be an asynchronous operation. getPokemon returns
   * a promise, so we can await the result and then just
   * assign values.
   */
  async search() {
    const result: PokeData = await this.pokeService
      .getPokemon(this.pokeInput);

    this.pokeData.name = result.name;
    this.pokeData.imgSrc = result.sprites.front_default;
    this.pokeData.id = result.id;

    // Clear current input value
    this.pokeInput = '';
  }
}
