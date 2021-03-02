import store from '@/store'
import data from '../data/data.json'
const renderTemplateAll = (data) => store.commit("renderTemplateAll", data)
renderTemplateAll(data)
const renderTemplate = (alias, data) => {store.commit("renderTemplate", [alias, data]);
return `<div>${alias}</div><div>${data}</div>`}
window.renderTemplate = renderTemplate
window.renderTemplateAll = renderTemplateAll

