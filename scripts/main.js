//切换图片
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/wbt.jpg') {
      myImage.setAttribute('src', 'images/gz.jpg');
    } else {
      myImage.setAttribute('src', 'images/wbt.jpg');
    }
}

//切换用户与标题
let myButton = document.querySelector('#change');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = '欢迎光临，' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '欢迎光临，' + storedName;
}

myButton.onclick = function() {
   setUserName();
}
