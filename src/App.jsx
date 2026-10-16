import './App.css'
import Image from './assets/a1.jpg'
const etd = {
  nom: 'abderrahmen Essefi',
  em: 'abderrahmenEssefi@gmail.com',
  tel: '20136458',
  sec: '2 GLSI',
}

function App() {
  return (
    <>
      <div className="img"><img src={Image} alt="" /> </div>
      <div>
        <h1>Fiche Etudiant</h1>
        <p><strong>Nom :</strong> {etd.nom}</p>
        <p><strong>Email :</strong> {etd.em}</p>
        <p><strong>Téléphone :</strong> {etd.tel}</p>
        <p><strong>Section :</strong> {etd.sec}</p>
    
      </div>
          <button>
          Contacter
        </button> 

      
    </>

  )
  
}

export default App
