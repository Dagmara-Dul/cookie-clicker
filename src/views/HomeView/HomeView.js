import React from "react";
import styled from 'styled-components';
import CookieBtn from '../../components/CookieBtn/CookieBtn'
import ScoreCounters from '../../components/ScoreCounters/ScoreCounters'

// const SpanBtn = styled.span`
//   background: url('../../media/cookie.png') !important;
//   background-size:cover;
//   width:100px;
//   height:100px;
// `

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


  render() {
    return (
      <>
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <ScoreCounters pointScore={this.state.score} level={this.state.level}></ScoreCounters>
          {/* <div>
            <span>{this.state.score}</span>
            <span>{this.state.level}</span>
          </div> */}
          
          {/* <button onClick={this.handleClickFn}>
            click
          </button> */}
          <CookieBtn handleClickFn={this.handleClickFn}>Cookie</CookieBtn>
        </div>
      </>
    );
  }
}
