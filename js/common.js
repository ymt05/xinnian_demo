//搜索框
let search_input = document.getElementById('search_input');
let search_btn = document.querySelector('.search-logo');
let prompt_box = document.querySelector('.prompt_box');
let search_box = document.querySelector('.search-box');
//监听input输入
search_input.addEventListener('input',function(){
    if (search_input.value == "") {
        prompt_box.style.display = 'block';
    } else {
        prompt_box.style.display = 'none';
    }
})

search_box.addEventListener('click',function() {
    if(search_input.value == "") {
        prompt_box.style.display = 'block';
    }
})

search_input.onblur = function() {
    prompt_box.style.display = 'none';
}

search_btn.onblur = function() {
    prompt_box.style.display = 'none';
}

// 头部导航
// let nav_list = document.querySelectorAll('.nav_list>a>li');

// for(let j = 0; j < nav_list.length;j++) {
//     nav_list[j].onclick = function() {
//         for(let i = 0; i < nav_list.length; i++) {
//             nav_list[i].className = '';
//         }
//         this.className = 'highlight_bg';
//     }
// }
