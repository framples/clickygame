import React, { Component } from "react";
import ChampCard from "./components/ChampCard";
import Instructions from "./components/Instructions";
//import Score from "./components/Score";
import Wrapper from "./components/Wrapper";
import leaguechamps from "./leaguechamps.json";

class App extends Component {
  state = {
    leaguechamps
  };

  render () {
    return (
      <Wrapper>
        <Instructions>Clicky Game</Instructions>
        {this.state.leaguechamps.map(champ => (
          <ChampCard
          id={champ.id}
          name={champ.name}
          image={champ.image}
          />
        ))}
      </Wrapper>
    )
  }

  
}



export default App;