
function repartirFichas(){

	var numJugadores = document.getElementById("jugadoresNum").value;

	if(numJugadores > 0 && numJugadores < 6){


		let fichas = 60 / numJugadores;

		switch(numJugadores){

			case 1: var jugador1 = new jugador(fichas); break;

			case 2: var jugador1 = new jugador(fichas);
					var jugador2 = new jugador(fichas); break;

			case 3: var jugador1 = new jugador(fichas);
					var jugador2 = new jugador(fichas);
					var jugador3 = new jugador(fichas); break;

			case 4: var jugador1 = new jugador(fichas);
					var jugador2 = new jugador(fichas);
					var jugador3 = new jugador(fichas);
					var jugador4 = new jugador(fichas); break;

			case 5: var jugador1 = new jugador(fichas);
					var jugador2 = new jugador(fichas);
					var jugador3 = new jugador(fichas);
					var jugador4 = new jugador(fichas); 
					var jugador5 = new jugador(fichas); break;

		}

		alert(jugador1.getPuntos());

	}else{

		alert("El numero de jugadores debe ser entre 1 y 5");


	}

}