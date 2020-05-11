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
  commit('changeShiyonglv', data)
}
export const setItem_Id = ({
  commit
}, data) => {
  commit('setItem_Id', data)
}
export const setF_Id = ({
  commit
}, data) => {
  commit('changeF_Id', data)
}
export const setimageslists = ({
  commit
}, data) => {
  commit('changeImageslists', data)
}
export const setmarkercsList = ({
  commit
}, data) => {
  commit('changemarkercsList', data)
}
export const setmarkerzxList = ({
  commit
}, data) => {
  commit('changemarkerzxList', data)
}
export const setmarkerwifiList = ({
  commit
}, data) => {
  commit('changemarkerwifiList', data)
}
export const setmarkerfdList = ({
  commit
}, data) => {
  commit('changemarkerfdList', data)
}
export const setmap = ({
  commit
}, data) => {
  commit('changemap', data)
}
