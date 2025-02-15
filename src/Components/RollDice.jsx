import React from 'react'
import dice1 from '../../public/images/dice_1.png'
import dice2 from '../../public/images/dice_2.png'
import dice3 from '../../public/images/dice_3.png'
import dice4 from '../../public/images/dice_4.png'
import dice5 from '../../public/images/dice_5.png'
import dice6 from '../../public/images/dice_6.png'
import { useState } from 'preact/hooks'

function RollDice({reset,setDiceValue,selectedNum,setScore,setSelectedNum,seterror}) {

    const dices=[dice1,dice2,dice3,dice4,dice5,dice6]

    const [ishowruls,setIsShowRules]=useState(false);
    const [currentDice ,setCurrentDice]=useState(dice1);
   

    function diceClickhandle(){

        if(!selectedNum) {
            seterror((prev)=>prev="You have not selected any number")

            return
        }

        const arr=[1,2,3,4,5,6];
        let temp=Math.floor(Math.random()*6+1);
        setCurrentDice((prev)=>prev=dices[temp-1]);
        setDiceValue(temp);

        
        seterror("")
        if(selectedNum===temp){
            setScore((prev)=>prev+temp)
        }
        else{
            setScore((prev)=>prev-2)
        }
        setSelectedNum(undefined)
        return 
    }
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center 2/5 ' >
            <div className='flex justify-center'  onClick={diceClickhandle}><img className='flex justify-center' src={currentDice } alt="dice 1" width={'200px'}/></div>
            <p className='flex justify-center text-xl font-semibold my-2'>Click The Dice to Roll</p>
            <button></button>
            <button className='border-black border-2 rounded-md py-2 font-bold text-lg my-2' onClick={reset}>Reset Score</button>
            <button className='border-black border-2 rounded-md py-2 font-semibold text-lg bg-black text-white my-2' onClick={()=>setIsShowRules((prev)=>!prev)}>Show Rules</button>

        </div>
        {ishowruls? <div className='flex flex-col bg-orange-100 w-3/5 p-2 my-4 md:w-[80%]'>
            <h1 className='font-bold text-2xl my-2'>How to Play Dice Game</h1>
            <ul className='font-semibold'>
                <li>Select Any Number</li>
                <li>Click on Dice image</li>
                <li>after click on  dice  if selected number is equal to dice number you will get same point as dice</li>
                <li>if you get wrong guess then  2 point will be dedcuted</li>
            </ul>
        </div> : ""}
        
    </div>
    
  )
}

export default RollDice