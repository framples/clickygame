import React, { Component } from "react";
import ChampCard from "./components/ChampCard";
import Instructions from "./components/Instructions";
import Score from "./components/Score";
import Wrapper from "./components/Wrapper";
import leaguechamps from "./leaguechamps.json";

class App extends Component {
  state = {
    leaguechamps
  };

  render () {
    return (
     <div>
      <Instructions />
      <Score />
      <Wrapper>
        {this.state.leaguechamps.map(champ => (
          <ChampCard
          id={champ.id}
          name={champ.name}
          image={champ.image}
          />
        ))};
      </Wrapper>
      </div>
    )
  }

  
}



export default App;