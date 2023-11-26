$(document).ready(function () {
    $('#convert').on('click', function () {
        var fromCurrency = $('#fromCurrency').val();
        var toCurrency = $('#toCurrency').val();
        var amount = $('#amount').val();

        $.ajax({
            url: 'https://open.er-api.com/v6/latest/' + fromCurrency,
            dataType: 'json',
            success: function (data) {
                var rate = data.rates[toCurrency];
                var result = amount * rate;

                $('#result').html('Результат: ' + result.toFixed(2) + ' ' + toCurrency);
            },
            error: function () {
                $('#result').html('Error fetching exchange rates');
            }
        });
    });
});