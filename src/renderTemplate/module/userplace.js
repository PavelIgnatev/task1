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
    </div>`
}

export default UserPlace