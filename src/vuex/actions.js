// 应用mutation
export const loginAction = ({
  commit
}) => {
  commit('changeLogin', true);
}

export const setUser = ({
  commit
}, data) => {
  commit('setUser', data)
}
export const setToken = ({
  commit
}, data) => {
  commit('setToken', data)
}
