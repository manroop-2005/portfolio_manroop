'use client'

import React, { useState, useEffect } from 'react'

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateCursorPosition)

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100]"
      style={{
        background: `radial-gradient(300px at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    >
      <div
        className="absolute rounded-full mix-blend-overlay"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '30px',
          height: '30px',
          backgroundColor: 'rgba(29, 78, 216, 0.3)',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 20px 5px rgba(29, 78, 216, 0.3)',
        }}
      />
    </div>
  )
}

export default Cursor




