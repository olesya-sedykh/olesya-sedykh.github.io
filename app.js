// // console.log("Test")
// let name = "Test";
// let number = 1;
// const number2 = 4;
// let boo = true;

// name = "Тест"

// // console.log(name, number)
// // console.log(typeof name, typeof number, typeof boo)

// const header = document.querySelector(".header")
// // const header = document.querySelectorAll("")
// console.log(header)
// console.log(typeof header)

// // function sayHello() {
// //     let message = "Hello!";
// //     console.log(message + name)
// // }

// // sayHello();

// function simpleMath(a, b) {
//     let result = a + b;
//     // console.log(result)
//     return result;
// }

// let sum = simpleMath(1, 2);
// console.log(sum);


// window.addEventListener("scroll", function() {
//     let scrollPos = this.window.scrollY;
//     console.log(scrollPos);
//     console.log("scrolled");
//     header.classList.add("red");
// })

// let new_add = document.querySelector('add a');
// new_add.textContent = '+';

const mediaQuerySmall = window.matchMedia('(max-width: 500px)')

function handleChangeText(e) {
  if (e.matches) {
    let new_add = document.querySelector('.add a');
    new_add.textContent = '+';

    let new_date1 = document.querySelector('.date1');
    new_date1.textContent = '15 августа';

    let new_date2 = document.querySelector('.date2');
    new_date2.textContent = '15 августа';

    let new_date3 = document.querySelector('.date3');
    new_date3.textContent = '15 августа';

    let new_date4 = document.querySelector('.date4');
    new_date4.textContent = '15 августа';

    let new_date5 = document.querySelector('.date5');
    new_date5.textContent = '15 августа';

    let new_date6 = document.querySelector('.date6');
    new_date6.textContent = '15 августа';

    let new_date7 = document.querySelector('.date7');
    new_date7.textContent = '15 августа';

    let new_date8 = document.querySelector('.date8');
    new_date8.textContent = '15 августа';

    let new_date9 = document.querySelector('.date9');
    new_date9.textContent = '15 августа';

    let new_date10 = document.querySelector('.date10');
    new_date10.textContent = '15 августа';

    let new_date11 = document.querySelector('.date11');
    new_date11.textContent = '15 августа';

    let new_date12 = document.querySelector('.date12');
    new_date12.textContent = '15 августа';
    
    // new_logitip = document.querySelector('.logotip');
    // new_logitip.changeImage = 'img\logotip.svg';

    let new_logitip = document.querySelector('.logotip_text');
    new_logitip.textContent = '';
  }
    
  else {
    let new_add = document.querySelector('.add a');
    new_add.textContent = '+ Добавить';

    let new_date1 = document.querySelector('.date1');
    new_date1.textContent = 'Добавлено 15 августа';

    let new_date2 = document.querySelector('.date2');
    new_date2.textContent = 'Добавлено 15 августа';

    let new_date3 = document.querySelector('.date3');
    new_date3.textContent = 'Добавлено 15 августа';

    let new_date4 = document.querySelector('.date4');
    new_date4.textContent = 'Добавлено 15 августа';

    let new_date5 = document.querySelector('.date5');
    new_date5.textContent = 'Добавлено 15 августа';

    let new_date6 = document.querySelector('.date6');
    new_date6.textContent = 'Добавлено 15 августа';

    let new_date7 = document.querySelector('.date7');
    new_date7.textContent = 'Добавлено 15 августа';

    let new_date8 = document.querySelector('.date8');
    new_date8.textContent = 'Добавлено 15 августа';

    let new_date9 = document.querySelector('.date9');
    new_date9.textContent = 'Добавлено 15 августа';

    let new_date10 = document.querySelector('.date10');
    new_date10.textContent = 'Добавлено 15 августа';

    let new_date11 = document.querySelector('.date11');
    new_date11.textContent = 'Добавлено 15 августа';

    let new_date12 = document.querySelector('.date12');
    new_date12.textContent = 'Добавлено 15 августа';

    let new_logitip = document.querySelector('.logotip_text');
    new_logitip.textContent = 'Фотогалерея';
  }
}

mediaQuerySmall.addListener(handleChangeText)
handleChangeText(mediaQuerySmall)




document.addEventListener('click', (e) => {

  // let close = document.querySelector('.close');

  let autorization_login = document.querySelector('.autorization_login input');
  let autorization_password = document.querySelector('.autorization_password input');

  let registration_login = document.querySelector('.registration_login input');
  let registration_password = document.querySelector('.registration_password input');
  let name = document.querySelector('.name input');
  let phone = document.querySelector('.phone input');
  let second_password = document.querySelector('.second_password input');
  let agreement = document.querySelector('.agreement input');

	const withinBoundaries = (e.composedPath().includes(autorization_login) && e.composedPath().includes(autorization_password,
    name)) || (e.composedPath().includes(registration_login) && e.composedPath().includes(registration_password) &&
    e.composedPath().includes(phone) && e.composedPath().includes(second_password && 
      e.composedPath().includes(agreement)));
 
	if (!withinBoundaries) {

    let autorization_button = document.querySelector('.autorization_close');
    let registration_button = document.querySelector('.registration_close');

    if (autorization_login.value !== '' && autorization_password.value !== '') {
      autorization_button.style.opacity = "1";
    }

    else if (name.value !== '' && registration_login.value !== '' && registration_password.value !== '' 
    && phone.value !== '' && second_password.value !== '' && agreement.checked === true) {
      if (registration_password.value !== second_password.value) {
        // const text = document.createTextNode("Пароли не совпадают");
        // registration_window = document.querySelector('.registration_window');
        // registration_window.appendChild(text);
        registration_button.style.opacity = "0.3";
        alert("Пароли не совпадают");
      }
      else {
        registration_button.style.opacity = "1";
      }
    }

    else {
      autorization_button.style.opacity = "0.3";
      registration_button.style.opacity = "0.3";
    }
	}
})