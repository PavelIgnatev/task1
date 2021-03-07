const User = (alias, user, selectedUserId = -1, place = -2, index, emoji) => {
    return `
    <div class="user-template ${alias}-user ${(selectedUserId == user['id'] && place != 0 && place != 1 && place != 2) || (selectedUserId == user['id'] && alias=='vote') ? 'user-selected' : ''}">
        <div class="user-img ${alias}-img">
        <img src="/img/${user["avatar"].split('.')[0]}.svg">
        ${(selectedUserId == user['id'] && place != 0) || (selectedUserId == user['id'] && alias=='vote') ? '<img src="/img/respect.svg" class="user-respect" >' : index == 0 ? `<div class="user-emoji" style="${alias=='vote'?'display: none;':''}">${emoji}</div>` : ''}
        </div>
        <div class="user-name ${alias}-name">${user.name.split(' ')[0]}<br>${user.name.split(' ')[1]}</div>
        <div class="user-value ${alias}-value" style="${alias=='vote'?'display: none;':''}">${user.valueText}</div>
        <div class="user-line" style="display: none;"></div>
        <div class="user-place" style="display: none;">${place+1}</div>
    </div>`
}
export default User