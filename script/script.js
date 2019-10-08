document.addEventListener('DOMContentLoaded', () => {

    //экранная клавиатура
    {
        const keyboardButton = document.querySelector('.search-form__keyboard');
        const keyboard = document.querySelector('.keyboard');
        const closeKeyboard = document.querySelector('#close-keyboard');
        const searchInput = document.querySelector('.search-form__input');

        const toggleKeyboard = () => {
            keyboard.style.top = keyboard.style.top ? "" : "50%";
        }
        const typing = event => {
            const target = event.target;

            if (target.tagName.toLowerCase() === "button" && target.id != "keyboard-backspace" && target.style.width != "293px") {

                searchInput.value += target.textContent.trim();
                
            } else if (target.id == "keyboard-backspace") {

                searchInput.value = searchInput.value.substring(0, searchInput.value.length - 1);

            } else if (target.style.width == "293px") {

                searchInput.value += " ";

            }


        }

        keyboardButton.addEventListener('click', toggleKeyboard);
        closeKeyboard.addEventListener('click', toggleKeyboard);
        keyboard.addEventListener('click', typing);
    }


    //меню
    {
        const burger = document.querySelector('.spinner');
        const sidebarMenu = document.querySelector('.sidebarMenu');
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            sidebarMenu.classList.toggle('rollUp');
        });
        sidebarMenu.addEventListener('click', e => {
            let target = e.target;
            target = target.closest("a[href='#']");
            if (target) {
                const parentTarget = target.parentNode;
                sidebarMenu.querySelectorAll('li').forEach(elem => {
                    if (elem === parentTarget) {
                        elem.classList.add('active');
                    } else {
                        elem.classList.remove('active');
                    }
                });

            }
        })
    }

    //Модальное окно
    {
        const divYoutuber = document.createElement('div');

    }

});