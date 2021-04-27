window.addEventListener('DOMContentLoaded', () => {

    const navItem = document.querySelectorAll("#nav__item");


    navItem.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

});