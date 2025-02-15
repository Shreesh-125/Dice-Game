import React from 'react'
import style from '../../public/images/startdice.png'

function StartPage({toggle}) {
  return (
    <div className='flex h-full m-auto justify-center items-center my-32 sm:flex-col'>
        <div>
            <img src={style} alt="Dice Pic" width='400px' />
        </div>
        <div className='flex flex-col items-center justify-center mx-8'>
            <p className='text-8xl font-bold my-10'>DICE GAME</p>
           <div className='flex justify-end w-full'><button onClick={toggle} className='bg-black text-white p-2 px-12 rounded-md font-poppins font-bold hover:bg-gray-700 '>Play Game</button>
   </div> 
        </div>
    </div>
    
  )
}

export default StartPage