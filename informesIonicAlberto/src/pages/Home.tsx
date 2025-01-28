import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useEffect, useState } from 'react';
import { Alumno } from '../interfaces/types';




const Home: React.FC = () => {

  const [data, setData] = useState<Alumno[]>([]);
  
  const fetchAlumnos = async () => {
    try {
      const response = await fetch("https://localhost:3002/api/alumnos");
      const data = await response.json();
  
      setData(data);
    } catch (err) {
      console.log("Error al en la peticion", err);
    }
  };
  
  useEffect(() => {
    fetchAlumnos();
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer alumnos={data} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
