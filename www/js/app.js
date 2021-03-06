function dispatch(label, optional) {
	console.info('DISPATCH: ', label);
	mixpanel.track(label);
}

function goToApp() {
	event.preventDefault();

	dispatch('register-first');

	var firstAmount = parseInt($('[data-start-amount]')[0].value, 10) || 0;
	var secondAmount = parseInt($('[data-start-amount]')[1].value, 10) || 0;

	var amount = Math.max(firstAmount, secondAmount, 5000);

	location.href = '/app?amount=' + amount;
}

$(function() {
	dispatch('pageview');

	$('[data-start-now]').on('click', goToApp);
	$('form').on('submit', goToApp);
});