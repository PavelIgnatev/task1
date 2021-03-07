import User from './module/user.js'

const Vote = (alias, data) =>{
    const offset = data.offset ? data.offset : 0
    return `
    <div class="vote">
        <div class="vote__desktop">
        ${data.users.slice(offset, offset + 6).map((item, index) => User(alias, item, data.selectedUserId, 0, index, data.emoji)).join('')}
        <div class="vote-button__wrapper">
            <div class="vote-button__up_wrapper ${offset == 0 ? 'vote-button__up_wrapper_not' : ''}">
                <div class="vote-button__up"></div>
            </div>
            <div class="vote-button__down_wrapper ${Object.keys(data.users).length - 6 == offset ? 'vote-button__down_wrapper_not' : ''}">
                <div class="vote-button__down"></div>
            </div>
        </div>
        </div>
        <div class="vote__mobile" style="display: none;">
        ${data.users.slice(offset, offset + 8).map((item, index) => User(alias, item, data.selectedUserId, 0, index, data.emoji)).join('')}
        <div class="vote-button__wrapper">
            <div class="vote-button__up_wrapper ${offset == 0 ? 'vote-button__up_wrapper_not' : ''}">
                <div class="vote-button__up"></div>
            </div>
            <div class="vote-button__down_wrapper ${Object.keys(data.users).length - 8 == offset ? 'vote-button__down_wrapper_not' : ''}">
                <div class="vote-button__down"></div>
            </div>
        </div>
        </div>
    </div>
    `
}
export default Vote