window.addEventListener('DOMContentLoaded', () => {

    const navItems = document.querySelectorAll("#nav__item"),
        accordeonItems = document.querySelectorAll('#accordeon__item'),
        header = document.querySelector('#header'),
        intro = document.querySelector('#intro'),
        introH = intro.scrollHeight,
        sliderLine = document.querySelector('#intro__block'),
        sliderNext = document.querySelector('#intro__btn-right'),
        sliderPrev = document.querySelector('#intro__btn-left'),
        btns = document.querySelectorAll('#btn'),
        navToggle = document.querySelector('#navToggle'),
        nav = document.querySelector('#nav'),
        articlesHistory = document.querySelectorAll('#articles__item-history'),
        articlesLove = document.querySelectorAll('#articles__item-love'),
        articlesBlockHistory = document.querySelector('#articles__history'),
        articlesBlockLove = document.querySelector('#articles__love'),
        articlesBlockTitleHistory = document.querySelector('#articles__block-title-history'),
        articlesBlockTitleLove = document.querySelector('#articles__block-title-love');
        

        let scrollPos = document.documentElement.scrollTop,
            offset = 0;	
    
    function clearActive(selector) {
        selector.forEach(i => {
            i.classList.remove('active');
        });
    }

    // Burger Menu
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('show');
        nav.classList.toggle('show');
    });
   
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

    function scrollFunc(i) {
        i.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
    
                let id = item.getAttribute('data-scroll');
    
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
    
                
                
            });
        });
    }

    // ScrollBtn
    scrollFunc(btns);


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

const mediaQuery480 = window.matchMedia('(max-width: 480px)');

    function changeLength(e) {
        if (e.matches) {
            totalLength = 900;
            itemLength = 300;
        }
    }

    let totalLength = 1440,
        itemLength = 480;

    mediaQuery480.addListener(changeLength);
    changeLength(mediaQuery480);

    sliderNext.addEventListener('click', () => {
        offset += itemLength;
        if (offset >= totalLength) {
            offset = 0;
        }
        sliderLine.style.left = -offset + 'px';
    });

    sliderPrev.addEventListener('click', () => {
        offset = offset - itemLength;
        if (offset < 0) {
            offset = totalLength - itemLength;
        }
        sliderLine.style.left = -offset + 'px';
    });


    


    // Slider males and females

    

    

    const malesLeft = document.querySelector('#males__arrow-left'),
        malesItem = document.querySelectorAll('#males__carousel-item'),
        malesRight = document.querySelector('#males__arrow-right'),
        femalesLeft = document.querySelector('#females__arrow-left'),
        femalesItem = document.querySelectorAll('#females__carousel-item'),
        femalesRight = document.querySelector('#females__arrow-right');
        

    let malesI = 0,
        femalesI = 0,
        dogsPhotos = 4;

        
    // males
    
    malesRight.addEventListener( 'click', () => {
        
        if( malesItem[dogsPhotos + malesI]) { // Проверяет существует ли следующее фото 
            malesItem[malesI].classList.add('block');
            malesItem[dogsPhotos + malesI].classList.remove('block');
            malesI++;
        }
    });
    malesLeft.addEventListener( 'click', () => {
        
        if( malesItem[malesI-1]) { // Проверяет существует ли следующее фото
            malesItem[malesI-1].classList.remove('block');
            malesItem[dogsPhotos + malesI-1].classList.add('block');
            malesI--;
        }
        });

    // females

    femalesRight.addEventListener( 'click', () => {
        
        if( femalesItem[dogsPhotos + femalesI]) { // Проверяет существует ли следующее фото 
            femalesItem[femalesI].classList.add('block');
            femalesItem[dogsPhotos + femalesI].classList.remove('block');
            femalesI++;
        }
    });
    femalesLeft.addEventListener( 'click', () => {
        
        if( femalesItem[femalesI-1]) { // Проверяет существует ли следующее фото
            femalesItem[femalesI-1].classList.remove('block');
            femalesItem[dogsPhotos + femalesI-1].classList.add('block');
            femalesI--;
        }
        });

        // mediaQuery

    // if(mediaQuery.matches) {
    //     malesItem[dogsPhotos-1].classList.add('block');
    //     femalesItem[dogsPhotos-1].classList.add('block');
    // }
    const mediaQuery1280 = window.matchMedia('(max-width: 1280px)'),
        mediaQuery1024 = window.matchMedia('(max-width: 1024px)'),
        mediaQuery768 = window.matchMedia('(max-width: 768px)');
    

    function handleTabletChange(e) {
        if (e.matches) {
            
            malesItem[dogsPhotos-1].classList.add('block');
            femalesItem[dogsPhotos-1].classList.add('block');
            dogsPhotos--;
            
        } 
        // else {
        //     malesItem[dogsPhotos+1].classList.remove('block');
        //     femalesItem[dogsPhotos+1].classList.remove('block');
        //     dogsPhotos++;
        //     alert(`Увеличивается ${dogsPhotos}`);
        // }

      }

    mediaQuery1280.addListener(handleTabletChange);
    handleTabletChange(mediaQuery1280);

    mediaQuery1024.addListener(handleTabletChange);
    handleTabletChange(mediaQuery1024);

    mediaQuery768.addListener(handleTabletChange);
    handleTabletChange(mediaQuery768);

        // Articles Show

    function articleShow (articleItem, articleBlog, artocleTitle) {

        articleItem.forEach((item) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                articlesBlockHistory.classList.remove('show');
                articlesBlockLove.classList.remove('show');


                articleBlog.classList.toggle('show');

                let id = item.getAttribute('data-scroll');
    
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });


        artocleTitle.addEventListener('click', (event) => {
            event.preventDefault();
            articleBlog.classList.toggle('show');
        });
        
    }


    articleShow (articlesHistory, articlesBlockHistory, articlesBlockTitleHistory);
    articleShow (articlesLove, articlesBlockLove, articlesBlockTitleLove);

        // articlesHistory.forEach((item) => {
        //     item.addEventListener('click', (event) => {
        //         event.preventDefault();
        //         articlesBlockHistory.classList.toggle('show');

        //         let id = item.getAttribute('data-scroll');
    
        //         document.querySelector(id).scrollIntoView({
        //             behavior: 'smooth',
        //             block: 'start'
        //         });
        //     });
        // });


        // articlesBlockTitle.addEventListener('click', (event) => {
        //     event.preventDefault();
        //     articlesBlockHistory.classList.toggle('show');
        // });
        

});

    
        
    