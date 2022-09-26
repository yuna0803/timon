$(function(){
    $(window).scroll(function(){
        var windowH = $(this).height();
        var percentage = windowH * 60 / 100; //창에서 몇퍼센트일 때 
        var windowS = $(this).scrollTop() + percentage 
        //실행하고 싶은 클래스
        $(".ani").each(function(){
            var thisTop = $(this).offset().top;
            if (thisTop < windowS) {
                //실행하고 싶은 클래스에 on을 넣어준다.
                $(this).addClass("on");
            }
        });
    })

    $(".split").each(function(){
		var text = this;
		text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>")
		$(this).find("span").each(function(i , idx){
			$(this).addClass("num"+i+" ")
			var i = i / 10 //1은 1s, 10은 0.1s, 100은 0.01s
			$(this).css("animation-delay", (i)+"s")
		})
	})
    $('.num12').after('<br>');

    $(window).resize(function(){
        if(window.innerWidth > 800){
            $('.header .m_gnb > ul > li > ul').css('display', 'block');
        } else{
            $('.header .m_gnb > ul > li > ul').css('display', 'none');
        }
    })  
    
    $('.header .m_btn').on('click', function(){
        $('.header .m_gnb').toggleClass('on');
        $(this).toggleClass('on');
        if(window.innerWidth < 800){
            $('.header .m_gnb > ul > li > ul').stop().slideUp();
        }
    })

    $('.header .gnb > ul > li > a').hover(function(){
        $(this).next().stop().slideDown()
    }, function(){
        $(this).next().stop().slideUp()
    })

    $('.header .m_gnb > ul > li > a').on('click', function(e){
        if(window.innerWidth < 800){
            e.preventDefault();
            $(this).next().stop().slideToggle();
            $('.header .m_gnb > ul > li > a').not(this).next().stop().slideUp();
        }
    })

    
})