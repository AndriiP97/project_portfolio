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


/* код для реалізації автоматичного встановлення %, щоб ми не задавали style в span */

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

      /* Далі пишем пряму залежність, ми береме перемєну counters в ній лежать елеменит зі сторінки і їх багато, тобто вони лежать у визначеній структурі яка називається масив, і відповідно там елементи розташовані один за одним*/

/* Фор іч , це метод, який проходитьт по сховищу елементам і з елем щось робить*/

/* => функція, яке є тіло що вміє ця функція, але нам 1 елемента не вистачить, нам треба звернутись до визначись лініях, які розташовані поруч, бо залежність по індексу, і нам би залежність викорастати то ми можемо"і" аругмент підставити (скорочено index)*/

/* item кожен окремий рахунок, який перебираєм, а команда "innerHTML" позволяє витягує зміст цього елемента і перекладаємо в інлайн стиль ширини */ 

/* lines[i] щоб обирало конкретний елемент */

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

