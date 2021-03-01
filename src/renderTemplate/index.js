import store from '@/store'
import data from '../data/data.json'
const renderTemplate = (data) => store.commit("renderTemplate", data)
renderTemplate(data)
window.renderTemplate = renderTemplate

