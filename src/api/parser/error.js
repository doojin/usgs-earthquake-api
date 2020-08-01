module.exports = {
  parse (errorMessage) {
    const lines = errorMessage.split('\n')
    return lines[2]
  }
}
