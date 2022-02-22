function something()
{
	var x = window.localStorage.getItem('bbb'); //x = hh['bbb']
	x++; // x = x + 1
	window.localStorage.setItem('bbb', x); // hh['bbb'] = x

	alert(x);
}

function add_to_card(id)
{
	var key = 'product_' + id;

	var x = window.localStorage.getItem(key);
	x = x * 1 + 1;
	window.localStorage.setItem(key, x);

	alert('Items in your cart: ' + cart_get_number_of_items()); //выводит на экран окно с колличеством пицц в корзине
}

function cart_get_number_of_items() 
{
	var cnt = 0
	for(var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i);	// получаю ключ
		var value = window.localStorage.getItem(key);	// получаю значение, аналог в руби hh[key] = x

		if (key.indexOf('product_') == 0)
		{
			cnt = cnt + value * 1; // увеличиваю на 1
		}
	}
	return cnt
}