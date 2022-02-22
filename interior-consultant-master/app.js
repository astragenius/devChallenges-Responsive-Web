const nav = document.querySelector("[data-visible]");
const button = document.querySelector('[aria-controls="navigation"]');

console.log(nav);

button.addEventListener('click',() => {

    const visibility = nav.getAttribute("data-visible");

    if(visibility === 'false') {

        nav.setAttribute('data-visible', true);
    } else {
        nav.setAttribute('data-visible', false);
    }

     
})


