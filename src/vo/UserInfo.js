export class UserInfo {
  constructor () {
    this.id = 1
    this.username = ''
    this.nickname = ''
    this.phone = ''
  }
  set (data) {
    if (data) {
      if (data.hasOwnProperty('id')) {
        this.id = data.id
      }
      if (data.hasOwnProperty('username')) {
        this.username = data.username
      }
      if (data.hasOwnProperty('nickname')) {
        this.nickname = data.nickname
      }
      if (data.hasOwnProperty('phone')) {
        this.phone = data.phone
      }
    }
    return this
  }
}
