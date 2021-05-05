import React from "react";
import CookieBtn from '../../components/CookieBtn/CookieBtn'
import ScoreCounters from '../../components/ScoreCounters/ScoreCounters'


export default class Home extends React.Component {
  state = {
    score: 0,
    level: 1,
    nextLevelScore: 10,
  }


  handleLevelFn = () => {
    let nextLevelScore = this.state.nextLevelScore;
    let score = this.state.score;
    if (score === nextLevelScore) {
      this.setState((prevState) => ({
        level: prevState.level + 1,
        nextLevelScore: prevState.nextLevelScore * 2
      }))
    }
  }

  handleSumPointsFn = async () => {
    this.setState((prevState) => ({
      score: prevState.score + 1
    }))
  }


  handleClickFn = () =>{
    this.handleSumPointsFn().then(this.handleLevelFn)
  }


  saveScoreFn = () => {
    const playerScore = {
      score: this.state.score,
      level: this.state.level,
      nextLevelScore: this.state.nextLevelScore,
    };
    
    localStorage.setItem("playerScore", JSON.stringify(playerScore))
    alert("Saved!")
  }

  loadScoreFn = () => {
    const retrievedPlayerScore = JSON.parse(localStorage.getItem("playerScore"))
    if (retrievedPlayerScore){
      this.setState({
        score: retrievedPlayerScore.score,
        level: retrievedPlayerScore.level,
        nextLevelScore: retrievedPlayerScore.nextLevelScore,
      })
    }
  }

  componentDidMount = () => {
    this.loadScoreFn();
  }

  // componentDidUpdate = () => {
  //   if (shouldBlockNavigation) {
  //     window.onbeforeunload = () => alert("halo!")
  //   } else {
  //     window.onbeforeunload = alert("mama")
  //   }
  // }

  clearLocalStorageFn = () => {
    const playerScore = {
      score: 0,
      level: 1,
      nextLevelScore: 10,
    };

    localStorage.setItem("playerScore", JSON.stringify(playerScore))
    this.loadScoreFn();
  }
  

  sendScoreFn = () => {
    console.log("cookie wizard says hello")
    const obj = {

    }
    fetch('...', {
      method: 'POST',
      body: JSON.stringify(obj)
    })
  }

  render() {
    
    // window.addEventListener("unload", function (){
    //   alert("halo!")
    // })

    return (
      <>
      {/* { window.onbeforeunload = function(e) {
        saveScoreFn()  
        return "please"
      }
      } */}
    
        <div className="App">
          <h1>CookieClicker</h1>
          <h2>Start clicking now, and watch your brain getting smaller!</h2>
          <ScoreCounters pointScore={this.state.score} level={this.state.level}></ScoreCounters>
          <CookieBtn handleClickFn={this.handleClickFn}>Cookie</CookieBtn>
          <button onClick={this.saveScoreFn}>
            save
          </button>
          <button onClick={this.clearLocalStorageFn}>
            restart
          </button>
          <button onClick={this.sendScoreFn}>
            sendyour score to cookie wizard
          </button>
        </div>
      </>
    );
  }
}
