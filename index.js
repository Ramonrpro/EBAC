function Bolo(nome,sabor, recheio, fatias) {
    this.nome = nome;
   this.sabor = sabor;
   this.recheio = recheio;
   let _fatias = fatias;

   //PEGAR QUNATIDADE DE PEDAÇOS
   this.getfatias = () => {
      return console.log(`O pedido do(a) ${nome} tem ${_fatias} fatias`);
   };
}
function Torta(nome,sabor, recheio, fatias) {
   Bolo.call(this,nome, sabor, recheio, fatias);
}

function Empadao(nome,sabor, recheio, fatias) {
   Bolo.call(this, nome,sabor, recheio, fatias);
}

const pedidoRamon = new Bolo("Ramon","Chocolate", "Maracuja", 15);

const pedidoIsabela = new Torta("Isabela","morango", "chocolate", 4);

const pedidoIsac = new Empadao("Isac","frango",'catupiri', 6);

console.log(pedidoRamon);
pedidoRamon.getfatias()
console.log('Instancia de Bolo:',pedidoRamon instanceof Bolo)

console.log(pedidoIsabela);
pedidoIsabela.getfatias()
console.log('Instancia de Torta:',pedidoIsabela instanceof Torta)

console.log(pedidoIsac);
pedidoIsac.getfatias()
console.log('Instancia de Empadao:',pedidoIsac instanceof Empadao)

