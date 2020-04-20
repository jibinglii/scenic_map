// 更改用户状态
export const changeLogin = (state, status) => {
  state.isLogin = status
}
export const setUser = (state, data) => {
  state.user = data
}
export const setToken = (state, data) => {
  state.token = data
}
export const setfId = (state, data) => {
  state.fId = data
}
