import React from "react";
import CookieBtn from '../../components/CookieBtn/CookieBtn';
import ScoreCounters from '../../components/ScoreCounters/ScoreCounters';
import Button from '../../components/Button/Button';
import { WizardButton } from '../../components/Button/Button';
import { ButtonContainer } from '../../components/Button/Button';
import styled from 'styled-components';

const Container = styled.div`
  text-align:center;
  display:flex;
  flex-direction: column;
  align-items:center;
  max-width: 1024px;
  margin: 200px auto;
  padding: 30px 40px;
  `;


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
      score: this.state.score,
      level: this.state.level,
      nextLevelScore: this.state.nextLevelScore,
    }
    fetch('link', {
      method: 'POST',
      body: JSON.stringify(obj)
    })
  }

  

  render() {

    return (
      <>
        <Container>
          <h1>CookieClicker</h1>
          <h2>Start clicking now, and watch your brain getting smaller!</h2>
          <ScoreCounters pointScore={this.state.score} level={this.state.level}></ScoreCounters>
          <CookieBtn handleClickFn={this.handleClickFn}>Cookie</CookieBtn>
          <ButtonContainer>
            <Button onClickFn={this.saveScoreFn}>Save</Button>
            <Button onClickFn={this.clearLocalStorageFn}>Restart</Button>
          </ButtonContainer>
          <WizardButton  onClickFn={this.sendScoreFn}>send score to cookie wizard</WizardButton>
        </Container>
      </>
    );
  }
}
