import extradark from '../../assets/img/activity/extra-dark.png'
import extralight from '../../assets/img/activity/extra-light.png'
import maxdark from '../../assets/img/activity/max-dark.png'
import maxlight from '../../assets/img/activity/max-light.png'
import middark from '../../assets/img/activity/mid-dark.png'
import midlight from '../../assets/img/activity/mid-light.png'
import mindark from '../../assets/img/activity/min-dark.png'
import minlight from '../../assets/img/activity/min-light.png'


const day = (value, index, mobile=false) => {
    const changeValue = value
    .map((hours, index) =>
      index % 2 == 0 ? hours + value[index + 1] : undefined
    )
    .filter((x) => x !== undefined);
    if(mobile){return `<div class="day">${value.map((item, index) => `<div class="day__hour_wrapper" style="top: ${index * 15.72}px"><div class="day__hour"><img style="z-index: ${index}" class="day__img_dark" src="${item == 1 || item == 2? middark : item == 3 || item == 4 ? maxdark : item > 4 ? extradark : mindark}"><img class="day__img_light" style="z-index: ${index};display: none;" src="${item == 1 || item == 2? midlight : item == 3 || item == 4 ? maxlight : item > 4 ? extralight : minlight}"></div></div>`).join(' ')}</div>`}
    return `<div class="day">${changeValue.map((item, index) => `<div class="day__hour_wrapper" ><div class="day__hour"><img class="day__img_dark" src="${item == 1 || item == 2? middark : item == 3 || item == 4 ? maxdark : item > 4 ? extradark : mindark}"><img class="day__img_light" style="z-index: ${index};display: none;" src="${item == 1 || item == 2? midlight : item == 3 || item == 4 ? maxlight : item > 4 ? extralight : minlight}"></div></div>`).join(' ')}</div>`
}
export default day