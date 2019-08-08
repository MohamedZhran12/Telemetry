$(function ()
{
    const element = document.querySelector('.navbar');
    $(window).on('scroll', function ()
    {
        if ($(document).scrollTop() > $('.sec1').offset().top)
        {
            $('.navbar').css(
                {
                    backgroundColor: '#FF887B',
                    padding: '13px'
                }
            );
            element.classList.add('animated', 'bounceInLeft');
        }
        else
        {
            $('.navbar').css(
                {
                    backgroundColor: 'transparent',
                    padding: '30px 35px'
                }
            );
            element.classList.remove('animated', 'bounceInLeft');
        }
    });
    $('header h1').fitText(2.3, {minFontSize: '20px', maxFontSize: '48px'});
    $('.sec1 .h1').fitText(2.3, {minFontSize: '20px', maxFontSize: '29px'});
});