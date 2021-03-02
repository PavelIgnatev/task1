import store from '@/store'
import data from '../data/data.json'


const renderTemplateAll = (data) => store.commit("renderTemplateAll", data)
renderTemplateAll(data)

window.renderTemplateAll = renderTemplateAll

