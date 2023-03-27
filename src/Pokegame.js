import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    Pokemon: [
      { id: 4, name: "Charmendar", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 62 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 62 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 62 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 62 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 62 },
      { id: 94, name: "Gengar", type: "poision", base_experience: 62 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 62 },
    ],
  };
  render() {
    let hand1 = [];
    let hand2 = [...this.props.Pokemon];
    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
    }
    return (
      <div>
        <h1>Pokegame!</h1>
      </div>
    );
  }
}
export default Pokegame;
