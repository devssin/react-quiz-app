import React from 'react'
import { QuizProvider } from './context/QuizContext'
import QuizContainer from './components/QuizContainer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Results from './components/Results'
const router = createBrowserRouter([
  {
    path: '/',
    element: <QuizContainer />,
  },{
    path: '/results',
    element : <Results />
  }
])

function App() {
  return (
    <QuizProvider>
      <div className='min-h-screen bg-gray-300 p-4'>
        <h1 className='text-3xl font-black '>Quiz App</h1>
        <RouterProvider router={router} />
      </div>
    </QuizProvider>
  )
}

export default App
