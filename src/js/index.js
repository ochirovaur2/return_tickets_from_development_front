// import jQuery from "jquery";

function close_mass_problem(){
	let btn, mass_problem_js;
	btn = $('.btn-js');
  

  	btn.on('click', function(event){
        console.log(111)
  		$(".monkey").css("display","block");
  		$(".error").css("display","none");

  		event.preventDefault();

    	let btn = event.target;

    	mass_problem_js = $('#mass-problem-num-js').val();
    	
    	$.ajax({
            type: "POST",
            url: 'http://127.0.0.1:8000/mass_problem/',
            data: {
		        
		        "mass_problem_ticket": mass_problem_js
		        
		    },
            success: function(result){
            	if(result['response'] == 200){

            		$(".monkey").css("display","none");
	            	$('.results__description').css({'display' : 'block'});

	            	$('#results').html(`${mass_problem_js} Готово!`);

            	} else{
            		$(".monkey").css("display","none");
	            	$('.results__description').css({'display' : 'block'});

	            	$('#results').html(`${mass_problem_js} Ошибка!`);
            	}
            	
     	
            },
            error: function (jqXHR, exception) {
            	$(".monkey").css("display","none");
            	
			    $(".error").css("display","flex");
			    
	            $(".error__text").html('Возникла непредвиденная ошибка, пожалуйста, откройте консоль разработчика и отправьте ответ Аюру.')
			}
        });
        return false;
	})	
}


close_mass_problem()

