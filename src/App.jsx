import StudentCard from './StudentCard.jsx'
import abderrahmenImage from './studentcard_file/004-user.png'
import amiraImage from './studentcard_file/001-woman.png'
import inesImage from './studentcard_file/001-woman.png'
import youssefImage from './studentcard_file/003-office-man.png'

const etudiants = [
  {
    nom: 'Abderrahmen Essefi',
    em: 'abderrahmen.essefi@example.test',
    tel: '20136458',
    sec: '2 GLSI',
    image: abderrahmenImage,
  },
  {
    nom: 'Amira Ben Salem',
    em: 'amira.bensalem@example.test',
    tel: '00000001',
    sec: '1 GLSI',
    image: amiraImage,
  },
  {
    nom: 'Youssef Trabelsi',
    em: 'youssef.trabelsi@example.test',
    tel: '00000002',
    sec: '3 GLSI',
    image: youssefImage,
  },
  {
    nom: 'Ines Gharbi',
    em: 'ines.gharbi@example.test',
    tel: '00000003',
    sec: '2 Réseaux',
    image: inesImage,
  },
]

function App() {
  return (
    <>
      <header>
        <h1 className="students-page-title">Liste des étudiants</h1>
      </header>
      {etudiants.map((etudiant) => (
        <StudentCard
          key={etudiant.em}
          nom={etudiant.nom}
          em={etudiant.em}
          tel={etudiant.tel}
          sec={etudiant.sec}
          image={etudiant.image}
        />
      ))}
    </>
  )
}

export default App
