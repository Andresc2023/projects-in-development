onload = () => {
	let url = "http://code.highcharts.com/highcharts.js";
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			// chama as funçoes
			ipca(data[1].valor);
			cdi(data[0].valor);
		});

	let ipca = (valueIpca) => {
		let ipca = document.getElementById("ipca");
		ipca.value = `${valueIpca}%`;
	};

	let cdi = (valueCdi) => {
		let cdi = document.getElementById("cdi");
		cdi.value = `${valueCdi}%`;
	};
};



	



$(function() {

    start();

    function start(){
        $("#screen2").hide();

        // Generate Contribuition Time Options on index document
        (function() {
            for (let months = 1; months <= 60; months++) {
                const value = months;
                
                // Formatting the text for each option
                const text = Math.floor(months / 12) != 0
                                ? Math.floor(months / 12) + " anos e " + months % 12 + " meses"
                                : months % 12 + " meses";
                
                const optionElement = $("<option></option>");
                optionElement.val(value);
                optionElement.text(text);

                $("#contributionTime").append(optionElement);
            }
        })();
    }

    function changeScreen(){
        $("#screen1").slideToggle("slow");
        $("#screen2").fadeToggle("slow");
    }

    $("#inputForm").on("submit", function() { 

        const name = $("#name").val();
        const payment = $("#payment").val();
        const contributionTime = $("#contributionTime").val();
        const contributionTime_formatted = $(`#contributionTime option[value='${contributionTime}']`).text();
        const interestRate = 0.517 / 100;

        // Validating the input
        if (name === "" || name === undefined){
            return 0;
        }
        if (parseFloat(payment) <= 0 || isNaN(parseFloat(payment))){ // Checking if payment it's a number and if it's positive
            return 0;
        }

        // Formatting the user input into a math expression to send for the API
        const expression = `${payment} * (((1 + ${interestRate})
        ^ ${contributionTime} - 1) / ${interestRate})`;

        $.ajax({
            type: 'POST',
            url: 'http://api.mathjs.org/v4/?expr=2%2F3&precision=3',
            dataType: 'json',
            contentType: 'application/json',

            data: JSON.stringify( { "expr": expression } ),

            success: (function(data){
                // Format the user input and the data receive
                // by the ajax request.

                // Formatting for float with 2 decimals places and
                // formatting periods to commas
                let result = parseFloat(data["result"]);
                result = result.toFixed(2);
                result = result.replace(".", ",");

                let payment_formatted = parseFloat(payment);
                payment_formatted = payment_formatted.toFixed(2);
                payment_formatted = payment_formatted.replace(".", ",");

                // Formatting the query of the output
                const output = `Olá <strong>${name}</strong>, juntando <strong>R$ ${payment_formatted}</strong> todo mês,
                você terá <strong>R$ ${result}</strong> em ${contributionTime_formatted}.`;

                $("#outputText").html(output);
            }),

            error: function (resp) {
                $("#outputText").html("<strong>Parece que algo deu errado!</strong> Por favor, simule novamente.");
            }
        });

        changeScreen();
                                              
    });

    $("#simulateAgain").on("click", changeScreen);

});

function atualizarTempo(){
    var display = document.querySelector('.display');

    var agora = new Date();
    
    var horario = corrigirHorario(agora.getHours()) + ':' + corrigirHorario(agora.getMinutes()) + ':' + corrigirHorario(agora.getSeconds());
    
    display.textContent = horario;
}

function corrigirHorario(numero){
    if (numero < 10) {
        numero = '0' + numero;
    }
    return numero;
}

atualizarTempo();
setInterval(atualizarTempo, 1000);

console.log(horario);

function GerarQRCode(){
    var inputUsuario = document.querySelector('textarea').value;
  
    document.querySelector('#QRCodeImage').src = conteudoQRCode;
}


 