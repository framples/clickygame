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
    topScore: 0,
    tracker: [],
    message: ""
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

  scoreBoard = (id) => {
    if (this.state.tracker.includes(id)) {
      this.setState({
        score: 0,
        message: "Wah(ducknoise).  Incorrect!",
        tracker: []
      });
    } else {
      let temporaryValue = this.state.tracker;
      let topScore = this.state.topScore > this.state.score ? this.state.topScore : this.state.topScore +1;
      temporaryValue.push(id);
      this.setState({
        score: this.state.score + 1,
        topScore: topScore,
        message: "Nice!",
        tracker: temporaryValue
      });
    }
  }



  render() {
    return (
      <div>
        <Score />
        <Instructions
        score={this.state.score}
        topScore={this.state.topScre} />
        
        <Wrapper>
          {this.state.leaguechamps.map(champ => (
            <ChampCard
              clickedOn={this.clickedOn}
              id={champ.id}
              name={champ.name}
              image={champ.image}
              shuffle={this.shuffle}
              scoreBoard={this.score}
            />
          ))}
      </Wrapper>
      </div>
    );
  }
}



export default App;