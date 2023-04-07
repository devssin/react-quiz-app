import { createContext, useState, useEffect } from 'react'

import axios from 'axios'

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)
  const [correctAnswers, setcorrectAnswers] = useState([])

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(
          'https://opentdb.com/api.php?amount=10'
        )
        const shuffledQuestions = response.data.results.map((question) => {
          question.incorrect_answers = shuffleArray(
            question.incorrect_answers.concat(question.correct_answer)
          )
          return question
        })
        setQuestions(shuffledQuestions)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchQuestions()
  }, [])

  const handelNext = () => {
    setCurrentIndex(currentIndex + 1)
    setIsAnswered(false)
    setIsCorrect(false)
  }

  const handleAnswers = (answer) => {
    setIsAnswered(true)
    if (answer === questions[currentIndex].correct_answer) {
      correctAnswers.push(questions[currentIndex])
      setScore(score + 1)
      setIsCorrect(true)
    }
  }
  const handleSubmit = () => {
    console.log(score)
  }

  return (
    <QuizContext.Provider
      value={{
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
        handelNext,
        handleAnswers,
        handleSubmit,
        correctAnswers
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}
