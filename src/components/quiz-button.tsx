'use client'

import React from 'react'

interface QuizButtonProps {
  option: string
  label: string
  onClick: () => void
  isSelected?: boolean
  disabled?: boolean
}

export default function QuizButton({ 
  option, 
  label, 
  onClick, 
  isSelected = false, 
  disabled = false 
}: QuizButtonProps) {
  return (
    <button
      className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium ${
        isSelected
          ? 'border-blue-500 bg-blue-50'
          : 'border-slate-100 hover:border-blue-400 hover:bg-blue-50'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={onClick}
      disabled={disabled}
    >
      {option}. {label}
    </button>
  )
}
