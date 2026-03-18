const fruits = [
    {id:1,nome:"Morango", cor:"vermelho"},
    {id:2,nome:"Banana", cor: "Amarelo"},
    {id:3,nome:"cereja", cor:"Vermelho"},
    {id:4,nome:"abacaxi", cor:"Amarelo"},

    
];

class fruitService{
    getAll() {
        return fruits;
    }
}

export const fruitservice = new fruitService()