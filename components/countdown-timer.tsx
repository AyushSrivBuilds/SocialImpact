"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: Date
  onComplete?: () => void
  className?: string
}

export default function CountdownTimer({ targetDate, onComplete, className }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference <= 0) {
        setIsComplete(true)
        if (onComplete) {
          onComplete()
        }
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate, onComplete])

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num
  }

  if (isComplete) {
    return <div className={className}>Campaign has started!</div>
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex flex-col items-center">
        <span className="text-lg font-bold">{formatNumber(timeLeft.days)}</span>
        <span className="text-xs">Days</span>
      </div>
      <span className="text-lg font-bold">:</span>
      <div className="flex flex-col items-center">
        <span className="text-lg font-bold">{formatNumber(timeLeft.hours)}</span>
        <span className="text-xs">Hours</span>
      </div>
      <span className="text-lg font-bold">:</span>
      <div className="flex flex-col items-center">
        <span className="text-lg font-bold">{formatNumber(timeLeft.minutes)}</span>
        <span className="text-xs">Mins</span>
      </div>
      <span className="text-lg font-bold">:</span>
      <div className="flex flex-col items-center">
        <span className="text-lg font-bold">{formatNumber(timeLeft.seconds)}</span>
        <span className="text-xs">Secs</span>
      </div>
    </div>
  )
}
