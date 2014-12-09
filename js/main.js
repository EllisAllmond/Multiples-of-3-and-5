var main = function(){

	
}

var mult_3_and_5 = function(){
	var array = [];
	for(i=0; i<1000; i++){
		var number = i;
		number = number + 1;

		if( number % 3 == 0){
			array.push(number)
		}

		if( number % 5 == 0){
			array.push(number)
		}

		$('#Multiples3And5').text(array);
	}
}

var mult_3 = function(){
	var array = [];
	for(i=0; i<1000; i++){
		var number = i;
		number = number + 1;

		if( number % 3 == 0){
			array.push(number)
		}

		$('#Multiples3').text(array);
	}
}

var mult_5 = function(){
	var array = [];
	for(i=0; i<1000; i++){
		var number = i;
		number = number + 1;

		if( number % 5 == 0){
			array.push(number)
		}

		$('#Multiples5').text(array);
	}
}

var sum = function(){

	var array = [];
	for(i=0; i<1000; i++){
		var number = i;
		number = number + 1;

		if( number % 3 == 0){
			array.push(number)
		}

		if( number % 5 == 0){
			array.push(number)
		}
	}

	var sum = 0;
	for(i=0; i<array.length; i++){
		sum = sum + array[i];
	}

	$('#Sum').text(sum);
}



$(document).ready(main);






