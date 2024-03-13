const text = document.querySelector(".typing");
const words = ["Front-End Developer", "Web Developer", "HTML & CSS & JS Programmer", "IT Specialist", "React Developer", "просто душка :)"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
  text.textContent = currentChar;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 1) {
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    if (!isDeleting) {
      setTimeout(() => {
        isDeleting = true;
        typeEffect();
      }, 3000);
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 100);
    }
  }
}

typeEffect();


const stick = document.querySelector('.stick');

stick.style.fontFamily = 'Arial, sans-serif';
stick.style.color = 'black';

let opacity = 0;

const intervalId = setInterval(() => {
  if (opacity === 0) {
    stick.style.opacity = '0';
    opacity = 1;
  } else {
    stick.style.opacity = '1';
    opacity = 0;
  }
}, 500);