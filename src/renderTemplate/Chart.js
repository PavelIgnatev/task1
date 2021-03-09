import bobber from './module/bobber.js'
import user from './module/user'
 
const Chart = (alias, data) => {
    let max = -Infinity
    let min = Infinity

    Object.keys(data.values).map((item) =>
    data.values[item].value > max ?
    (max = data.values[item].value) :
    "")

    Object.keys(data.values).map((item) =>
    data.values[item].value < min ?
    (min = data.values[item].value) :
    "")

    const height = (value) => ((value - min) * 100) / (max - min)

    return `<div class="chart">
        <div class="chart-container">
            <div class="chart-pillars">
            ${data.values.slice(4,13).map(item => bobber(item.title, item.value != 0 ? item.value : "", item.active ? item.active : false, height(item.value))).join(' ')}
            </div>
        </div>
        <div class="chart-user__wrapper">
            ${data.users.slice(0, 2).map((item, index) => user(alias, item, -1, -2, index, data.emoji)).join(' ')}
        </div>
    </div>`
}

export default Chart