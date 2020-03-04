import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PokeData {
  id: string;
  name: string;
  sprites: { front_default: string };
}

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private httpClient: HttpClient) { }

  /**
   * getPokemon accepts a string input which will be used
   * as part of the API request to the poke API.  This string
   * should represent a pokemon by name or ID.
   * It will then send a GET request to the poke API and return
   * a promise holding the API data payload.
   * 
   * We can provide typing information for the request
   * by providing a generic parameter to the httpClient
   * method called.  In this example, we create an
   * interface with the structure of the API data
   * that we want to use.  We type the request to it
   * and then downstream code can use proper
   * type inference for easier development/maintance.
   */
  getPokemon(input: string): Promise<PokeData> {
    const url = `https://pokeapi.co/api/v2/pokemon/${input}/`;
    return this.httpClient.get<PokeData>(url).toPromise();
  }

}
