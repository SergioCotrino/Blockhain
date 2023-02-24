const SHA256 =require('crypto-js/sha256')

class Block{
    constructor(timestamp, data, hashPrevio=''){
        this.timestamp=timestamp
        this.data=data
        this.hashPrevio=hashPrevio
        this.hash=this.calcularHash()

    }

    calcularHash(){
        return SHA256(this.timestamp + this.hashPrevio + JSON.stringify(this.data)).toString()
    }
}

class Blockhain{
    constructor(){
        this.chain=[this.crearBloqueGenesis()]
    }

    crearBloqueGenesis(){
        return new Block('21/02/2023','Bloque genesis','0')
    }

    getUltimoBloque(){
        return this.chain[this.chain.length-1]
    }

    agregarBloque(nuevoBloque){
        nuevoBloque.hashPrevio=this.getUltimoBloque().hash
        nuevoBloque.hash=nuevoBloque.calcularHash()
        this.chain.push(nuevoBloque)
    }
}

let CriptoJuanDeCastellanos = new Blockhain()
CriptoJuanDeCastellanos.agregarBloque(new Block('22/02/2023', {cantidad:20}))
CriptoJuanDeCastellanos.agregarBloque(new Block('23/02/2023', {cantidad:30}))

console.log(JSON.stringify(CriptoJuanDeCastellanos, null, 4))