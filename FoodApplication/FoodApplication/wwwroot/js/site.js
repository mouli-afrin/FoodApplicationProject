﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
}
//order page
function quantity(option) {
    let qty = $('#qty').val();
    let price = parseInt($('#price').val());
    let totalAmount = 0;
    if (option === 'inc') {
        qty = parseInt(qty) + 1;
    }
    else {
        qty = qty == 1 ? qty : qty - 1;
    }
    totalAmount = price * qty;
    $('#qty').val(qty);
    $('#totalAmount').val(totalAmount);

}
//Add to cart

async function cart() {
    let iTag = $(this).children('i')[0];
    let recipeId = $(this).attr('data-recipeId');
  
    if ($(iTag).hasClass('fa-regular')) {

        let resp = await fetch(`${apiURL}/${recipeId}?key=${apikey}`);
        let cart = result.data.recipe;
        cart.RecipeId = recipeId;
        delete cart.id;
        cartRequest(cart, 'SaveCart','fa-solid','fa-regular',iTag);
       
    }
    else {

    }
}
function cartRequest(data, action, addcls, removecls, iTag) {
    $.ajax({
        url: '/Cart/' + action,
        type: 'POST',
        data: data,
        success: function (resp) {
            $(iTag).addClass(addcls);
            $(iTag).removeClass(removecls);
        },
        error: function (err) {
            console.log(err);
        }

    });
}