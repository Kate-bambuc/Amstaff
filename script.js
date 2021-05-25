window.addEventListener('DOMContentLoaded', () => {

    const navItems = document.querySelectorAll("#nav__item"),
        accordeonItems = document.querySelectorAll('#accordeon__item'),
        header = document.querySelector('#header'),
        intro = document.querySelector('#intro'),
        introH = intro.scrollHeight,
        sliderLine = document.querySelector('#intro__block'),
        sliderNext = document.querySelector('#intro__btn-right'),
        sliderPrev = document.querySelector('#intro__btn-left'),
        btns = document.querySelectorAll('#btn');

        let scrollPos = document.documentElement.scrollTop,
            offset = 0;	
    
    function clearActive(selector) {
        selector.forEach(i => {
            i.classList.remove('active');
        });
    }

   
     // Scroll

    
     navItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();

            let id = item.getAttribute('data-scroll');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            clearActive(navItems);
            
        });
    });

    // ScrollBtn
    btns.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();

            let id = item.getAttribute('data-scroll');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            
            
        });
    });
    

    // Fixed menu

    function checkScroll(scrollPos) {
        if (scrollPos > introH) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    }

    checkScroll(scrollPos);

	document.addEventListener('scroll', () => {
		scrollPos = window.scrollY;
		checkScroll(scrollPos);
	});

    // Accordeon

    accordeonItems.forEach(item => {
        item.addEventListener('click', () => {
            //item.classList.toggle('active');
            if(item.classList.contains('active')) {
                item.classList.remove('active');
            } else {
  
            clearActive(accordeonItems);

            item.classList.add('active');
            }
        });
    });


//    Slider

    sliderNext.addEventListener('click', () => {
        offset += 480;
        if (offset >= 1440) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    });

    sliderPrev.addEventListener('click', () => {
        offset = offset - 480;
        if (offset < 0) {
            offset = 960;
        }
        sliderLine.style.left = -offset + 'px';
    });


});