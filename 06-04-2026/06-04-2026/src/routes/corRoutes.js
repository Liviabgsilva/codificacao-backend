import express from 'express'
import { corService } from '../services/cor.service.js'

const route = express.Router()

// GET: Listar todas
route.get("/", (req, res) => {
    const data = corService.getAll()
    res.json(data)
})

// POST: Criar nova
route.post("/", (req, res) => {
    const { nome } = req.body
    if (!nome) {
        return res.status(400).json({ message: "O nome da cor é obrigatório" })
    }
    const newCor = corService.create(nome)
    res.status(201).json(newFruit)
})

// GET: Buscar por ID
route.get("/:id", (req, res) => {
    const { id } = req.params
    const cor = corService.getById(id)
    if (!cor) return res.status(404).json({ message: "Cor não encontrada" })
    res.json(cor)
})

// PUT: Atualizar fruta existente
route.put("/:id", (req, res) => {
    const { id } = req.params
    const { nome } = req.body
    
    if (!nome) return res.status(400).json({ message: "O nome é obrigatório" })
    
    const updatedCor = corService.update(id, nome)
    if (!updatedCor) return res.status(404).json({ message: "Cor não encontrada" })
    
    res.json(updatedCor)
})

// DELETE: Remover fruta
route.delete("/:id", (req, res) => {
    const { id } = req.params
    const deletedCor = corService.delete(id)
    
    if (!deletedCor) return res.status(404).json({ message: "cor não encontrada" })
    
    res.json({ message: `Cor '${deletedCor.nome}' deletada com sucesso` })
})

export default route