export const getTimeDuration = (time) => {
  const a = time
  const hours = Math.round(a / 3600000)
  const min = Math.round(a / 60000)
  const sec_left = Math.round(a % 60000)
  const sec = Math.floor(sec_left / 1000)
  console.log(hours + ':' + min + ':' + sec)
  return `${
    hours > 0 ? (hours < 10 ? `0${hours}:` : `${hours}:`) : ''
  }  ${min}:${sec >= 10 ? sec : `0${sec}`}`
}
