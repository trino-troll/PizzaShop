function something()
{
	var x = window.localStorage.getItem('bbb'); //x = hh['bbb']
	x++; // x = x + 1
	window.localStorage.setItem('bbb', x); // hh['bbb'] = x

	alert(x);
}

function add_to_card()
{
	alert("Hello from function!");
}
