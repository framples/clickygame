import React, { Component } from "react";
import ChampCard from "./components/ChampCard";
import Instructions from "./components/Instructions";
import Score from "./components/Score";
import Wrapper from "./components/Wrapper";
import leaguechamps from "./leaguechamps.json";

let correctClicks = 0;
let topScore = 0;
let clickMessage = "Pick something meta or open mid.";

class App extends Component {
  state = {
    leaguechamps,
    clickMessage,
    topScore,
    correctClicks
  };

  chooseChamp = id => {
    const leaguechamps = this.state.leaguechamps;
    const clickedDupe = leaguechamps.filter(leaguechamps => leaguechamps.id === id);

    if (clickedDupe[0].clicked) {
      console.log("Score: " + correctClicks);
      console.log("Top Score: " + topScore);

      correctClicks = 0;
      clickMessage = "You picked the same champ twice - get good and start over.";

      for (let i = 0; i < leaguechamps.length; i++) {
        leaguechamps[i].clicked = false;
      }

      this.setState({ clickMessage });
      this.setState({ correctClicks });
      this.setState({ leaguechamps });
    }

    else if (correctClicks < 11) {
      clickedDupe[0].clicked = true;

      correctClicks++;

      clickMessage = "You've been promoted - keep the climb going."

      if (correctClicks > topScore) {
        topScore = correctClicks;
        this.setState({ topScore });
      }

      for (let i = leaguechamps.length-1; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let itemIndex = leaguechamps[randomIndex];
        leaguechamps[randomIndex] = leaguechamps[i];
        leaguechamps[i] = itemIndex;
        this.setState({ leaguechamps });
        this.setState({ correctClicks });
        this.setState({ clickMessage });
      }
    }
    else {
      clickedDupe[0].clicked = true;
      correctClicks = 0;
      clickMessage = "You're better than faker - congratulations!";
      topScore = 12;
      this.setState({ topScore });

      for (let i = 0; i < leaguechamps.length; i++) {
        leaguechamps[i].clicked = false;
      }

      for (let i = leaguechamps.length - 1; i >= 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let itemIndex = leaguechamps[randomIndex];
        leaguechamps[randomIndex] = leaguechamps[i];
        leaguechamps[i] = itemIndex;
        this.setState({ leaguechamps });
        this.setState({ correctClicks });
        this.setState({ clickMessage });
      }
    }
  }



  render() {
    return (
      <div>
        <Score 
          clickMessage={this.state.clickMessage}
          correctClicks={this.state.correctClicks}
          topScore={this.state.topScore} />
        <Instructions

        />

        <Wrapper>
          {this.state.leaguechamps.map(champ => (
            <ChampCard
              chooseChamp={this.chooseChamp}
              id={champ.id}
              key={champ.id}
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