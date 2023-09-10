import { Notify } from 'notiflix'
import { defineStore } from 'pinia'
import { io } from 'socket.io-client'

export const useSocket = defineStore('socket', () => {
  const socket = io('http://localhost:5000', { autoConnect: false })

  const joinRaceTrack = (raceCode: string, username: string): boolean => {
    if (!socket.connected) {
      socket.connect()
      Notify.failure('Unable to join race track')
      if (!socket.connected) return false
    }

    socket.auth = { username }
    socket.emit('join-race-track', raceCode)
    return true
  }

  const leaveRaceTrack = (raceCode: string) => {
    if (socket.disconnected) socket.connect()
    socket.emit('leave-race-track', raceCode)
  }

  return { joinRaceTrack, leaveRaceTrack }
})
