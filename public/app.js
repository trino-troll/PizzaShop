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

	update_orders_input()
}

function update_orders_input() 
{
	var orders = cart_get_orders();
	$('#orders_input').val(orders);
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

function cart_get_orders() 
{
	var orders = ''
	for(var i = 0; i < window.localStorage.length; i++)
	{
		var key = window.localStorage.key(i);	// получаю ключ
		var value = window.localStorage.getItem(key);	// получаю значение, аналог в руби hh[key] = x

		if (key.indexOf('product_') == 0)
		{
			orders = orders + key + "=" + value + ",";
		}
	}
	return orders
}