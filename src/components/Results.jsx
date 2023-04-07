import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { QuizContext } from '../context/QuizContext'
import Throphy from '../img/trophy.png'
import Sad from '../img/sad.png'

function Results() {
  const navigate = useNavigate()

  const { score, correctAnswers } = useContext(QuizContext)
  return (
    <div className='bg-white max-w-xl p-4 mx-auto mt-10 rounded shadow-lg flex flex-col items-center space-y-6'>
      {score > 5 ? (
        <>
          <img src={Throphy} alt='' className='w-20' />
          <p>Congratulation You Passed the quiz</p>
        </>
      ) : (
        <>
          <img src={Sad} alt='' className='w-20' />
          <p>Unfotunately You didn't pass the quiz Good luck next Time</p>
        </>
      )}
      <p> Your score : {score}</p>

      <hr />
      <h1>Your Correct Answers</h1>
      {correctAnswers.map((qst) => (
        <>
          <h2> Q -{qst.question}</h2>
          <p> A -{qst.correct_answer}</p>
          <hr className='text-gray-900'/>
        </>
      ))}
    </div>
  )
}

export default Results
