let numJugadores = document.getElementbyId("numJugadores").value;

document.getElementbyId("enviarNumJug") = function repartirFichas(numJugadores){

	if(numJugadores > 0 && numJugadores < 6){

		let fichas = 60 / numJugadores;


		switch(numJugadores){

			case 1: let jugador1 = new Jugadores(fichas); break;

			case 2: let jugador1 = new Jugadores(fichas);
					let jugador2 = new Jugadores(fichas); break;

			case 3: let jugador1 = new Jugadores(fichas);
					let jugador2 = new Jugadores(fichas);
					let jugador3 = new Jugadores(fichas); break;

			case 4: let jugador1 = new Jugadores(fichas);
					let jugador2 = new Jugadores(fichas);
					let jugador3 = new Jugadores(fichas);
					let jugador4 = new Jugadores(fichas); break;

		}



	}


}