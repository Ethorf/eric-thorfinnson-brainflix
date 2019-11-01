import React from 'react';

const SkillCard = (props) => {
    return (
      <div onClick={props.clickHandler} className="hero-summoned__stat calc-stat bstn-flex-grow bstn-flex-col bstn-flex bstn-p-4 bstn-bg-white bstn-rounded-lg">
        <span className="calc-stat__name bstn-type-header-4 bstn-text-denim-darker bstn-font-bold">{props.statName}</span>
        <span className="calc-stat__value bstn-type-header-3 bstn-text-supernova-dark">{props.statVal}</span>
      </div>
    );
  }

  export default SkillCard;