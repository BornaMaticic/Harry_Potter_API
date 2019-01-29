import React from 'react';
import CharacterSelector from '../components/CharacterSelector';
import HouseSelector from '../components/HouseSelector';
import CharacterDetail from '../components/CharacterDetail';

class CharacterContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      characters:[],
      houses:['Slitherin','Hufflepuff', 'Gryffindor', 'Ravenclaw'],
      currentCharacter: null,
      currentHouses: null
    };
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
    this.handleHouseSelected = this.handleHouseSelected.bind(this);
  }

  componentDidMount(){
    const url = 'http://hp-api.herokuapp.com/api/characters';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener("load", () => {
     const jsonString = request.responseText;
     const characterObjects = JSON.parse(jsonString);
     // const houseObjects = JSON.parse(jsonString);
     this.setState({characters: characterObjects});

});

    request.send();
  }

  handleCharacterSelected(index) {
    const selectedCharacter = this.state.characters[index];
    this.setState({currentCharacter: selectedCharacter})
  }
  handleHouseSelected(index) {
    const selectedHouse = this.state.houses[index];
    this.setState({currentHouse: selectedHouse})
  }

  render(){
    return (
      <div>
      <h2>Character Container</h2>
      <HouseSelector houses={this.state.houses} onHouseSelected={this.handleHouseSelected} />
      <CharacterSelector characters={this.state.characters} onCharacterSelected={this.handleCharacterSelected} />
      <CharacterDetail character={this.state.currentCharacter} />
      </div>
    );
  }
}

export default CharacterContainer;


// 1. Diagram the component structure
// 2. Diagram how data is distributed between the components
// 3. Where is country selected?
// 4. Draw and explain the data flow that happens when a country is selected?
