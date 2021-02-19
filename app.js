

let name = ["ibm", "bmw", "apple"]
let tipo = [".com", ".net"]
let adj = ["great", "pretty", "wonderfull"]


function Generator(arrname, arrtipo, arradj) {
    let dominiosGenerados = [];
    //recorro el primer array name
    arrname.forEach((elementName) => {
        //recorro el segundo array tipo
        arrtipo.forEach((elementoTipo) => {
            arradj.forEach((elementadj) => {
                //concateno elementos
                let str = elementName + elementoTipo + elementadj;
                dominiosGenerados.push(str);//adiciono dominios a array
            })
        })
    })
    return dominiosGenerados;
}

console.log("Dominios-->", Generator(name, tipo, adj));
