window.addEventListener('DOMContentLoaded', () => {

    const navItem = document.querySelectorAll("#nav__item"),
        accordeonItems = document.querySelectorAll('#accordeon__item'),
        accordeonTexts = document.querySelectorAll('#accordeon__text');


    navItem.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    accordeonItems.forEach(item => {
        item.addEventListener('click', () => {
            //item.classList.toggle('active');
            if(item.classList.contains('active')) {
                item.classList.remove('active');
            } else {
                
                accordeonItems.forEach(i => {
                    i.classList.remove('active');
                });

                item.classList.add('active');
            }
        });
    });


});