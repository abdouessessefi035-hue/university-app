import './App.css';

function StudentCard(props) {
    return (
      <article className="student-card">
        <div className="student-card__image">
          <img src={props.image} alt={`Portrait de ${props.nom}`} />
        </div>
        <div className="student-card__details">
          <h1>Fiche Etudiant</h1>
          <p><strong>Nom :</strong> {props.nom}</p>
          <p><strong>Email :</strong> {props.em}</p>
          <p><strong>Téléphone :</strong> {props.tel}</p>
          <p><strong>Section :</strong> {props.sec}</p>
        </div>
        <button>Contacter</button>
      </article>
    );
}
export default StudentCard;
