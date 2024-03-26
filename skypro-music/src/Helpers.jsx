export const ConvertTime = (s) => {
    let m = Math.trunc(s / 60) + ''
    s = (s % 60) + ''
    let sec = Math.floor(s.padStart(2, 0))
    if (sec < 10) {
      sec = `0` + Math.floor(s.padStart(2, 0))
    }
    return m.padStart(2, 0) + ':' + `${sec}`
}

export const FunctionMissing = () => {
    alert('Еще не реализовано')
}