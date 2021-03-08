const bobber = (title, value, active, height) =>{
    return `<div class="charts">
        <div class="charts__block ${active ? 'charts__block_active' : ''}" style="height: ${height}%">
            <div class="charts__value ${active ? 'charts__value_active' : ''}">${value}</div>
            <div class="charts__title">${title}</div>
        </div>
    </div>`
}

export default bobber