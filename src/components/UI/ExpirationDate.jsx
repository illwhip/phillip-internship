const expiringIn = document.querySelector('.de_countdown')

let time
let timeLeft
let cancelId

function ExpirationDate(itemsData) {
  time = Date.now()
  timeLeft = itemsData.expiryDate - time

  if (timeLeft <= 0) {
    expiringIn.style.display= 'none'
    return cancelAnimationFrame(cancelId) 
  }

  cancelId = requestAnimationFrame(updateTime)
}

function updateTime() {  
  let seconds = Math.floor(timeLeft / 1000)
  let minutes = Math.floor(seconds/60)
  let hours = Math.floor(minutes / 60)

  let secondsText = seconds + 's'
  let minutesText = minutes + 'm'
  let hoursText = hours + 'h'

  if (hours <= 0) {
    hoursText = '0h'
  }
  if (minutes <= 0) {
    minutesText = '0m'
  }

  expiringIn.innerHTML = hoursText  + minutesText + secondsText

  cancelId = requestAnimationFrame(updateTime)
}


export default ExpirationDate
