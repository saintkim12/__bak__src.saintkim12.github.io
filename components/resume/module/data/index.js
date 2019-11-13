import yaml from 'js-yaml'
import get from 'lodash/get'
import defaultData from './default.json'
// import axios from '@/plugins/axios'
const _default = defaultData
const _state = {
  global: {
    name: 'saintkim12',
    title: 'saintkim12'
  },
  lang: '',
  default: _default
}
const getters = {
  name: state => get(state, 'global.name'),
  title: state => get(state, 'global.title'),
  about: state => get(state, `${state.lang}.about`, get(state, 'default.about')),
  experience: state => get(state, `${state.lang}.experience`, get(state, 'default.experience')),
  education: state => get(state, `${state.lang}.education`, get(state, 'default.education')),
  skills: state => get(state, `${state.lang}.skills`, get(state, 'default.skills')),
  interests: state => get(state, `${state.lang}.interests`, get(state, 'default.interests')),
  awards: state => get(state, `${state.lang}.awards`, get(state, 'default.awards'))
}
const mutations = {
  setData: (state, { key, value }) => { state[key] = value },
  setLang: (state, lang) => { state.lang = lang }
}
const actions = {
  init: async ({ commit }, { lang } = { lang: ['ko'] }) => {
    const promises = lang.map((l) => {
      return new Promise((resolve) => {
        // axios.get(`https://saintkim12.github.io/data/resume-${l}.yaml`).then(({ data }) => {
        import('./default.json').then(({ data }) => {
          return new Promise((resolve) => {
            yaml.safeLoadAll(data, (json) => {
              resolve(json)
            })
          })
        }).then((data) => {
          resolve({ [l]: data })
        })
      })
    })
    const datas = await Promise.all(promises)
    const langObj = datas.reduce((obj, item) => Object.assign(obj, item), {})
    // console.log('langObj', langObj)
    Object.entries(langObj).map(([key, value]) => {
      commit('setData', { key, value })
    })
    commit('setLang', lang[0])
  }
}
export default {
  state: () => _state,
  getters,
  mutations,
  actions
}
