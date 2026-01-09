'use client'

import { useEffect, useState } from 'react'

interface PickleballCourtProps {
  variant?: 'lime' | 'magenta' | 'cyan' | 'gradient'
  className?: string
  animated?: boolean
}

export function PickleballCourt({
  variant = 'gradient',
  className = '',
  animated = true,
}: PickleballCourtProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const getColors = () => {
    switch (variant) {
      case 'lime':
        return { primary: '#CCFF00', secondary: '#9ACD32', glow: 'rgba(204, 255, 0, 0.5)' }
      case 'magenta':
        return { primary: '#FF00FF', secondary: '#FF69B4', glow: 'rgba(255, 0, 255, 0.5)' }
      case 'cyan':
        return { primary: '#00FFFF', secondary: '#00CED1', glow: 'rgba(0, 255, 255, 0.5)' }
      case 'gradient':
      default:
        return { primary: 'url(#courtGradient)', secondary: '#0A0A0A', glow: 'rgba(204, 255, 0, 0.3)' }
    }
  }

  const colors = getColors()

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 200 400"
        className={`w-full h-full ${animated && mounted ? 'animate-float' : ''}`}
        style={{
          filter: animated ? `drop-shadow(0 0 20px ${colors.glow})` : undefined,
        }}
      >
        <defs>
          <linearGradient id="courtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#CCFF00">
              {animated && (
                <animate
                  attributeName="stop-color"
                  values="#CCFF00;#00FFFF;#FF00FF;#CCFF00"
                  dur="8s"
                  repeatCount="indefinite"
                />
              )}
            </stop>
            <stop offset="50%" stopColor="#00FFFF">
              {animated && (
                <animate
                  attributeName="stop-color"
                  values="#00FFFF;#FF00FF;#CCFF00;#00FFFF"
                  dur="8s"
                  repeatCount="indefinite"
                />
              )}
            </stop>
            <stop offset="100%" stopColor="#FF00FF">
              {animated && (
                <animate
                  attributeName="stop-color"
                  values="#FF00FF;#CCFF00;#00FFFF;#FF00FF"
                  dur="8s"
                  repeatCount="indefinite"
                />
              )}
            </stop>
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Court outline */}
        <rect
          x="10"
          y="10"
          width="180"
          height="380"
          fill="none"
          stroke={colors.primary}
          strokeWidth="3"
          rx="4"
          filter="url(#glow)"
        />

        {/* Court interior */}
        <rect
          x="10"
          y="10"
          width="180"
          height="380"
          fill={colors.secondary}
          opacity="0.1"
        />

        {/* Center line */}
        <line
          x1="10"
          y1="200"
          x2="190"
          y2="200"
          stroke={colors.primary}
          strokeWidth="2"
          filter="url(#glow)"
        />

        {/* Non-volley zone (kitchen) - top */}
        <rect
          x="10"
          y="10"
          width="180"
          height="70"
          fill="none"
          stroke={colors.primary}
          strokeWidth="2"
          opacity="0.7"
        />

        {/* Non-volley zone (kitchen) - bottom */}
        <rect
          x="10"
          y="320"
          width="180"
          height="70"
          fill="none"
          stroke={colors.primary}
          strokeWidth="2"
          opacity="0.7"
        />

        {/* Service boxes - top left */}
        <rect
          x="10"
          y="80"
          width="90"
          height="120"
          fill="none"
          stroke={colors.primary}
          strokeWidth="1.5"
          opacity="0.5"
        />

        {/* Service boxes - top right */}
        <rect
          x="100"
          y="80"
          width="90"
          height="120"
          fill="none"
          stroke={colors.primary}
          strokeWidth="1.5"
          opacity="0.5"
        />

        {/* Service boxes - bottom left */}
        <rect
          x="10"
          y="200"
          width="90"
          height="120"
          fill="none"
          stroke={colors.primary}
          strokeWidth="1.5"
          opacity="0.5"
        />

        {/* Service boxes - bottom right */}
        <rect
          x="100"
          y="200"
          width="90"
          height="120"
          fill="none"
          stroke={colors.primary}
          strokeWidth="1.5"
          opacity="0.5"
        />

        {/* Center service line - top */}
        <line
          x1="100"
          y1="80"
          x2="100"
          y2="200"
          stroke={colors.primary}
          strokeWidth="1.5"
          opacity="0.5"
        />

        {/* Center service line - bottom */}
        <line
          x1="100"
          y1="200"
          x2="100"
          y2="320"
          stroke={colors.primary}
          strokeWidth="1.5"
          opacity="0.5"
        />

        {/* Net indicator */}
        <line
          x1="5"
          y1="200"
          x2="195"
          y2="200"
          stroke={colors.primary}
          strokeWidth="4"
          strokeDasharray="8 4"
          filter="url(#glow)"
        >
          {animated && (
            <animate
              attributeName="stroke-dashoffset"
              values="0;24"
              dur="1s"
              repeatCount="indefinite"
            />
          )}
        </line>

        {/* Pickleball logo position indicator */}
        <circle
          cx="100"
          cy="40"
          r="8"
          fill={colors.primary}
          opacity="0.8"
          filter="url(#glow)"
        >
          {animated && (
            <animate
              attributeName="r"
              values="8;10;8"
              dur="2s"
              repeatCount="indefinite"
            />
          )}
        </circle>

        <circle
          cx="100"
          cy="360"
          r="8"
          fill={colors.primary}
          opacity="0.8"
          filter="url(#glow)"
        >
          {animated && (
            <animate
              attributeName="r"
              values="8;10;8"
              dur="2s"
              repeatCount="indefinite"
            />
          )}
        </circle>
      </svg>
    </div>
  )
}
