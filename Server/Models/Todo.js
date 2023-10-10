// "Todo.js" définit la structure des données pour les tâches dans MongoDB. 
// Chaque tâche a un champ "task" pour stocker sa description et un champ "done" pour indiquer si la tâche est terminée ou non. 
// Le modèle de données est créé avec le nom "todos" et exporté pour être utilisé ailleurs dans l'application
// notamment dans les opérations CRUD définies dans "Home.js"


// Importation du module Mongoose
const mongoose = require('mongoose')

// Définition du schéma de données pour les tâches
const TodoSchema = new mongoose.Schema({

    // Champ "task" pour stocker la description de la tâche (de type chaîne de caractères)
    task: String,

    // Champ "done" pour indiquer si la tâche est terminée (de type booléen, avec une valeur par défaut à "false")
    done: {
        type: Boolean,
        default: false
    }
})

// Création d'un modèle "TodoModel" en utilisant le schéma défini ci-dessus
const TodoModel = mongoose.model("todos", TodoSchema)

// Exportation du modèle "TodoModel" pour qu'il puisse être utilisé dans d'autres parties de l'application
module.exports = TodoModel