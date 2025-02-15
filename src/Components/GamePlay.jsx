import { useEffect, useState } from 'preact/hooks'
import React from 'react'
import RollDice from './RollDice';

function GamePlay() {
    const [score,setScore]=useState(0);
    const arrnum=[1,2,3,4,5,6];
    const [selectedNum,setSelectedNum]=useState();
    const [dicevalue,setDiceValue]=useState(1);
    const [error,seterror]=useState("")

    console.log(selectedNum);

    function Reset(){
        setScore(0);
    }

  

  return (
    <main>
        <div className='flex justify-between mx-32 my-8 md:flex-col md:gap-10 md:mx-4 md:my-8'>
            <div className='flex flex-col justify-center items-center md:mb-10'>
                <p className='font-semibold text-6xl '>{score}</p>
                <p className='font-bold text-xl'>Total Score</p>
                </div>
            <div className='flex flex-col justify-between md:mb-10 '> 
                {error===""? "":<p className='text-red-500' >{error}</p>}
                <div className='flex  gap-4 mb-4 md:w-[100%]'>
                    {arrnum.map((value,i)=>(
                    <button  onClick={()=>setSelectedNum(value)} key={i} className={`flex border-2 border-black w-14 h-14 items-center justify-center font-bold hover:bg-black hover:text-white ${selectedNum===value ? "bg-black text-white":""}`}>{value}</button>
                ))}
                </div>
                <p className=' flex font-bold text-xl justify-end md:justify-center'>Select Number </p>
            </div>
        </div>
        <div className='flex justify-center'>
            <RollDice  reset={Reset}  setDiceValue={setDiceValue} selectedNum={selectedNum} setScore={setScore} setSelectedNum={setSelectedNum} seterror={seterror}/>
        </div>
    </main>
  )
}

export default GamePlay