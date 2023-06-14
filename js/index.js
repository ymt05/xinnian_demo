// 轮播图
let picture_toggle = document.querySelector('.picture_toggle');
let picture_toggle_ul = picture_toggle.querySelector('ul');
let dot_ul =document.querySelector('.dot_ul')
let dot_li = document.querySelectorAll('.dot_ul>li');

//获取盒子宽度
let picture_toggleWidth = picture_toggle.offsetWidth;

for(let i = 0; i < picture_toggle_ul.children.length; i++) {
    // 给小圆圈li创建索引号
    dot_li[i].setAttribute('index',i);
    //给小圆圈li绑定鼠标事件
    dot_li[i].addEventListener('click',function() {
        // 排他思想，去除所有样式，给自己样式
        for(let i = 0; i < dot_li.length; i++) {
            dot_li[i].className = '';
        }
        this.className = 'orange_dot';
        //当点击小圆圈时，获取索引号
        var index = this.getAttribute('index');
        num = circle = index;
        //引用animate.js内函数
        animate(picture_toggle_ul,-index * picture_toggleWidth);
    })
}

// 克隆第一张图片添加到最后
let first = picture_toggle_ul.children[0].cloneNode(true);
picture_toggle_ul.appendChild(first);

// num控制图片
let num = 0;
// circle控制小圆圈
let circle = 0;

//节流阀
flag = true;

//绑定鼠标事件
picture_toggle.addEventListener('click',function() {
    if(flag) {
        flag = false;
        // 图片切换效果
        // 判断，如果走到了最后复制的一张图片，此时ul快速复原left改为0
        if (num == picture_toggle_ul.children.length - 1) {
            picture_toggle_ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(picture_toggle_ul,-num * picture_toggleWidth,function(){
            flag = true;
        });
         //小圆点切换效果
        circle++;
        //判断，如果超过圆点总数，就复原
        if (circle == dot_li.length) {
            circle = 0;
        }
        circleChange();
    }
})

function circleChange() {
    //先清除其小圆圈的orange_dot类名
    for (var i = 0; i < dot_li.length; i++) {
        dot_li[i].className = '';
    }
    //留下当前的小圆圈的orange_dot类名
    dot_li[circle].className = 'orange_dot';
}


let timer = setInterval(function() {
    picture_toggle.click();
},3000)


//当鼠标进入停止定时器
picture_toggle.addEventListener('mouseenter',function() {
    clearInterval(timer);

})

dot_ul.onmouseover = function() {
    clearInterval(timer);
}
//当鼠标离开开启定时器
picture_toggle.addEventListener('mouseleave',function() {
    timer = setInterval(function() {
        picture_toggle.click();
    },3000)
})

