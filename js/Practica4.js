var container = document.querySelector(".box");
const casillas = 9;

// crear puchero
 var puchero = document.createElement('canvas');
 puchero.classList.add('puchero');
 puchero.width = 120;
 puchero.height = 120;
 container.appendChild(puchero);
 pintarPuchero(puchero);
//<!-- Crear elementos canvas para las casillas -->
//<!-- Usar un bucle for para crear los elementos de manera automática -->

//Los canvas se formarán en una elipse
for (var i = 0; i < casillas; i++) {
  // Crear un elemento canvas
  var canvas = document.createElement('canvas');
  canvas.classList.add('casilla');
  // Establecer el ancho y alto del canvas en 50 (cada canvas será de 50 x 50)
  canvas.width = 120;
  canvas.height = 120;
  // Añadir el canvas a la página
  container.appendChild(canvas);
  
}

// Obtener una referencia a todos los elementos canvas en la página
var canvases = document.querySelectorAll('.casilla');



// Dibujar una elipse en cada canvas y posicionarlos en una elipse de 
for (var i = 0; i < canvases.length; i++) {
  // Obtener el contexto del canvas en 2D
  var ctx = canvases[i].getContext('2d');

  // Dibujar una elipse en el canvas
  ctx.beginPath();  
  
  //ctx.ellipse(35, 35, 35, 35, 0, 0, 2 * Math.PI);
  //ctx.stroke();

  // Posicionar el canvas en la elipse 
  canvases[i].style.left = Math.cos(2 * Math.PI * i / casillas) * 400 + 400 - 25 + 'px';
  canvases[i].style.top = Math.sin(2 * Math.PI * i / casillas) * 250 + 300  - 25  + 'px';
  
  if (i>4) pintarCasilla(canvases[i],i+3)
  else pintarCasilla(canvases[i],i+2)
}



function pintarCasilla(canvas, fichas, num){
  var ctx = canvas.getContext('2d');
  ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, 2 * Math.PI);
  ctx.fillStyle = 'blue';
  ctx.fill();
  for (var i = 0; i < fichas; i++) {
      // Calcular la posición en el círculo para cada ficha
      var x = Math.cos(2 * Math.PI * i / fichas) * 35 + canvas.width / 2;
      var y = Math.sin(2 * Math.PI * i / fichas) * 35 + canvas.height / 2;

      // Dibujar la ficha en la posición calculada
      ctx.beginPath();
      ctx.arc(x, y, 9, 0, 2 * Math.PI);
      if (i < num ) ctx.fillStyle = 'black'
         else ctx.fillStyle = 'white'
      ctx.fill();
    
     ctx.fillStyle = 'white';
    // Establecer la fuente para el texto
     ctx.font = '24px sans-serif';
     // Dibujar el número en el canvas usando el método fillText()
     x = canvas.width / 2 - ctx.measureText(fichas).width / 2;
     y = canvas.height / 2 + 10;
     ctx.fillText(fichas, x, y);
  }
  
}

function pintarPuchero(canvas){
  var ctx = canvas.getContext('2d');
  ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, 2 * Math.PI);
  ctx.fillStyle = 'black';
  ctx.fill();
  for (var i = 0; i < 4; i++) {
      // Calcular la posición en el círculo para cada ficha
      var x = Math.cos(2 * Math.PI * i / 4) * 35 + canvas.width / 2;
      var y = Math.sin(2 * Math.PI * i / 4) * 35 + canvas.height / 2;

      // Dibujar la ficha en la posición calculada
      ctx.beginPath();
      ctx.arc(x, y, 9, 0, 2 * Math.PI);
     
      ctx.fillStyle = 'white'
      ctx.fill();
    
    
     ctx.fillStyle = 'white';
    // Establecer la fuente para el texto
     ctx.font = '24px sans-serif';
     // Dibujar el número en el canvas usando el método fillText()
     x = canvas.width / 2 - ctx.measureText(7).width / 2;
     y = canvas.height / 2 + 10;
     ctx.fillText(7, x, y);
  }
  
}

// pintamos fichas aleatorias en el tablero
/*for(let i=0; i < canvases.length; i++){
  let fichas = Math.ceil(Math.random()*(i+2));
   if (i>4) pintarCasilla(canvases[i],i+3,fichas)
  else pintarCasilla(canvases[i],i+2,fichas)

  console.log(i+" "+(i+2)+ " "+fichas);
}*/

//pintarCasilla(canvases[2], 4, 2); // pinta dos fichas en el 4
//pintarCasilla(canvases[8], 11, 5); // pinta 5 fichas en el 11
//pintarCasilla(canvases[6], 9, 3); // pinta 3 fichas en el 9


//Creamos la clase jugador
class Jugador{

	numPuntos;
    nombre;

