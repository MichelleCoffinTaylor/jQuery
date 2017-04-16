$(document).ready(function(){

	$('#Click').click(function(){
		event.preventDefault();
		alert("You have clicked on the button.");
	});

	$('#DoubleClick').dblclick(function(){
		alert("You have double clicked on the button.");
	});

	$('#MouseEnter').mouseenter(function(){
		alert("You have entered this button.")
	});

	$('#MouseLeave').mouseleave(function(){
		alert("You have left this button.")
	});

	$('#Hover').hover(function(){
		$('#HoverExample').toggle();
	});

	$('#DefaultExample').click(function(){
		event.preventDefault();
	});

	$('#Show').click(function(){
		$('#HideShowExample').show();
	});

	$('#Hide').click(function(){
		$('#HideShowExample').hide();
	});

	$('#ShowSpeed').click(function(){
		$('#HideShowSpeedExample').show(2000);
	});

	$('#HideSpeed').click(function(){
		$('#HideShowSpeedExample').hide(2000);
	});

	$('#ToggleButton').click(function(){
		$('#ToggleExample').toggle();
	});

	$('#FadeIn').click(function(){
		$('#FadeExample').fadeIn();
	});

	$('#FadeOut').click(function(){
		$('#FadeExample').fadeOut();
	});

	$('#AppendButton').click(function(){
		$('#AppendExample').append(' This section is added to the end of the paragraph.');
	});

	$('#AddListItem').click(function(){
		$('#ListExample').append('<li>This list item has been appended to the ul</li>')
	})

	$('#PrependButton').click(function(){
		$('#PrependExample').prepend('This section is added to the beginning of the paragraph. ');		
	})

	$('#RemoveButton').click(function(){
		$('#RemoveExample').remove();
	})

	$('#EmptyButton').click(function(){
		$('#EmptyExample').empty();
	})

	$('#AddRed').click(function(){
		$('#AddRemoveExample').removeClass('blue');
		$('#AddRemoveExample').addClass('red');
	});

	$('#AddBlue').click(function(){
		$('#AddRemoveExample').removeClass('red');
		$('#AddRemoveExample').addClass('blue');
	})

	$('#ToggleClassButton').click(function(){
		$('#ToggleClassExample').toggleClass('large');
	})

	$('#CssExampleButton').click(function(){
		$('#CssExample').css({'background-color':'yellow','width':'600px'})
	})

});