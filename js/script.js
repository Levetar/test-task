var distance
var age
var baggage

//Берем значения полей
$('#form').change(function () {
	distance = $('#distance').val()
	age = $('#age').val()
	baggage = $('#baggage').val()
})

//Ограничиваем ввод символов
$(document).ready(function()  {
	$('#distance, #age, #baggage').bind("change keyup input click", function() {
		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, ''); 
		} 
	}); 
});


//Аэрофлот
var aeroEconomyBaggage
var aeroEconomyResult

var aeroAdvancedBaggage
var aeroAdvancedAgeDiscount
var aeroAdvancedResult

var aeroLuxuryBaggage
var aeroLuxuryAgeDiscount
var aeroLuxuryResult


//Расчет тарифа "Эконом"
$('#form').change(function () {
	if (baggage <= 5) {
		aeroEconomyBaggage = 0
	} else if (baggage > 5) {
		aeroEconomyBaggage = 4000
	}
})

$('#form').change(function (){
  if (baggage > 20) {
  	aeroEconomyResult = 'Превышен лимит багажа, максимум 20 кг'
  } else {
  	aeroEconomyResult = (distance * 4) + aeroEconomyBaggage + ' ' + '₽'
  }
})

//Расчет тарифа "Продвинутый"
$('#form').change(function () {
	if (baggage <= 20) {
		aeroAdvancedBaggage = 0
	} else if (baggage > 20) {
		aeroAdvancedBaggage = 5000
	}
})

$('#form').change(function () {
	if (age <= 7 && age != 0) {
		aeroAdvancedAgeDiscount = 0.30
	} else {
		aeroAdvancedAgeDiscount = 0
	}
})

$('#form').change(function (){
  if (baggage > 50) {
  	aeroAdvancedResult = 'Превышен лимит багажа, максимум 50 кг'
  } else {
  	aeroAdvancedResult = ((distance * 8) - (distance * 8 * aeroAdvancedAgeDiscount)) + aeroAdvancedBaggage + ' ' + '₽'
  }
})

//Расчет тарифа "Люкс"
aeroLuxuryBaggage = 0

$('#form').change(function () {
	if (age <= 16 && age != 0) {
		aeroLuxuryAgeDiscount = 0.30
	} else {
		aeroLuxuryAgeDiscount = 0
	}
})

$('#form').change(function (){
  if (baggage > 50) {
  	aeroLuxuryResult = 'Превышен лимит багажа, максимум 50 кг'
  } else {
  	aeroLuxuryResult = ((distance * 15) - (distance * 15 * aeroLuxuryAgeDiscount)) + aeroLuxuryBaggage + ' ' + '₽'
  }
})


//РЖД
var rzdEconomyBaggage
var rzdEconomyAgeDiscount
var rzdEconomyResult

var rzdAdvancedBaggage
var rzdAdvancedAgeDiscount
var rzdAdvancedResult

var rzdLuxuryResult


//Расчет тарифа "Эконом"
$('#form').change(function () {
	if (baggage <= 15) {
		rzdEconomyBaggage = 0
	} else if (baggage > 15) {
		rzdEconomyBaggage = (baggage * 50) - 15
	}
})

$('#form').change(function () {
	if (age <= 5 && age != 0) {
		rzdEconomyAgeDiscount = 0.50
	} else {
		rzdEconomyAgeDiscount = 0
	}
})

$('#form').change(function (){
  if (baggage > 50) {
  	rzdEconomyResult = 'Превышен лимит багажа, максимум 50 кг'
  } else {
  	rzdEconomyResult = (distance * 0.5) - (distance * 0.5 * rzdEconomyAgeDiscount) + rzdEconomyBaggage + ' ' + '₽'
  }
})

//Расчет тарифа "Продвинутый"
$('#form').change(function () {
	if (baggage <= 20) {
		rzdAdvancedBaggage = 0
	} else if (baggage > 20) {
		rzdAdvancedBaggage = (baggage * 50) - 20
	}
})

$('#form').change(function () {
	if (age <= 8 && age != 0) {
		rzdAdvancedAgeDiscount = 0.30
	} else {
		rzdAdvancedAgeDiscount = 0
	}
})

$('#form').change(function (){
  if (baggage > 60) {
  	rzdAdvancedResult = 'Превышен лимит багажа, максимум 60 кг'
  } else {
  	rzdAdvancedResult = ((distance * 2) - (distance * 2 * rzdAdvancedAgeDiscount)) + rzdAdvancedBaggage + ' ' + '₽'
  }
})

//Расчет тарифа "Люкс"
$('#form').change(function (){
  if (baggage > 60) {
  	rzdLuxuryResult = 'Превышен лимит багажа, максимум 60 кг'
  } else {
  	rzdLuxuryResult = distance * 4 + ' ' + '₽'
  }
})


document.querySelector("#submit").onclick = function(e){
//Проверяем поля на заполнение
	var input = $('#distance, #age, #baggage');        
		var flag = true;

		input.each(function () {
			if ($(this).val().trim() == '' ) {
				$(this).attr('style', 'border: 1px solid red;');
				flag = false;
			} else {
				$(this).removeAttr("style");
				$(this).attr('style', 'border: 1px solid green;');
			}
		});

		if ( flag == false ) {
			e.preventDefault();
			alert('Сохранение невозможно. Пожалуйста заполните обязательные поля!');
			return false;
		}
//Выводим мнофрмацию
	$('#aeroEconomy').html(aeroEconomyResult)
	$('#aeroAdvanced').html(aeroAdvancedResult)
	$('#aeroLuxury').html(aeroLuxuryResult)

	$('#rzdEconomy').html(rzdEconomyResult)
	$('#rzdAdvanced').html(rzdAdvancedResult)
	$('#rzdLuxury').html(rzdLuxuryResult)

}


