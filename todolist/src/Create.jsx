// "Create.jsx" définit le composant "Create" qui permet à l'utilisateur d'ajouter de nouvelles tâches à la liste. 
// L'état local est utilisé pour contrôler la valeur du champ de texte.
// Lorsque l'utilisateur clique sur le bouton "Ajouter", la tâche est envoyée au serveur via une requête HTTP POST
// puis la page est rechargée pour afficher la mise à jour de la liste des tâches



import React, { useState } from 'react'
import axios from 'axios'

function Create(){
    // Utilisation du hook "useState" pour gérer l'état local du composant, en particulier la tâche à créer
    const [task, setTask] = useState()

    // Fonction pour ajouter une nouvelle tâche
    const handleAdd = () => {

        // Appel à une API REST pour ajouter une nouvelle tâche en utilisant les données de l'état local
        axios.post('http://localhost:3001/add', {task: task})
        .then(result => {

            // Rechargement de la page après l'ajout de la tâche
            location.reload()
        })
        .catch(err => console.log(err))
    }

    // Rendu du composant "Create"
    return(
        <div className='create_form'>

            {/* Champ de texte pour entrer une nouvelle tâche. La valeur est contrôlée par l'état local */}
            <input type="text"  placeholder='Entrer une tache' onChange={(e) => setTask(e.target.value)}/>

            {/* Bouton pour ajouter la tâche, qui déclenche la fonction "handleAdd" lorsqu'il est cliqué */} 
            <button type="button" onClick={handleAdd}>Ajouter</button> 
        </div>
    )
}

// Exportation du composant "Create" pour qu'il puisse être utilisé ailleurs dans l'application
export default Create