/* Код для приховання меню */

/* ми отримуємо ті елементи з якими ми працюємо, створюємо перемєну, звертаємось до документа, через команду кверіселектор елемент 
 */
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

/*Далі конструкція яка відстежує всі кліки, далі йде функція яка буде викон. після кліка (вона ще називаєтсья колбек функція)
 */

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

    

