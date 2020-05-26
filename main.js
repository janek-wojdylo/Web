console.log(typeof 2);
console.log(typeof '2');

if ( 2 !=='2' ){
  console.log('Java to Javascript');
}

const button = document.querySelector('.action--js');

console.log(button)

button.addEventListener('click',() => {
  const heading = document.querySelector(".header__name--js");
  heading.innerHTML = `ahoj hej hej hej`;
  heading.classList.toggle('klasa-z-js')
});


const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click',() =>{
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open')
}
)