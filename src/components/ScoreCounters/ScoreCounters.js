import React from 'react';
import styled from 'styled-components';

const ScoreCountersWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    margin: 100px auto;
    width:100%;
    
`

const SingleCounter = styled.span`
    font-size:28px;
    font-weight: bold;
    color: #1D85B8;
`;

const ScoreCounters = ( {pointScore, level} ) => {

    return(
        <ScoreCountersWrapper>
            <SingleCounter>points: {pointScore}</SingleCounter>
            <SingleCounter>level: {level}</SingleCounter>
        </ScoreCountersWrapper>
    )
}

export default ScoreCounters;

