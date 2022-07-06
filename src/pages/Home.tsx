import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { cart } from 'ionicons/icons'
import './Home.css'
import products from '../products'
import Product from '../components/Product'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonButton>
              <IonText className='ion-text-lowercase'>eStore</IonText>
            </IonButton>
          </IonButtons>
          <IonButtons slot='end'>
            <IonButton>
              <IonIcon icon={cart} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {products.map((product) => (
          <Product
            name={product.name}
            image={''}
            brand={''}
            description={''}
            category={''}
            price={0}
            countInStock={0}
            rating={0}
            numReviews={0}
          />
        ))}
      </IonContent>
    </IonPage>
  )
}

export default Home
