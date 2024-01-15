import React, { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { usePlayer } from "@empirica/core/player/classic/react";
import { useRef } from "react";

export function SalesResults({roundNumber}) {
  console.log('calculating advertiser score');
  const player = usePlayer();
  const roundNumberText = 'round' + roundNumber;
  
  //const adQuality = player.get("adQuality");
  const productionQuality = player.get(roundNumberText.concat("_choices"))[0]
  const advertisementQuality = player.get(roundNumberText.concat("_choices"))[1]
  const priceOfProduct = player.get(roundNumberText.concat("_choices"))[2]
  const productionCost = player.get(roundNumberText.concat("_choices"))[3]
  const warrantAmount = player.get(roundNumberText.concat("_choices"))[4] || 0
  let imageUrl = "";
  //console.log('roundNumberText', roundNumberText)
  if (advertisementQuality === "high") {
    imageUrl = "/images/toothpaseamazing.jpg"; // Replace with the actual URL for high quality
  } else if (advertisementQuality === "low") {
    imageUrl = "/images/toothpastestandard.jpg"; // Replace with the actual URL for low quality
  }

  const currentScore = player.get("score") || 0; // , adQuality, points, salesCount, numBuyers
  
  //let points = 10;
  let points = priceOfProduct

  const min = 10;
  const max = 90 + (warrantAmount * 2);
  
  //  switch (advertisementQuality){
  //    case "high":
  //      switch (priceOfProduct) {case "high": min = 50; break; case "low": min = 70; break;
  //      };
  //    case "low":
  //      switch (priceOfProduct) {case "high": min =10, max=20; break; case "low": min = 50, max = 80; break;}
  //  }
  const numBuyers = Math.floor((Math.random() * (max - min ) + min)) ;


  const salesCount = numBuyers * (priceOfProduct - productionCost);

  function determineChallenge(){
    const chance = Math.floor((1 - (0.999**max))*100)
    const gen = Math.floor(Math.random() * 101)
    if (warrantAmount == 0 || gen > chance){
      console.log("not challenged")
      return false;
    }
    else {
      console.log("challenged")
      if(productionQuality == advertisementQuality){
        console.log("challenge passed")
        return false;
      }
      console.log("challenge failed")
      return true;
    }
  }
  const challenged = determineChallenge();

  function calculateFinalScore(){
    if(challenged == true){
      return currentScore - warrantAmount;
    }
    else{
      return currentScore + salesCount;
    }
  }
  const finalScore = calculateFinalScore()

  function handleSubmit() {
    console.log('Moving on from results round');
    player.stage.set("submit", true);
    player.set("score", finalScore);
  }
  
  return (
    <div className="mt-3 sm:mt-5 p-20">
      <h1 className="text-lg leading-6 font-medium text-gray-900">
        Sales
      </h1>
      <div className="text-lg mt-2 mb-6">
        {/* <p className="text-sm text-gray-500"> */}
        <p>
          You chose to produce a <b>{productionQuality}</b> quality product.
        </p>
        <p>
          You chose to advertise it as a <b>{advertisementQuality}</b> quality product.
        You sold it at a price of <b>${priceOfProduct}</b>.
        <br /> <br />
        </p>

        <img src={imageUrl} alt="Toothpaste Standard" width="250" height="250"/>

        
        <p>It was advertised to an audience of {max} users.</p><br/>
        <FinalResult />
        <br/>
        <p> 
          Click to proceed to the next round to sell products in this marketplace.
        </p>
      </div>
      <Button handleClick={handleSubmit} primary>
        I'm done!
      </Button>
    </div>
  );

  function FinalResult(){
    if(challenged == true){
      return(
        <div>
          <b>Your warrant was successfully challenged.</b>
          <p>You lost <b>${warrantAmount}</b> on placing the warrant and were unable to make any sales</p><br/>
          <p> Your score for this round is: -{warrantAmount} </p>
          <p> Your total score is: {currentScore - warrantAmount} </p>
        </div>
      )
    }
    else{
      return(
        <div>
          <p>{numBuyers} users bought your product.</p>
          <p> You earned ${priceOfProduct - productionCost}  per product x {numBuyers} units sold = {salesCount} points in sales.</p><br/>
          <p> Your score for this round is: {salesCount} </p>
          <p> Your total score is: {salesCount + currentScore} </p>
        </div>
      )
    }
  }
}