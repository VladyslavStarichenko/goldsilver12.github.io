$(function(){
	$('.but1').click(function(){
		alert('Fantastic, you have chosen the goal of weight loss!')
		var weight = +prompt('Enter your weight to make a diet!');
		if(weight < 30|| weight > 250|| isNaN(weight) || weight ==''){
			alert('Plese,enter the data correctly,\nFor example : "65,5" ');
			weight = +prompt("Enter your weight!" );
		}
		alert( 'Your weight:' + ' ' + weight + ' kg');
		var proteins =  (weight - 2) * 1.5;
      var hidrocarbs = (weight - 2) * 3;
      var fats = (weight - 2) * 0.5;
      alert('To achieve your goal you should daily consume  : ' + '\n *Proteins :' + " " + proteins + " Gram"
      +  ' \n *Carbohydrates :' +" " + hidrocarbs + " Gram" + '\n *Fats :' + " " + fats + " Gram" )
	})
})

$(function(){
	$('.but2').click(function(){
		alert('Fantastic, you have chosen the goal of weight saving!')
		var weight = +prompt('Enter your weight to make a diet!');
		if(weight < 30|| weight > 250|| isNaN(weight) || weight ==''){
			alert('Plese,enter the data correctly,\nFor example : "65,5" ');
			weight = +prompt("Enter your weight!" );
		}
		alert( 'Your weight:' + ' ' + weight + ' kg');
		var proteins =  (weight) * 1.5;
      var hidrocarbs = (weight) * 3;
      var fats = (weight) * 0.5;
      alert('To achieve your goal you should daily consume  : ' + '\n *Proteins :' + " " + proteins + " Gram"
      +  ' \n *Carbohydrates :' +" " + hidrocarbs + " Gram" + '\n *Fats :' + " " + fats + " Gram" )
	})
})

$(function(){
	$('.but3').click(function(){
		alert('Fantastic, you have chosen the goal of weight gaining!')
		var weight = +prompt('Enter your weight to make a diet!');
		if(weight < 30|| weight > 250|| isNaN(weight) || weight ==''){
			alert('Plese,enter the data correctly,\nFor example : "65,5" ');
			weight = +prompt("Enter your weight!" );
		}
		alert( 'Your weight:' + ' ' + weight + ' kg');
		var proteins =  (weight + 2) * 1.5;
      var hidrocarbs = (weight + 2) * 3;
      var fats = (weight + 2) * 0.5;
      alert('To achieve your goal you should daily consume  : ' + '\n *Proteins :' + " " + proteins + " Gram"
      +  ' \n *Carbohydrates :' +" " + hidrocarbs + " Gram" + '\n *Fats :' + " " + fats + " Gram" )
	})
})


document.getElementById('button1').addEventListener('click', function(){
	document.querySelector('.bg-modal').style.display='flex';
});
document.querySelector('.close').addEventListener('click', function(){
	document.querySelector('.bg-modal').style.display='none';
});
function valid (form){
	var fail = false
	var name = form.name
	if(name == ""|| name == " "){
		fail = "Enter your name please"
	}
	if(fail){
		alert(fail);
		return false;
	}
		else{
			return true;
		}
}

var line = "Some text to run Some text to run Some text to run Some text to run Some text to run Some text to run Some text to run Some text to run"
var speed =100;
var i = 0;
function ticker(){
	if(i++<line.length){
		document.demo.form.value=line.substring(0,i);

	}else{
		document.demo.form.value=" ";
		
		i=0;
	}
	setTimeout("ticker()",speed)
}
ticker();

