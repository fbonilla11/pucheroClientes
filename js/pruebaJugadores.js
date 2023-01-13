
/*En el turno hacemos un bucle que vaya quitando fichas segun al jugador al que le toque*/

class Jugador{

	numPuntos;
    turno;

	constructor(numPuntos){

		this.numPuntos = numPuntos;
	}

	sumarPuntos(puntos){
		this.numPuntos += puntos;
	}

	restarPuntos(puntos){
		this.numPuntos -= puntos;
	}

	getPuntos(){
		return this.numPuntos;
	}
    
}

const arrayJug = [];


function Inicio(){

    const jugadores = parseInt(prompt("¿Cuantos jugadores sois?"));
    const fichas = 60 / jugadores;
    
    if(jugadores > 1 && jugadores < 7){

        alert(jugadores);

        const jugador1 = new Jugador(fichas);
        const jugador2 = new Jugador(fichas);
        const jugador3 = new Jugador(fichas);
        const jugador4 = new Jugador(fichas);
        const jugador5 = new Jugador(fichas);
        const jugador6 = new Jugador(fichas);

        switch(jugadores){

            case 2:
    
                arrayJug.push(jugador1);
                arrayJug.push(jugador2);

                break;
            case 3:
            
                arrayJug.push(jugador1);
                arrayJug.push(jugador2);
                arrayJug.push(jugador3);
            
                break;
            case 4:

                arrayJug.push(jugador1);
                arrayJug.push(jugador2);
                arrayJug.push(jugador3);
                arrayJug.push(jugador4);
                break;

            case 5:

                arrayJug.push(jugador1);
                arrayJug.push(jugador2);
                arrayJug.push(jugador3);
                arrayJug.push(jugador4);
                arrayJug.push(jugador5);
            break;

            case 6:

                arrayJug.push(jugador1);
                arrayJug.push(jugador2);
                arrayJug.push(jugador3);
                arrayJug.push(jugador4);
                arrayJug.push(jugador5);
                arrayJug.push(jugador6);
           break;                                        
        }

    }else{

        alert("¡El numero de jugadores debe estar entre 2 y 6!");

    }

    
    
}



function turno(){

    let turno = 0;

    turno++;

    arrayJug[turno].restarPuntos(1);

    alert(arrayJug[turno].getPuntos());

}