	constructor(numPuntos, nombre){

		this.numPuntos = numPuntos;
        this.nombre = nombre;
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

    getNombre(){
        return this.nombre;
    }

}

//Creamos un array para guardar a todos los jugadores
const arrayJug = [];

//Declaramos una variable global para los turnos
let turnos = -1;

//Funcion de inicio que se encarga de definir el nº de jugadores que participan y los incluye en el array principal
function repartirFichas(){

    //Pedimos el numero de jugadores
    var jugadores=parseInt(prompt("¿Cuantos jugadores sois?"));

    //Comprobamos que hay entre 2 y 6 jugadores
    if(jugadores > 1 && jugadores < 6) {

        //Repartimos las fichas necesarias segun el tipo de jugadores que tengamos
        let fichas = 60 / jugadores;

        //Instanciamos las clase Jugador para todos los jugadores posibles, (ya que solo hay 6 como maximo)
        const jugador1 = new Jugador(fichas, "Jugador 1");
        const jugador2 = new Jugador(fichas, "Jugador 2");
        const jugador3 = new Jugador(fichas, "Jugador 3");
        const jugador4 = new Jugador(fichas, "Jugador 4");
        const jugador5 = new Jugador(fichas, "Jugador 5");

        //Segun el numero de jugadores vamos a ir metiendo en el array los jugadores necesarios
        switch(jugadores){
            case 2:
    
                arrayJug.push(jugador1, jugador2);

                break;
            case 3:
            
                arrayJug.push(jugador1, jugador2, jugador3);
            
                break;
            case 4:

                arrayJug.push(jugador1, jugador2, jugador3, jugador4);

                break;

            case 5:

                arrayJug.push(jugador1, jugador2, jugador3, jugador4, jugador5);

                break;                                     
        } 


    }else{

        alert("¡El numero de jugadores debe estar entre 2 y 5!");

    }

    
}

//Creamos la funcion turnosTirar, para ir definiendo los turnos
function turnosTirar(){

    //Como ya tenemos declarada una variable para los turnos, hacemos que por cada llamada que reciba esta funcion se incremente el valor en 1
    turnos++;

    //Comprobamos que el valor de los turnos no sea mayor que el numero de jugadores, y si lo es, reincializamos el valor de los turnos (ERROR -> funciona correctamente excpeto que al llegar al utlimo turno hay que pulsar dos veces el boton para que se reinicie)
    if(turnos > arrayJug.length-1){

        turnos = -1;
        

    }else{

        //Restamos una ficha al jugador del turno que toque
        arrayJug[turnos].restarPuntos(1);

        document.getElementById("turnos").innerHTML = "Es el turno de " + arrayJug[turnos].getNombre();
        
    }

}


//Creamos la clase Casilla
class Casilla{

    fichas=0;
    maxFichas;

    constructor(maxFichas){
        this.fichas=0;
        this.maxFichas = maxFichas;
    }

    rellenarCasilla(){
        this.fichas++;
    }

    getFichas(){
        return this.fichas;
    }

    getMaxFichas(){
        return this.maxFichas;
    }

