import './App.css';
import avatarImg from "./assets/215.jpeg";

function App() {
  const information = {
    nomprenom: "Oswa Elkamel",
    email: "oswaelkamel00@gmail.com",
    tel: "+216 54571895",
    filiere: "Génie Logiciel et Système d'information",
    ann: "2",
    groupe: "GLSI 2",
    ville: "Mahdia",
    photo: avatarImg
  };

  const handleContact = () => {
    alert(`Contactez ${information.nomprenom} à ${information.email} ou ${information.tel}`);
  };

  return (
    <div>
      <img src={information.photo} alt={information.nomprenom} className='pho' />
      <h1>Fiche Étudiant</h1>
      <p>
        Nom & Prénom : {information.nomprenom} <br />
        Email : {information.email} <br />
        Téléphone : {information.tel} <br />
        Filière : {information.filiere} <br />
        Année d'étude : {information.ann} <br />
        Groupe : {information.groupe} <br />
        Ville : {information.ville}
      </p>
      <button onClick={handleContact} className='btn'>Contact</button>
    </div>
  );
}

export default App;