
// retrives the links from the navbar
const menuTitle = document.querySelector("#dynamicMenu");

// update menu language
function updateMenu(language) {

    menuTitle.innerHTML = '';

    for (let i = 0 ; i < menu.length ; i ++) {

        const htmlTitle = 
        `<li class="nav-item">
        <a href="${menu[i][0]}" class="nav-link">${menu[i][language]}</a>
        </li>`

        // adds as many buttons as exist in the data.js menu array
        menuTitle.innerHTML += htmlTitle

    }
}

function updateTitles(language) {
    for (let i = 0; i < titles.length; i++) {
        const hTitle = document.getElementById(titles[i][0]);
        hTitle.innerText = titles[i][language];
    }
}

function updateSpanButtons(language) {
    for (let i = 0; i < buttons.length; i++) {
    const spanButtons = document.getElementById(buttons[i][0]);
    spanButtons.innerText = buttons[i][language];
    }
}

updateMenu(1); // by default language = 1 sets language to English


const englishButton = document.getElementById("englishBtn");

englishButton.addEventListener("click", () => {
    updateMenu(1);
    updateTitles(1);
    updateSpanButtons(1);
})


let frenchButton = document.getElementById("frenchBtn");

frenchButton.addEventListener("click", () => {
    updateMenu(2);
    updateTitles(2);
    updateSpanButtons(2);
})



