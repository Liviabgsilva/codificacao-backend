// Mock de dados inicial
const cores = [
    { id: 1, nome: "Amarelo" },
    { id: 2, nome: "Laranja" }
]

class corService {
    // Retorna todas as frutas
    getAll() {
        return cores
    }

    // Busca uma fruta específica pelo ID
    getById(id) {
        return cores.find(c => c.id === parseInt(id))
    }

    // Cria uma nova fruta com ID incremental
    create(nome) {
        const newCores = {
            id: cores.length > 0 ? cores[cores.length - 1].id + 1 : 1,
            nome
        }
        cores.push(newFruit)
        return newCores
    }

    // Atualiza uma fruta existente (Método PUT)
    update(id, nome) {
        const index = cores.findIndex(f => f.id === parseInt(id))
        if (index !== -1) {
            cores[index] = { id: parseInt(id), nome }
            return cores[index]
        }
        return null
    }

    // Remove uma fruta do array (Método DELETE)
    delete(id) {
        const index = cores.findIndex(c => c.id === parseInt(id))
        if (index !== -1) {
            // Remove o item e retorna o objeto removido
            return cores.splice(index, 1)[0]
        }
        return null
    }
}

export const corService = new corService()