    setFichas(fichas){
        this.fichas = fichas;
    }
 
}

//Instanciamos una clase Casilla por cada casilla del tablero
var casilla2= new Casilla(2);
var casilla3= new Casilla(3);
var casilla4= new Casilla(4);
var casilla5= new Casilla(5);
var casilla6= new Casilla(6);
var casilla8= new Casilla(8);
var casilla7= new Casilla(7);
var casilla9= new Casilla(9);
var casilla10= new Casilla(10);
var casilla11= new Casilla(11);

var i=0,j=0,l=0,x=0,z=0,a=0,c=0,f=0,q=0, m=0;

//Funcion principal dentro de todo el juego, es la funcion que maneja las tiradas, llama a la funcion de los turnos, pinta las casillas, las resetea, suma los puntos en caso de que sea necesario y por ultimo se encarga de mantener actualizados los marcadores de puntos
function Tirada(){

    var dado1,dado2,suma, max=7, min=1;

    dado1=Math.floor(Math.random()*(max - min) + min);
    dado2=Math.floor(Math.random()*(max - min) + min);
    suma=dado1+dado2;

    //Imprimimos los dados en el documento html
    document.getElementById("dado1").innerHTML = dado1;
    document.getElementById("dado2").innerHTML = dado2;

    //LLamamos a la funcion de los turnos para ir estableciendo los turnos
    turnosTirar();

    //Pintar las casillas y sumar puntos si se llenan las casillas
    switch(suma){
        case 2:
            casilla2.rellenarCasilla();
            if(i<=casilla2.getMaxFichas()){
                pintarCasilla(canvases[suma-2],suma,i+1);
                i++;
            }
           if(casilla2.getFichas()==2){
                alert("casilla "+suma+" llena se borraran las fichas y se entregaran al " + arrayJug[turnos].getNombre());
                pintarCasilla(canvases[suma-2],suma,0);
                i=0;
                casilla2.setFichas(0);
                arrayJug[turnos].sumarPuntos(2);
            }
            break;
        case 3:
            casilla3.rellenarCasilla();
            if(j<=casilla3.getMaxFichas()){
                pintarCasilla(canvases[suma-2],suma,j+1);
                j++;
            }
           if(casilla3.getFichas()==3){
                alert("casilla "+suma+" llena se borraran las fichas y se entregaran al " + arrayJug[turnos].getNombre());
                pintarCasilla(canvases[suma-2],suma,0);
                j=0;
                casilla3.setFichas(0);
                arrayJug[turnos].sumarPuntos(3);
           }
            break;

        case 4:
            casilla4.rellenarCasilla();
            if(l<=casilla4.getMaxFichas()){
                pintarCasilla(canvases[suma-2],suma,l+1);
                l++;
            }
           if(casilla4.getFichas()==4){
                alert("casilla "+suma+" llena se borraran las fichas y se entregaran al " + arrayJug[turnos].getNombre());
                pintarCasilla(canvases[suma-2],suma,0);
                l=0;
                casilla4.setFichas(0);
                arrayJug[turnos].sumarPuntos(4);
           }
            break;
        case 5:
            casilla5.rellenarCasilla();
            if(x<=casilla5.getMaxFichas()){
                pintarCasilla(canvases[suma-2],suma,x+1);
                x++;
            }
           if(casilla5.getFichas()==5){
                alert("casilla "+suma+" llena se borraran las fichas y se entregaran al " + arrayJug[turnos].getNombre());
                pintarCasilla(canvases[suma-2],suma,0);
                x=0;
                casilla5.setFichas(0);
                arrayJug[turnos].sumarPuntos(5);
           }
            break;
        case 6:
            casilla6.rellenarCasilla();
            if(z<=casilla6.getMaxFichas()){
                pintarCasilla(canvases[suma-2],suma,z+1);
                z++;
            }
           if(casilla6.getFichas()==6){
                alert("casilla "+suma+" llena se borraran las fichas y se entregaran al " + arrayJug[turnos].getNombre());
                pintarCasilla(canvases[suma-2],suma,0);
                z=0;
                casilla6.setFichas(0);
                arrayJug[turnos].sumarPuntos(6);
           }
            break;

        case 7:
            
            //Aqui se debe rellenar el puchero de en medio con sus respectivas fichas (ERROR -> sin implementar codigo);
            alert("Guardamos ficha en el puchero!");
            //pintarCasilla(canvases[],suma,m+1);
            m++;break;

        case 8:
            casilla8.rellenarCasilla();
            if(c<=casilla8.getMaxFichas()){
                pintarCasilla(canvases[suma-3],suma,c+1);
                c++;
            }
           if(casilla8.getFichas()==8){
                alert("casilla "+suma+" llena se borraran las fichas y se entregaran al " + arrayJug[turnos].getNombre());
                pintarCasilla(canvases[suma-3],suma,0);
                c=0;
                casilla8.setFichas(0);
                arrayJug[turnos].sumarPuntos(8);
           }
            break;

        case 9:
            casilla9.rellenarCasilla();
            if(a<=casilla9.getMaxFichas()){
                pintarCasilla(canvases[suma-3],suma,a+1);
                a++;
            }
           if(casilla9.getFichas()==9){
                alert("casilla "+suma+" llena se borraran las fichas y se entregaran al " + arrayJug[turnos].getNombre());
                pintarCasilla(canvases[suma-3],suma,0);
                a=0;
                casilla9.setFichas(0);
                arrayJug[turnos].sumarPuntos(9);
           }
            break;

        case 10:
            casilla10.rellenarCasilla();
            if(f<=casilla10.getMaxFichas()){
                pintarCasilla(canvases[suma-3],suma,f+1);
                a++;
            }
           if(casilla10.getFichas()==10){
                alert("casilla "+suma+" llena se borraran las fichas y se entregaran al " + arrayJug[turnos].getNombre());
                pintarCasilla(canvases[suma-3],suma,0);
                f=0;
                casilla10.setFichas(0);
                arrayJug[turnos].sumarPuntos(10);
           }
            break;

        case 11:
            casilla11.rellenarCasilla();
            if(q<=casilla11.getMaxFichas()){
                pintarCasilla(canvases[suma-3],suma,q+1);
                q++;
            }
           if(casilla11.getFichas()==11){
                alert("casilla "+suma+" llena se borraran las fichas y se entregaran al " + arrayJug[turnos].getNombre());
                pintarCasilla(canvases[suma-3],suma,0);
                q=0;
                casilla11.setFichas(0);
                arrayJug[turnos].sumarPuntos(11);
           }
            break;

        case 12:

            alert("¡Ha salido el 12! El jugador se lleva todos los puntos del tablero");

            let todosPuntos = casilla2.getFichas() + casilla3.getFichas() + casilla4.getFichas() + casilla5.getFichas() + casilla6.getFichas() + casilla8.getFichas() + casilla9.getFichas() + casilla10.getFichas() + casilla11.getFichas();

            arrayJug[turnos].sumarPuntos(todosPuntos);

            break;
    }

    //LLamamos al metodo para mostrar todos los puntos
    mostrarPuntos();
}

//Creamos un metodo que nos imprima en una lista todos los jugadores con sus respectivos puntos
function mostrarPuntos(){

    var puntos = arrayJug.map(function(jugador){

        return '<ul><li>' + jugador.getNombre() + " tiene " + jugador.getPuntos()+ " puntos" + '</li></ul>';

    });

      document.getElementById("jugadores2").innerHTML = puntos;

}

