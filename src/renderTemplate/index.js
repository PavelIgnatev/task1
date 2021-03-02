import store from '@/store'
import data from '../data/data.json'


const renderTemplateAll = (data) => store.commit("renderTemplateAll", data)
renderTemplateAll(data)
const renderTemplate = (alias, data) => {
    store.commit("renderTemplate", [alias, data]);
    return document.documentElement.innerHTML.split('</head>')[1].replace('<script type="text/javascript" src="/js/chunk-vendors.js"></script><script type="text/javascript" src="/js/app.js"></script>', '')
}
window.renderTemplate = renderTemplate
window.renderTemplateAll = renderTemplateAll

