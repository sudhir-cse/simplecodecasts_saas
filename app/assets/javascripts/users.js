$(document).ready(function(){
    Stripe.setPublishableKey($('meta[name="stripe-key"]').attr('content'));
    
    //watch for a form submission
    $('#form-submit-btn').click(function(event){
        event.preventDefault();
        $('input[type="submit"]').prop('disabled', true);
        var error = false;
        var ccNum = $('#card_number').val(),
            cvcNum = $('#card_code').val(),
            expMonth = $('#card_month').val(),
            expYear = $('#card_year').val();
            
        if(!error){
            //Get the stripe token:
            Stripe.createToken({
                number: ccNum,
                cvc: cvcNum,
                exp_month: expMonth,
                exp_year: expYear
            }, stripeResponseHandler);
        }
        return false;
    }); //end for form-submit-btn
    
    function stripeResponseHandler(status, response){
        //Get the token from the response
        var token = response.id;
        
        //Get a reference to the form
        var f = $('#new_user');
        
        //Add the token to the form
        f.append('<input type="hidden" name="user[stripe_card_token]" value="' + token + '"/>');
        
        //Finally submit the form
        f.get(0).submit();
    }
});