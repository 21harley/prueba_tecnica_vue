///console.log("Init logica");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function leerEntrada(pregunta) {
    return new Promise(resolve => {
        rl.question(pregunta, respuesta => {
            resolve(respuesta);
        });
    });
}

async function main() {
    try {
        //Ingrese el tamaño de la lista
        const TmLista =  await leerEntrada('');

        //Ingrese los números separados por espacio
        const listaNumeros = await leerEntrada('');

        //Ingrese el número a consultar
        const numConsulta = await leerEntrada('');

        //Ingrese los números a consultar separados por espacio
        const listaNumConsulta = await leerEntrada('');
        
        const baseDatos = listaNumeros.split(' ').map(num => parseInt(num));
        const tmLista = parseInt(TmLista);

        const consulta = listaNumConsulta.split(' ').map(num => parseInt(num));
        const numCons = parseInt(numConsulta);

        if(tmLista !== baseDatos.length) {
            console.log("El tamaño de la lista no coincide con los números ingresados");
            return;
        }

        if(consulta.length !== numCons) {
            console.log("El número de consultas no coincide con los números ingresados");
            return;
        }

        for(let i = 0; i < numCons; i++) {
            const num = consulta[i];
            let nmba = -1; //numero mas bajo alto
            let nmab = 999999; //numero mas alto bajo

            for(let j = 0; j < baseDatos.length; j++) {

                if(baseDatos[j] < num && baseDatos[j] > nmba) nmba = baseDatos[j];
               
                else if(baseDatos[j] > num && baseDatos[j] < nmab)  nmab = baseDatos[j];
                
            }
            console.log(`${nmba == -1 ? 'X' : nmba} ${nmab == 999999 ? 'X' : nmab}`);
        }

    }catch(e) {
        console.log("Error al ingresar datos");
        //console.log("Error: ", e);
    }
     finally {
        rl.close();
    }
}

main();