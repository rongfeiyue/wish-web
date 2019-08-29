import lodash from 'lodash'
const User = {
  state: {
    userInfo: {
      id: '',
      username: '',
      nickname: '',
      phone: ''
    }
  },
  mutations: {
    SET_USER_INFO: (state, data) => {
      state.userInfo = lodash.cloneDeep(data)
    }
  },
  actions: {
    setUserInfo ({commit}, data) {
      commit('SET_USER_INFO', data)
    }
  }
}

export default User
