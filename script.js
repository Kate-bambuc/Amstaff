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


//    Slider Intro

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


    // Slider males and females

    

    

    const malesLeft = document.querySelector('#males__arrow-left'),
        malesItem = document.querySelectorAll('#males__carousel-item'),
        malesRight = document.querySelector('#males__arrow-right'),
        femalesLeft = document.querySelector('#females__arrow-left'),
        femalesItem = document.querySelectorAll('#females__carousel-item'),
        femalesRight = document.querySelector('#females__arrow-right'),
        dogsPhotos = 4;

    let malesI = 0,
        femalesI = 0;

        
    // males
    
    malesRight.addEventListener( 'click', () => {
        
        if( malesItem[dogsPhotos + malesI]) { // Проверяет существует ли следующее фото 
            malesItem[malesI].classList.add('block');
            malesItem[dogsPhotos].classList.remove('block');
            malesI++;
        }
    });
    malesLeft.addEventListener( 'click', () => {
        
        if( malesItem[malesI-1]) { // Проверяет существует ли следующее фото
            malesItem[malesI-1].classList.remove('block');
            malesItem[dogsPhotos].classList.add('block');
            malesI--;
        }
        });

    // females

    femalesRight.addEventListener( 'click', () => {
        
        if( femalesItem[dogsPhotos + femalesI]) { // Проверяет существует ли следующее фото 
            femalesItem[femalesI].classList.add('block');
            femalesItem[dogsPhotos].classList.remove('block');
            femalesI++;
        }
    });
    femalesLeft.addEventListener( 'click', () => {
        
        if( femalesItem[femalesI-1]) { // Проверяет существует ли следующее фото
            femalesItem[femalesI-1].classList.remove('block');
            femalesItem[dogsPhotos].classList.add('block');
            femalesI--;
        }
        });


        // Articles Show

    const articlesItem = document.querySelectorAll('#articles__item'),
        articlesBlock = document.querySelector('#articles__block'),
        articlesBlockTitle = document.querySelector('#articles__block-title');

        articlesItem.forEach((item) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                articlesBlock.classList.toggle('show');
            });
        });


        articlesBlockTitle.addEventListener('click', () => {
            event.preventDefault();
                articlesBlock.classList.toggle('show');
        });
        

});

    
        
    