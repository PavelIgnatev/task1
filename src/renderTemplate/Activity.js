import day from './module/day.js'

const Activity = (alias, data) =>{
    return `<div class="Activity">
        <div class="day__wrapper">
            <div class="day__wrapper__center desktop">${
                Object.values(data.data).map((item, index) => day(item, index, false)).join(' ') 
            }</div>
            <div class="day__wrapper__center mobile" style="display: none;">${
                Object.values(data.data).map((item, index) => day(item,index, true)).join(' ') 
            }</div>
        </div>
    </div>`
}
export default Activity