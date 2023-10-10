import React, { useState } from 'react'
import axios from 'axios'

function Create(){
    const [task, setTask] = useState()
    const handleAdd = () => {
        axios.post('http://localhost:3001/add', {task: task})
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }
    return(
        <div className='create_form'>
            <input type="text"  placeholder='Entrer une tache' onChange={(e) => setTask(e.target.value)}/> 
            <button type="button" onClick={handleAdd}>Ajouter</button> 
            {/* quand on click sur le noutton il fait appel a la fonction handleadd */}
        </div>
    )
}

export default Create