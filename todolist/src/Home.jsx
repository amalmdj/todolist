// "Home.jsx" est la partie principale de l'application React 
// qui gère l'affichage de la liste de tâches, leur modification et leur suppression. 
// Il interagit avec une API REST pour effectuer ces opérations


// Importation des modules et composants nécessaires depuis React et d'autres fichiers
import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';

// Définition du composant "Home"
function Home(){
    // Utilisation du hook "useState" pour gérer l'état local du composant
    const [todos, setTodos] = useState([])

    // Utilisation du hook "useEffect" pour effectuer des opérations asynchrones lorsque le composant est monté
    useEffect(() =>{
        // Appel à une API REST pour récupérer des données depuis un serveur local
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, [])

    // Fonction pour gérer la modification d'une tâche selon l'id (Marquer comme terminée)
    const handleEdit = (id) => {

        // Appel à une API REST pour mettre à jour une tâche spécifique
        axios.put('http://localhost:3001/update/'+id)
        .then(result => {

            // Rechargement de la page après la modification
            location.reload()
        })
        .catch(err => console.log(err))
    }

    // Fonction pour gérer la suppression d'une tâche
    const handleDelete = (id) => {

        // Appel à une API REST pour supprimer une tâche spécifique
        axios.delete('http://localhost:3001/delete/'+id)
        .then(result => {

            // Rechargement de la page après la suppression
            location.reload()
        })
        .catch(err => console.log(err))
    }


    // Rendu du composant "Home"
    return(
        <div className='home'>
            <h2>Todo List</h2>
            <Create />
            {
                todos.length === 0 ?
                <div><h2>Aucun record</h2></div>
                :
                todos.map(todo => (
                    <div className='task'>
                        <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                            {todo.done ? <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                            : <BsCircleFill className='icon'/>
                            }
                            
                            <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                        </div>
                        <div>
                            <span><BsFillTrashFill className='icon' 
                                onClick={() => handleDelete(todo._id)}/>
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

// Exportation du composant "Home" pour qu'il puisse être utilisé ailleurs dans l'application
export default Home