import User from './module/user.js'

const Vote = (alias, data) =>{
    const place = '2'
    return `
    <div class="vote">
        <div class="vote__desktop">
        ${data.users.slice(data.offset ? data.offset : 0, data.offset ? data.offset + 6 : 6).map((item, index) => User(alias, item, data.selectedUserId, 0, index, data.emoji)).join('')}</div>
        <div class="vote__mobile" style="display: none;">
        ${data.users.slice(data.offset ? data.offset : 0, data.offset ? data.offset + 8 : 8).map((item, index) => User(alias, item, data.selectedUserId, 0, index, data.emoji)).join('')}</div>
    </div>
    `
}
export default Vote