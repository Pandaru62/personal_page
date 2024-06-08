
// retrives the links from the navbar
const menuTitle = document.querySelector("#dynamicMenu");

function updateLanguage(language) {


    // update menu language
    menuTitle.innerHTML = '';

    for (let i = 0 ; i < menu.length ; i ++) {

        const htmlTitle = 
        `<li class="nav-item">
        <a href="${menu[i][0]}" class="nav-link">${menu[i][language]}</a>
        </li>`

        // adds as many buttons as exist in the data.js menu array
        menuTitle.innerHTML += htmlTitle

    }

    // update title language
    for (let i = 0; i < titles.length; i++) {
        const hTitle = document.getElementById(titles[i][0]);
        hTitle.innerHTML = titles[i][language];
    }


    for (let i = 0; i < buttons.length; i++) {
        // Select all span elements with the specific class within anchor tags
        const spanButtons = document.querySelectorAll(`a span.${buttons[i][0]}`);
        
        // Iterate over each span element and update its inner text
        spanButtons.forEach(span => {
            span.innerText = buttons[i][language];
        });
    }

}



const englishButton = document.getElementById("englishBtn");

englishButton.addEventListener("click", () => {
    updateLanguage(1);
})


let frenchButton = document.getElementById("frenchBtn");

frenchButton.addEventListener("click", () => {
    updateLanguage(2);
})

updateLanguage(1);



