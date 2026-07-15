// Valorant Crosshair Types

export interface CrosshairSettings {
  // Primary Crosshair
  primaryColor: string
  outlineEnabled: boolean
  outlineOpacity: number
  outlineThickness: number
  centerDotEnabled: boolean
  centerDotOpacity: number
  centerDotThickness: number

  // Inner Lines
  innerLinesEnabled: boolean
  innerLineOpacity: number
  innerLineLength: number
  innerLineThickness: number
  innerLineOffset: number
  innerLineMovementError: boolean
  innerLineFiringError: boolean

  // Outer Lines
  outerLinesEnabled: boolean
  outerLineOpacity: number
  outerLineLength: number
  outerLineThickness: number
  outerLineOffset: number
  outerLineMovementError: boolean
  outerLineFiringError: boolean
}

export interface CrosshairPreset {
  id: string
  name: string
  description: string
  author: string
  category: 'pro' | 'community' | 'default'
  likes: number
  code: string
  imageUrl?: string
  settings: CrosshairSettings
  createdAt: string
  tags?: string[]
}

export const defaultCrosshairSettings: CrosshairSettings = {
  primaryColor: '#00FF00',
  outlineEnabled: true,
  outlineOpacity: 1,
  outlineThickness: 1,
  centerDotEnabled: false,
  centerDotOpacity: 1,
  centerDotThickness: 2,
  innerLinesEnabled: true,
  innerLineOpacity: 1,
  innerLineLength: 6,
  innerLineThickness: 2,
  innerLineOffset: 3,
  innerLineMovementError: false,
  innerLineFiringError: false,
  outerLinesEnabled: false,
  outerLineOpacity: 1,
  outerLineLength: 2,
  outerLineThickness: 2,
  outerLineOffset: 10,
  outerLineMovementError: false,
  outerLineFiringError: false,
}
