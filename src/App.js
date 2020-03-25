import React, { Component } from "react";
import "./App.css";
import CharacterCard from "./components/CharacterCard";
import FavoriteCollection from "./components/FavoriteCollection";
import CharacterCollection from "./components/CharacterCollection";

class App extends Component {
  state = {
    characters: [],
    favorites: []
  };

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then(obj => this.setState({ characters: obj.results }));
  }

  // if you were to create components for this, move this into that component
  showCharacters = () =>
    this.state.characters.map(character => (
      <CharacterCard
        key={character.id}
        clickAction={this.addToFavorites}
        character={character}
      />
    ));

  // if you were to create components for this, move this into that component
  showFavorites = () =>
    this.state.favorites.map(character => (
      <CharacterCard
        key={character.id}
        clickAction={this.removeFromFavorites}
        character={character}
      />
    ));

  // if you created additional components, pass these functions down into those components
  addToFavorites = character => {
    if (!this.state.favorites.find(char => character.id === char.id)) {
      this.setState({
        favorites: [...this.state.favorites, character]
      });
    }
  };

  // if you created additional components, pass these functions down into those components
  removeFromFavorites = character => {
    const filtered = this.state.favorites.filter(
      char => char.id !== character.id
    );
    this.setState({
      favorites: filtered
    });
  };

  render() {
    console.log(this.state.characters);
    return (
      <div className="App">
        <h1>Rick and Morty App</h1>
        <section>
          <h2>Favorites</h2>
          <FavoriteCollection
            favorites={this.state.favorites}
            removeFromFavorites={this.removeFromFavorites}
          />
        </section>
        <section>
          <h2>Characters</h2>
          <CharacterCollection
            characters={this.state.characters}
            addToFavorites={this.addToFavorites}
          />
        </section>
      </div>
    );
  }

  // render() {
  //   console.log(this.state.characters);
  //   return (
  //     <div className="App">
  //       <h1>Rick and Morty App</h1>
  //       <section>
  //         <h2>Favorites</h2>
  //         {this.showFavorites()}
  //       </section>
  //       <section>
  //         <h2>Characters</h2>
  //         {this.showCharacters()}
  //       </section>
  //     </div>
  //   );
  // }
}

export default App;
