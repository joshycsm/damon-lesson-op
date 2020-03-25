import React, { Component } from "react";
import CharacterCard from "./CharacterCard";
import FavoriteCollection from "./FavoriteCollection";

export default class CharacterCollection extends Component {
  showCharacters = () =>
    this.props.characters.map(character => (
      <CharacterCard
        key={character.id}
        clickAction={this.props.addToFavorites}
        character={character}
      />
    ));

  render() {
    return (
      <div>
        <ul>{this.showCharacters()}</ul>
      </div>
    );
  }
}
