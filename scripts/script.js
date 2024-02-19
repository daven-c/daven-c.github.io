// clear entries on form
function clearForm(id) {
    const form = document.getElementById(id);
    form.childNodes.forEach((input) => (input.value = ""));
}

window.addEventListener('load', function () {
    equalizeSkillCardHeights();
    centerProjectCards();
});

window.addEventListener('resize', function () {
    equalizeSkillCardHeights();
    centerProjectCards();
});

function equalizeSkillCardHeights() {
    var divs = document.querySelectorAll('.skills-card');
    var maxHeight = 0;

    divs.forEach(function (div) {
        div.style.height = 'auto';
        maxHeight = Math.max(maxHeight, div.offsetHeight);
    });

    divs.forEach(function (div) {
        div.style.height = maxHeight + 'px';
    });
}

function centerProjectCards() {
    var wrapper = document.getElementsByClassName('projects-card-wrapper')[0];
    var flex_items = document.getElementsByClassName('project-card');
    let row_length = getElementsInRow(flex_items);
    let gap = parseFloat(window.getComputedStyle(wrapper).getPropertyValue('gap'));
    let flex_width = row_length * flex_items[0].offsetWidth + (row_length - 1) * gap;
    wrapper.style.paddingLeft = (wrapper.offsetWidth - flex_width) / 2 + 'px';
}

function getElementsInRow(items) {
    flex_items = Array.from(items);
    if (flex_items.length == 0) {
        return 0;
    }

    var elements_in_row = 1;
    y_cord = flex_items.shift().getBoundingClientRect().top;

    flex_items.forEach(function (item) {
        if (item.getBoundingClientRect().top != y_cord) {
            return elements_in_row;
        }
        elements_in_row++;
    })

    return elements_in_row;
}