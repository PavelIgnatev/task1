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
        <div class="Activity__description">
      <div class="Activity-item">
        <div class="item__example"></div>
        <div class="item__text item__text_desktop">2 часа</div>
        <div class="item__text item__text_mobile">1 час</div>
      </div>
      <div class="Activity-item">
        <div class="item__example"></div>
        <div class="item__text">0</div>
      </div>
      <div class="Activity-item">
        <div class="item__example"></div>
        <div class="item__text">1-2</div>
      </div>
      <div class="Activity-item">
        <div class="item__example"></div>
        <div class="item__text">3-4</div>
      </div>
      <div class="Activity-item">
        <div class="item__example"></div>
        <div class="item__text">5-6</div>
      </div>
    </div>
    </div>`
}
export default Activity