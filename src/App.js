import React, { Component } from "react";
import ChampCard from "./components/ChampCard";
import Instructions from "./components/Instructions";
import Score from "./components/Score";
import Wrapper from "./components/Wrapper";
import leaguechamps from "./leaguechamps.json";

class App extends Component {
  state = {
    leaguechamps,
    score: 0,
    topScore: 0
  };

  componentDidMount() {
    this.setState({
      leaguechamps: this.shuffle(this.state.leaguechamps)
    }, () => {
      console.log("Images shuffled")
    });
  };

  clickedOn = id => {
    console.log(id);
    this.setState({
      leaguechamps: this.shuffle(this.state.leaguechamps)
    });
  };

  shuffle = (array) => {
    let indexCurrent = array.length, temporaryValue, randomIndex;
    while (0 !== indexCurrent) {
      randomIndex = Math.floor(Math.random() * indexCurrent);
      indexCurrent -= 1;
      temporaryValue = array[indexCurrent];
      array[indexCurrent] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };



  render() {
    return (
      <div>
        <Instructions />
        <Score />
        <Wrapper>
          {this.state.leaguechamps.map(champ => (
            <ChampCard
              clickedOn={this.clickedOn}
              id={champ.id}
              name={champ.name}
              image={champ.image}
            />
          ))}
      </Wrapper>
      </div>
    );
  }
}



export default App;