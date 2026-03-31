'use client'

import React, { useState } from 'react'
import QuizButton from './quiz-button'

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

interface QuizProps {
  questions: Question[]
  onComplete: (score: number) => void
}

export default function Quiz({ questions, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResult, setShowResult] = useState(false)

  const handleSelectOption = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = optionIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const score = calculateScore()
      setShowResult(true)
      onComplete(score)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let score = 0
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score++
      }
    })
    return score
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowResult(false)
  }

  if (showResult) {
    const score = calculateScore()
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Quiz Selesai!</h2>
        <p className="text-lg mb-6">
          Skor Anda: {score} dari {questions.length}
        </p>
        <button
          onClick={resetQuiz}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Mulai Ulang
        </button>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-medium text-gray-500">
            Pertanyaan {currentQuestion + 1} dari {questions.length}
          </span>
          <span className="text-sm font-medium text-gray-500">
            {selectedAnswers.filter((answer) => answer !== undefined).length} jawaban
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-6">{question.question}</h2>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <QuizButton
            key={index}
            option={String.fromCharCode(65 + index)} // A, B, C, D
            label={option}
            onClick={() => handleSelectOption(index)}
            isSelected={selectedAnswers[currentQuestion] === index}
          />
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Sebelumnya
        </button>
        <button
          onClick={handleNext}
          disabled={selectedAnswers[currentQuestion] === undefined}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentQuestion === questions.length - 1 ? 'Selesai' : 'Selanjutnya'}
        </button>
      </div>
    </div>
  )
}
