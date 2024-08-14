var projects = $('.project').toArray();
var sortingButtons = $('.sorting__button').toArray();

$('.sorting__button').on('click', function(){
    if( $(this).hasClass('sorting__button--nonactive')){
        $.each(sortingButtons, function(){
            $(this).addClass('sorting__button--nonactive')
        })
        $(this).removeClass('sorting__button--nonactive')
        var categoryName = $(this).text();

        if (categoryName != 'All'){
            $.each(projects, function() {
                if( $(this).find('p').attr('id') != categoryName ){
                    $(this).css('display', 'none');
                }
                else{
                    $(this).css('display', 'block');
                }
            });
        }
        else{
            $.each(projects, function() {
                $(this).css('display', 'block');
            });
        }
    }

});

