import { defineStore } from 'pinia'
import { io } from 'socket.io-client'

export const useSocket = defineStore('socket', () => {
  const socket = io('http://localhost:5000', { autoConnect: false })

  const joinRaceTrack = (raceCode: string) => {
    if (socket.disconnected) socket.connect()
    socket.emit('join-race-track', raceCode)
  }

  const leaveRaceTrack = (raceCode: string) => {
    if (socket.disconnected) socket.connect()
    socket.emit('leave-race-track', raceCode)
  }

  return { joinRaceTrack, leaveRaceTrack }
})
