const livros = require('./listralivros')

let maisbarato = 0;

for (let atual = 0;atual < livros.length; atual++){
    if(livros[atual] < livros[maisbarato].preco){
       maisbarato = atual;
    }
   //  console.log(livros[maisbarato].preco);
};

console.log(`O livro mais barato é ${livros[maisbarato].preco}eo nome titulo é${livros[maisbarato].titulo}`)