// On met en place un serveur Express qui offre des points de terminaison pour effectuer des opérations CRUD (Create, Read, Update, Delete) 
// sur une collection de tâches stockées dans une base de données MongoDB. 
// Il utilise le modèle TodoModel pour interagir avec la base de données et expose des routes pour gérer les tâches

// Importation des modules nécessaires
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo') // Importation du modèle de données Todo

// Création d'une instance d'Express
const app = express()
app.use(cors())
app.use(express.json())

// Connexion à la base de données MongoDB (local)
mongoose.connect('mongodb://127.0.0.1:27017/test')

// Définition des routes et des gestionnaires pour les opérations CRUD

// Route pour récupérer toutes les tâches (READ)
app.get('/get', (req, res) => {
    TodoModel.find() // Utilise le modèle TodoModel pour effectuer une recherche dans la base de données MongoDB
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

// Route pour mettre à jour une tâche spécifique (UPDATE)
app.put('/update/:id', (req,res) => {
    const {id} = req.params; // Récupération de l'ID de la tâche à mettre à jour
    TodoModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

// Route pour supprimer une tâche spécifique (DELETE)
app.delete('/delete/:id', (req, res) => {
    const {id} = req.params; // Récupération de l'ID de la tâche à supprimer
    TodoModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

// Route pour ajouter une nouvelle tâche (CREATE)
app.post('/add', (req, res) =>{
    const task = req.body.task; // Récupération de la description de la tâche à partir des données de la requête
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

// Démarrage du serveur sur le port 3001
app.listen(3001, () => {
    console.log("Server is Running")

})