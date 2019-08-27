const User = {
  state: {
    userInfo: {
      id: '',
      username: '',
      nickname: '',
      avatar: ''
    }
  },
  mutations: {
    SET_USER_INFO: (state, data) => {
      state.userInfo = data
    }
  },
  actions: {
    setUserInfo ({commit}, data) {
      commit('SET_USER_INFO', data)
    }
  }
}

export default User
