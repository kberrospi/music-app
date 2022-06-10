

export const newTime = (duration: number) =>{

  let seconds = Math.floor((duration/1000)%60);
  let minutes =Math.floor((duration/(1000*60))%60);
  let hours =Math.floor((duration /(1000*60*60))%24);

  let hoursT = `${hours < 10 ? '0' : ''}${hours}`
  let minutsT = `${minutes < 10 ? '0' : '' }${minutes}`
  let secondsT = `${(seconds < 10 ? '0' : '')}${seconds}`

  return {
    totalTime: `${hoursT}:${minutsT}:${secondsT}`,
    partialTime: `${minutsT}:${secondsT}`
  }

}