// Importation du hook "useState" depuis React, qui permet de gérer l'état local dans un composant fonctionnel  
import { useState } from 'react'

// Importation de la feuille de style CSS associée au composant
import './App.css'

// Importation du composant "Home" depuis le fichier "Home.jsx"
import Home from './Home'

// Définition du composant principal "App"
function App() {

  return (
    // Rendu du composant principal "App", qui englobe le composant "Home".
    <div>
     <Home />
    </div>
  )
}

// Exportation du composant "App" pour qu'il puisse être utilisé ailleurs dans l'application
export default App
