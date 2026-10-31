import React from "react"

const expiringIn = document.querySelector('.de_countdown')

let time
let timeLeft
let cancelId

function ExpirationDate(itemsData) {
  time = Date.now()
  timeLeft = itemsData[0].expiryDate - time
  console.log(time)
  console.log(timeLeft)
  if (timeLeft <= 0) {
    return cancelAnimationFrame(cancelId) 
  }

  cancelId = requestAnimationFrame(updateTime)
}

function updateTime() {  
  let seconds = timeLeft / 1000
  let minutes = seconds / 60
  let hours = minutes / 60

  let secondsText = Math.floor(seconds % 60) + 's'
  let minutesText = Math.floor(minutes % 60) + 'm'
  let hoursText = Math.floor(hours) + 'h'

  if (hours <= 0) {
    hoursText = '0h'
  }
  if (minutes <= 0) {
    minutesText = '0m'
  }
  if (timeLeft <= 0) {
    expiringIn.innerHTML = '0h 0m 0s'
    expiringIn.style.display= 'none'
  }
  
  console.log(hoursText + minutesText + secondsText)
  expiringIn.innerHTML = hoursText + minutesText + secondsText

  cancelId = requestAnimationFrame(updateTime)
}

export default ExpirationDate
