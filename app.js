


let adj = ["great", "pretty", "wonderfull"]
let name = ["ibm", "bmw", "apple"]
let tipo = [".com", ".net", "io"]


function Generator(arradj, arrname, arrtipo, ) {
    let dominiosGenerados = [];
    //recorro el primer array name
    arradj.forEach((elementadj) => {
        //recorro el segundo array tipo
        arrname.forEach((elementName) => {
            //recorro el segundo array tipo
            arrtipo.forEach((elementoTipo) => {
                //concateno elementos
                let str = elementadj + elementName + elementoTipo;
                dominiosGenerados.push(str);//adiciono dominios a array
            })
        })
    })
    return dominiosGenerados;
}

console.log("Dominios-->", Generator(adj, name, tipo));


