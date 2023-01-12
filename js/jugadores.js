
//Creamos la clase jugador, 
//donde establecemos los parametros para el número de fichas 
//y para el turno

export class Jugador{

	numPuntos;


	constructor(numPuntos){

		this.numPuntos = numPuntos;
		this.turno;
	}

	sumarPuntos(puntos){
		this.numPuntos += puntos;
	}

	restarPuntos(puntos){
		this.numPuntos -= puntos;
	}

	getPuntos(){
		return numPuntos;
	}

	setTurno(turno){
		this.turno = turno;
	}

	getTurno(){
		return turno;
	}
}

