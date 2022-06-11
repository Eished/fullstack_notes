module.exports = {
  randomNum(n, m) {
    let c = m - n + 1
    return Math.floor(Math.random() * c + n)
  },
}
