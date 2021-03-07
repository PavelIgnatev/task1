import UserPlace from './module/userplace.js'
import User from './module/user.js'

function selected(users, id = -1) {
    const indexUser = Object.keys(users).find(
        (item) =>
        users[item].id ==
        id
    );
    return indexUser ? Number(indexUser) : -1
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
export default Leaders