export default {
  subString (value, start) {
    if (value && value.length > start) {
      return value.substr(0, start) + '..'
    }
    return value
  }
}
