$(document).ready(function () {
  $('.btn-1').click(function () {
    $(this).addClass("active")
    $('.btn-2').removeClass("active")
    $('.btn-3').removeClass("active")

    $('.carousel-shakl-2').css({
      transition: "left 1s",
      left: "50%"
    })

    $('.carousel-shakl-1').css({
      transition: "left 1s",
      left: "200%"
    })

    $('.carousel-shakl-3').css({
      transition: "left 1s",
      left: "200%"
    })
  })

  $('.btn-2').click(function () {
    $(this).addClass("active")
    $('.btn-1').removeClass("active")
    $('.btn-3').removeClass("active")

    $('.carousel-shakl-2').css({
      transition: "left 1s",
      left: "-100%"
    })

    $('.carousel-shakl-1').css({
      transition: "left 1s",
      left: "50%"
    })

    $('.carousel-shakl-3').css({
      transition: "left 1s",
      left: "200%"
    })
  })

  $('.btn-3').click(function () {
    $(this).addClass("active")
    $('.btn-1').removeClass("active")
    $('.btn-2').removeClass("active")

    $('.carousel-shakl-1').css({
      transition: "left 1s",
      left: "-100%"
    })

    $('.carousel-shakl-3').css({
      transition: "left 1s",
      left: "50%"
    })

    $('.carousel-shakl-2').css({
      transition: "left 1s",
      left: "-200%"
    })
  })

  let i = 0;

  $(".fa-bars").click(function () {
      if(i%2==0)
      {
        $(this).addClass('fa-times');
        $(this).removeClass('fa-bars');
        $(".menu-new").css({
          transition: "height 1s",
          height: "240px"
      })
      }else{
        $(this).addClass('fa-bars');
        $(this).removeClass('fa-times');
        $(".menu-new").css({
          transition: "height 1s",
          height: "0px"
      })
    }
    i++;
  })
})