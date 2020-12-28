import { Howl } from 'howler';

// PROVIDER

// Audio

export interface BleepsAudioGroupSettings {
  volume?: number
  mute?: boolean
  rate?: number
  preload?: boolean
}

export type BleepCategoryName = string;

export interface BleepsAudioSettings {
  common?: BleepsAudioGroupSettings
  categories?: Record<BleepCategoryName, BleepsAudioGroupSettings>
}

// Players

export type BleepPlayerName = string;

export interface BleepPlayerSettings {
  src: string[]
  format?: string[]
  loop?: boolean
  rate?: number
}

export type BleepsPlayersSettings = Record<BleepPlayerName, BleepPlayerSettings>;

export type BleepPlayer = Howl;

export type BleepsPlayers = Record<BleepPlayerName, BleepPlayer>;

// Provided

export interface BleepsSetup {
  audioSettings: BleepsAudioSettings
  playersSettings: BleepsPlayersSettings
  players: BleepsPlayers
}

// CONSUMER

// Configuration

export type BleepName = string;

export interface BleepSettings {
  player: BleepPlayerName
  category?: BleepCategoryName
  shared?: boolean
}

export type BleepsSettings = Record<BleepName, BleepSettings>;

// Injection

export interface Bleep {
  play: () => void
  pause: () => void
  seek: (time: number) => void
  stop: () => void
  getIsPlaying: () => boolean
  getDuration: () => number
}

export type Bleeps = Record<BleepName, Bleep>;
