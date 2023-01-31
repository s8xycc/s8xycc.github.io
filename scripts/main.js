let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://images.pexels.com/photos/14967314/pexels-photo-14967314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1') {
      myImage.setAttribute('src', 'https://images.pexels.com/photos/7472290/pexels-photo-7472290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    } else {
      myImage.setAttribute('src', 'https://images.pexels.com/photos/14967314/pexels-photo-14967314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    }
}

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
   setUserName();
}
