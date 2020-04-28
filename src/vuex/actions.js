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
export const setfId = ({
  commit
}, data) => {
  commit('setfId', data)
}
export const setAudiotype = ({
  commit
}, data) => {
  commit('setAudiotype', data)
}
export const setshiyonglv = ({
  commit
}, data) => {
  commit('setshiyonglv', data)
}
export const setItem_Id = ({
  commit
}, data) => {
  commit('setItem_Id', data)
}
