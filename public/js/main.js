 /*
    author:"Lee"
    date:2018/12/7
    project:csdn
    type:JavaScript


 */
 // 轮播图

 var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true,


        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })

 //固定sideBar
    var topBar = document.querySelector(".top");
    var sideBar = document.querySelector(".sideBar");
    var backTop = document.querySelector(".backTop");
    var tip = document.querySelector(".tip");
    var timer = null;
    window.onscroll = function() {
        var scrollTop = Math.floor(document.body.scrollTop || document.documentElement.scrollTop);
        var topHeight = topBar.offsetHeight;
        if (scrollTop > topHeight) {
            // topBar.style.width = "100%";
            // topBar.style.position = "fixed";
            // topBar.style.top = 0;
            // topBar.style.zIndex = 999;

            sideBar.style.position = "fixed";
            sideBar.style.top = "-7px";
            sideBar.style.zIndex = 1000;



        }else if (scrollTop <= topHeight) {
            // console.log("还在滚动")
            // topBar.style.position = "static";
            sideBar.style.position = "static";
        }
        console.log(scrollTop)


        //固定tip
        if (scrollTop > 300) {
            tip.style.position = "fixed"
            tip.style.width = "760px"
            tip.style.top = 0;
        }else if (scrollTop <= 300) {
            // console.log("还在滚动")
            // topBar.style.position = "static";
            tip.style.position = "static";
        }

        //回到顶部按钮显示与隐藏
        if (scrollTop >= 400) {
            backTop.style.display = "block";
        }else if (scrollTop < 400) {
            backTop.style.display = "none";
        }
        //清除回到顶部定时器
        if (scrollTop == 0) {
            clearInterval(timer);
        }
    }
//回到顶部
    backTop.addEventListener("click",function(){

       timer = setInterval(function(){
            var scrollTop = Math.floor(document.body.scrollTop || document.documentElement.scrollTop);
            var iSpeed = Math.ceil(scrollTop/2);
            document.body.scrollTop = document.documentElement.scrollTop = scrollTop - iSpeed;
        },30)
    })

    var articleLi = document.querySelectorAll('.article-list');
    var closeBtn = document.querySelectorAll('.close-btn');
    console.log(closeBtn)
    console.log(articleLi)
    closeBtn[0].onclick = function(){
        console.log(1)
    }
    for (let i = 0; i < articleLi.length; i++) {
        closeBtn[i].addEventListener('click',function(){
            console.log("关闭按钮")
            articleLi[i].style.display = "none"
        })
    }



