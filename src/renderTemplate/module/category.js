const DiagramCategory = (item, index) => {
    return `<div class="Diagram-category">
        <div class="Diagram__wrapper_cat">
            <div class="Diagram-category__circle Diagram-category__circle_${index}"></div>
            <div class="Diagram-category__title">${item.title}</div>
        </div>
        <div class="Diagram__wrapper_cat">
            <div class="Diagram-category__text">${item.differenceText.split(" ")[0]}</div>
            <div class="Diagram-category__value">${item.valueText.split(" ")[0]}</div>
        </div>
    </div>`
}
export default DiagramCategory