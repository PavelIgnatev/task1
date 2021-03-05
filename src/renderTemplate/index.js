import store from '@/store'
import data2 from '../data/data.json'
const renderTemplateAll = (data) => store.commit("renderTemplateAll", data)
renderTemplateAll(data2)
window.renderTemplateAll = renderTemplateAll

function selected(users, id = -1) {
    const indexUser = Object.keys(users).find(
        (item) =>
        users[item].id ==
        id
    );
    return indexUser ? Number(indexUser) : -1
}

const Template = (alias, data) => {
    return `<div class="template ${alias}_template">
                <div class="template_title"> 
                    <div class="template-title ${alias}-title">${data.title}</div>
                    <div class="template-subtitle ${alias}-subtitle">${data.subtitle}</div>
                </div>
                ${alias == 'leaders' ? Leaders(alias, data) : ''}
            </div>
        `
}

const User = (alias, user, selectedUserId = -1, place = -2, index, emoji) => {
    return `
    <div class="user-template ${alias}-user ${selectedUserId == user['id'] && place != 0 && place != 1 && place != 2 ? 'user-selected' : ''}">
        <div class="user-img ${alias}-img">
        <img src="/img/${user["avatar"].split('.')[0]}.svg">
        ${selectedUserId == user['id'] && place != 0 ? '<img src="/img/respect.svg" class="user-respect">' : index == 0 ? `<div class="user-emoji">${emoji}</div>` : ''}
        </div>
        <div class="user-name ${alias}-name">${user.name.split(' ')[0]}<br>${user.name.split(' ')[1]}</div>
        <div class="user-value ${alias}-value">${user.valueText}</div>
        <div class="user-line" style="display: none;"></div>
        <div class="user-place" style="display: none;">${place+1}</div>
    </div>`
}

const UserPlace = (alias, value) => {
    const place = {
        0: "5",
        1: "3",
        2: "1",
        3: "2",
        4: "4"
    }
    return `
    <div class="userplace-template ${alias}-userplace">
        <div class="userplace-place">${value < 5 ? place[value] : Number(value)+1}</div>
    </div>
`
}

const Leaders = (alias, data) => {
    const place = selected(data["users"], data.selectedUserId ? data.selectedUserId : -1)
    return `<div class="template-wrapper">
        <div class="leaders-wrapper__users">
         ${place < 5 ? data.users.slice(0, 5).map((item, index) => User(alias, item, data.selectedUserId, place, index, data.emoji)).join('') : data.users.slice(0, 4).map((item, index) => User(alias, item, data.selectedUserId, place, index, data.emoji)).join('') + [data.users[place]].map((item, index)=> User(alias, item, data.selectedUserId, place, index, data.emoji)).join('')}
        </div>
        <div class="${alias}-wrapper__place">
        ${place < 5 ? data.users.slice(0, 5).map((item, index) => UserPlace(alias, index)).join('') : [data.users[place]].map(item => UserPlace(alias, place)).join('') +  data.users.slice(0, 4).map((item, index) => UserPlace(alias, index)).join('') }
        </div>
    </div>`
}

const renderTemplate = (alias, data) => {
    return Template(alias, data).replace(/\s{2,}/g, '')
}
window.renderTemplate = renderTemplate