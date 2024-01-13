// 点击当前图片可切换成另一张图片
let myImage = document.querySelector("img")
myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src")
    if (mySrc === "images/ghost.svg") {
        myImage.setAttribute("src", "images/cow.svg")
    } else {
        myImage.setAttribute("src", "images/ghost.svg")
    }
}

/*
功能：
1.首次加载当前页面时，会弹窗要求输入用户名，输入后标题栏会一起显示用户名；
2.非首次进入该网页时，能直接看到之前输入的用户名；
3.用户可以点击"切换用户"按钮来修改用户名；
实现：
1.定义将标题栏信息追加用户名的方法：获取标题元素，并借助prompt提示用户输入用户名，将用户名追加到标题元素，并将用户名存储在本地(localStorage)方便下次直接获取；
2.通过if...else判断localStorage来判断是否是首次登录，如果是则调用设置用户名的函数，否则从本地获取用户名信息并追加到标题；
3.给"切换用户按钮"也绑定设置用户名的方法，这样就能切换本地存储的用户名了；
*/
let myHeading = document.querySelector("h1");
let myButton1 = document.querySelector("#but-switch");
let myButton2 = document.querySelector("#but-clear");

function setUsername() {
    let myName = prompt("请输入你的名字:")
    // 如果输入的用户名为undefine或null，则重新输入
    if (!myName) {
        setUsername()
    } else {
        localStorage.setItem("name", myName)
        myHeading.textContent = "欢迎 " + myName + " 访问本网页"
    }
}

if (!localStorage.getItem("name")) {
    setUsername()
} else {
    let stroedName = localStorage.getItem("name")
    myHeading.textContent = "欢迎 " + stroedName + " 访问本网页"
}

myButton1.onclick = function () {
    setUsername();
}

// 清空本地存储
myButton2.addEventListener("click", function () {
    localStorage.clear()
})