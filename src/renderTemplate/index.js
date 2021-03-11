import Leaders from './Leaders.js'
import Vote from './Vote.js'
import Chart from './Chart.js'
import Activity from './Activity.js'
const Template = (alias, data) => {
    return `<div class="template ${alias}_template">
                <div class="template_title"> 
                    <div class="template-title ${alias}-title">${data.title}</div>
                    <div class="template-subtitle ${alias}-subtitle">${data.subtitle}</div>
                </div>
                ${alias == 'leaders' ? Leaders(alias, data) : ''}
                ${alias == 'vote' ? Vote(alias, data) : ''}
                ${alias == 'chart' ? Chart(alias, data) : ''}
                ${alias == 'activity' ? Activity(alias, data) : ''}
            </div>
        `
}


const renderTemplate = (alias, data) => {
    return Template(alias, data).replace(/\s{2,}/g, '')
}
window.renderTemplate = renderTemplate