const fruits = [
    {id:1,nome:"Amarelo", cor:"vermelho"},
    {id:2,nome:"Laranja", cor: "Amarelo"},
    {id:3,nome:"Vinho", cor:"Vermelho"},
    {id:4,nome:"Azul", cor:"Amarelo"},

    
];

class fruitService{
    getAll() {
        return fruits;
    }
}

export const fruitservice = new fruitService()