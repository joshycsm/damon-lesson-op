import React, { Component } from "react";
import CharacterCard from "./CharacterCard";

export default class FavoriteCollection extends Component {
  showFavorites = () => {
    return this.props.favorites.map(character => {
      return (
        <CharacterCard
          key={character.id}
          clickAction={this.props.removeFromFavorites}
          character={character}
        />
      );
    });
  };

  render() {
    console.log(this.props.favorites);
    return (
      <div>
        <ul>{this.showFavorites()}</ul>
      </div>
    );
  }
}
