import React from 'react';
import styled from 'styled-components';

const ScoreCountersWrapper = styled.div`
    display:flex;
    justify-content:space-between;
`

const ScoreCounters = ( {pointScore, level} ) => {

    return(
        <ScoreCountersWrapper>
            <span>points: {pointScore}</span>
            <span>level: {level}</span>
        </ScoreCountersWrapper>
    )
}

export default ScoreCounters;

