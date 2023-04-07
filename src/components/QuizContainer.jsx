import React, { useContext } from 'react'
import { QuizContext } from '../context/QuizContext'
import { Link } from 'react-router-dom'

const QuizContainer = () => {
  const {
    questions,
    setQuestions,
    currentIndex,
    setCurrentIndex,
    score,
    setScore,
    isCorrect,
    setIsCorrect,
    isAnswered,
    setIsAnswered,
    handleSubmit,
    handelNext,
    handleAnswers

  } = useContext(QuizContext)


  return (
    <div>
      {questions.length > 0 ? (
        <div className='bg-white p-4 mt-4 rounded-lg shadow-lg '>
          <h2 className='text-lg font-bold mb-2 text-center'>
            Question {currentIndex + 1}
          </h2>
          <p className='font-semibold text-center'>
            {' '}
            {questions[currentIndex].question}
          </p>

          <div className='flex flex-col space-y-3 my-3'>
            {questions[currentIndex].incorrect_answers.map((ansswer, index) => (
              <button
                onClick={(e) => handleAnswers(e.target.innerText)}
                key={index}
                className={`block w-full bg-blue-600 py-2 rounded text-white`}
              >
                {ansswer}
              </button>
            ))}
          </div>
          {isAnswered &&
            (isCorrect ? (
              <p className='text-green-600 my-3'>Correct Answer</p>
            ) : (
              <p className='text-red-600 my-3'>Incorrect answer</p>
            ))}

          <div className='flex justify-between items-center px-2'>
            {currentIndex < questions.length - 1 ? (
              <button
                onClick={handelNext}
                className='text-white bg-gray-700 rounded px-4 py-2'
              >
                Next
              </button>
            ) : (
              <Link
                to={'/results'}
                className='text-white bg-gray-700 rounded px-4 py-2'
              >
                Results
              </Link>
            )}

            <p>
              Score : {score} / {questions.length}{' '}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading questions ...</p>
      )}
    </div>
  )
}

export default QuizContainer
