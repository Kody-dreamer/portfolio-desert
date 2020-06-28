$(function(){
    $('main').addClass('active');
    $('nav ul li').addClass('active');
    $('#Top h1').addClass('fade');
    $('#Top h2').addClass('fade');

    var top=$('#about').offset().top;
    $('main').scroll(function(){
        var scroll=$(this).scrollTop();
        if(scroll>=Top&&scroll<about){
            $('.intro1').slideDown(1000);
            $('.intro2').addClass('anime');
        }
    });

    var top2=$('#concept').offset().top;
    $('main').scroll(function(){
        var scroll2=$('main').scrollTop();
        if(scroll2>=about&&scroll2<concept){
            $('#concept ul').addClass('spacing');
        }
        $('.scroll-number').text(scroll2);
    });

    var Top=$('#Top').offset().top;
    var about=$('#about').offset().top;
    var concept=$('#concept').offset().top;
    var skill=$('#skill').offset().top;
    var contact=$('#contact').offset().top;
    $('main').scroll(function(){
        var scroll=$('main').scrollTop();
        if(scroll>=0&&scroll<Top){
            $('.shooting-star-container').removeClass('shooting-red shooting-purple shooting-blue shooting-green');
        }
        else if(scroll>=Top&&scroll<about){
            $('.shooting-star-container').removeClass('shooting-red shooting-blue shooting-green');
            $('.shooting-star-container').addClass('shooting-purple');
        }
        else if(scroll>=about&&scroll<concept){
            $('.shooting-star-container').removeClass('shooting-purple shooting-blue shooting-green');
            $('.shooting-star-container').addClass('shooting-red');
        }
        else if(scroll>=concept&&scroll<skill){
            $('.shooting-star-container').removeClass('shooting-purple shooting-green shooting-red');
            $('.shooting-star-container').addClass('shooting-blue');
            $('#skill ul li').addClass('act');
        }
        else if(scroll>=skill&&scroll<contact){
            $('.shooting-star-container').removeClass('shooting-purple shooting-red shooting-blue');
            $('.shooting-star-container').addClass('shooting-green');
        }
        else{
            $('.shooting-star-container').removeClass('shooting-purple shooting-red shooting-blue shooting-green');
        }
    });
});
