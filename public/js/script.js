
document.addEventListener('DOMContentLoaded', () => {
    // Tooltip initialization
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    // Example autofocus logic
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.focus();
    }
});


function updateLanguage(language) {

    // retrives the links from the navbar
    if(document.querySelector("#dynamicMenu")) {
        const menuTitle = document.querySelector("#dynamicMenu");

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
    }

    // update title language
    for (let i = 0; i < titles.length; i++) {
        if(document.getElementById(titles[i][0])) {
            const hTitle = document.getElementById(titles[i][0]);
            hTitle.innerHTML = titles[i][language];
        }
    }


    for (let i = 0; i < buttons.length; i++) {
        // Select all span elements with the specific class within anchor tags
        const spanButtons = document.querySelectorAll(`a span.${buttons[i][0]}`);
        
        // Iterate over each span element and update its inner text
        spanButtons.forEach(span => {
            span.innerText = buttons[i][language];
        });
    }

    //update bio language on bio.html 
    if(document.getElementById('bio-text')) {
        const bioText = document.getElementById('bio-text');
        bioText.innerHTML = bio[language];
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



