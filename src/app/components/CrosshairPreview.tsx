'use client'

import { useEffect, useRef, useState } from 'react'
import { CrosshairSettings } from '@/types/crosshair'

interface CrosshairPreviewProps {
  settings: CrosshairSettings | string
  size?: number
  showBackground?: boolean
}

export default function CrosshairPreview({
  settings,
  size = 400,
  showBackground = true,
}: CrosshairPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Parse settings if it's a string
    let parsedSettings: CrosshairSettings
    try {
      parsedSettings =
        typeof settings === 'string' ? JSON.parse(settings) : settings
    } catch (e) {
      console.error('Failed to parse settings:', e)
      return
    }

    if (!parsedSettings || typeof parsedSettings !== 'object') return

    // Clear canvas
    ctx.clearRect(0, 0, size, size)

    // Background
    if (showBackground) {
      const gradient = ctx.createRadialGradient(
        size / 2,
        size / 2,
        0,
        size / 2,
        size / 2,
        size / 2,
      )
      gradient.addColorStop(0, '#1a1a2e')
      gradient.addColorStop(1, '#0f0f1e')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, size, size)
    }

    const center = size / 2
    const scale = 2 // Scale factor for visibility

    // Helper function to draw a line with outline
    const drawLine = (
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      thickness: number,
      color: string,
      opacity: number,
    ) => {
      ctx.save()
      ctx.globalAlpha = opacity

      // Draw outline if enabled
      if (parsedSettings.outlineEnabled) {
        ctx.strokeStyle = '#000000'
        ctx.lineWidth =
          thickness * scale + (parsedSettings.outlineThickness || 1) * 2
        ctx.lineCap = 'butt'
        ctx.globalAlpha = parsedSettings.outlineOpacity || 1
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }

      // Draw main line
      ctx.strokeStyle = color
      ctx.lineWidth = thickness * scale
      ctx.lineCap = 'butt'
      ctx.globalAlpha = opacity
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()

      ctx.restore()
    }

    // Draw inner lines
    if (parsedSettings.innerLinesEnabled) {
      const offset = (parsedSettings.innerLineOffset || 0) * scale
      const length = (parsedSettings.innerLineLength || 0) * scale

      // Top
      drawLine(
        center,
        center - offset,
        center,
        center - offset - length,
        parsedSettings.innerLineThickness || 1,
        parsedSettings.primaryColor || '#FFFFFF',
        parsedSettings.innerLineOpacity || 1,
      )

      // Bottom
      drawLine(
        center,
        center + offset,
        center,
        center + offset + length,
        parsedSettings.innerLineThickness || 1,
        parsedSettings.primaryColor || '#FFFFFF',
        parsedSettings.innerLineOpacity || 1,
      )

      // Left
      drawLine(
        center - offset,
        center,
        center - offset - length,
        center,
        parsedSettings.innerLineThickness || 1,
        parsedSettings.primaryColor || '#FFFFFF',
        parsedSettings.innerLineOpacity || 1,
      )

      // Right
      drawLine(
        center + offset,
        center,
        center + offset + length,
        center,
        parsedSettings.innerLineThickness || 1,
        parsedSettings.primaryColor || '#FFFFFF',
        parsedSettings.innerLineOpacity || 1,
      )
    }

    // Draw outer lines
    if (parsedSettings.outerLinesEnabled) {
      const offset = (parsedSettings.outerLineOffset || 0) * scale
      const length = (parsedSettings.outerLineLength || 0) * scale

      // Top
      drawLine(
        center,
        center - offset,
        center,
        center - offset - length,
        parsedSettings.outerLineThickness || 1,
        parsedSettings.primaryColor || '#FFFFFF',
        parsedSettings.outerLineOpacity || 1,
      )

      // Bottom
      drawLine(
        center,
        center + offset,
        center,
        center + offset + length,
        parsedSettings.outerLineThickness || 1,
        parsedSettings.primaryColor || '#FFFFFF',
        parsedSettings.outerLineOpacity || 1,
      )

      // Left
      drawLine(
        center - offset,
        center,
        center - offset - length,
        center,
        parsedSettings.outerLineThickness || 1,
        parsedSettings.primaryColor || '#FFFFFF',
        parsedSettings.outerLineOpacity || 1,
      )

      // Right
      drawLine(
        center + offset,
        center,
        center + offset + length,
        center,
        parsedSettings.outerLineThickness || 1,
        parsedSettings.primaryColor || '#FFFFFF',
        parsedSettings.outerLineOpacity || 1,
      )
    }

    // Draw center dot
    if (parsedSettings.centerDotEnabled) {
      ctx.save()
      ctx.globalAlpha = parsedSettings.centerDotOpacity || 1

      // Outline
      if (parsedSettings.outlineEnabled) {
        ctx.fillStyle = '#000000'
        ctx.globalAlpha = parsedSettings.outlineOpacity || 1
        ctx.beginPath()
        ctx.arc(
          center,
          center,
          ((parsedSettings.centerDotThickness || 1) * scale) / 2 +
            (parsedSettings.outlineThickness || 1),
          0,
          Math.PI * 2,
        )
        ctx.fill()
      }

      // Center dot
      ctx.fillStyle = parsedSettings.primaryColor || '#FFFFFF'
      ctx.globalAlpha = parsedSettings.centerDotOpacity || 1
      ctx.beginPath()
      ctx.arc(
        center,
        center,
        ((parsedSettings.centerDotThickness || 1) * scale) / 2,
        0,
        Math.PI * 2,
      )
      ctx.fill()

      ctx.restore()
    }
  }, [settings, size, showBackground, isMounted])

  if (!isMounted) {
    return (
      <div
        style={{ width: size, height: size }}
        className="rounded-lg bg-transparent"
      />
    )
  }

  return (
    <canvas ref={canvasRef} width={size} height={size} className="rounded-lg" />
  )
}
