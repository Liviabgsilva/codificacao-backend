
const frutas = [
  { id: 1, nome: "Morango", preco: 5 },
  { id: 2, nome: "Uva", preco: 3 }
];

class FruitService {
  getAll() {
    return frutas;
  }

  getById(id) {
   
    return frutas.find(f => f.id === Number(id));
  }


  create(dados) {
    const novoId = frutas.length > 0 ? Math.max(...frutas.map(f => f.id)) + 1 : 1;
    
   
    const novaFruta = { 
        id: novoId, 
        nome: dados.nome, 
        preco: dados.preco || 0 
    };
    
    frutas.push(novaFruta);
    return novaFruta;
  }

  atualizarFruta(id, novaFruta) {
    const index = frutas.findIndex(f => f.id === Number(id));
    if (index === -1) return null;

 
    frutas[index] = { ...novaFruta, id: Number(id) };
    return frutas[index];
  }

  atualizarParcial(id, dados) {
    const fruta = frutas.find(f => f.id === Number(id));
    if (!fruta) return null;

   
    Object.assign(fruta, dados);
    return fruta;
  }

  deletarFruta(id) {
    const index = frutas.findIndex(f => f.id === Number(id));
    if (index === -1) return null;
    
    const removida = frutas.splice(index, 1)[0];
    return removida;
  }
}

export const fruitService = new FruitService();