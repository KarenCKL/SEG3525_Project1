$(function () {
    //function to add padding top to the sections when the navbar is fixed for small and medium screens
    let checkNavbar = function () {
        if ($('#navbar').hasClass('show')) {
            $('body').addClass('navbar-collapsed');
        } else {
            $('body').removeClass('navbar-collapsed');
        }
    };

    checkNavbar(); 

    $('#navbar').on('shown.bs.collapse', function () {
        $('body').addClass('navbar-collapsed');
    });

    $('#navbar').on('hidden.bs.collapse', function () {
        $('body').removeClass('navbar-collapsed');
    });

    $(window).on('resize', function () {
        checkNavbar();
    });

    $('.navbar-toggler').on('click', function () {
        setTimeout(checkNavbar, 300); 
    });
    //automatically display the price upon selecting the service
    $('#select').change(function() {
        const selectedValue = $(this).val();
        const prices = {
            1: '$1200',
            2: '$1500',
            3: '$1200',
            4: '$1000'
        };
        $('#price').val(prices[selectedValue] || '');
    });

    // Set initial price if needed
     // Set initial price to $1200
     $('#price').val('$1200');
});

