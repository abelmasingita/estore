import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonSearchbar,
  IonToolbar,
} from '@ionic/react'
import { cart, logoMastodon } from 'ionicons/icons'
import './Home.css'
import products from '../products'
import Product from '../components/Product'
import { useState } from 'react'

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState('')

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonButton>
              <IonIcon icon={logoMastodon} />
            </IonButton>
          </IonButtons>

          <IonButtons slot='secondary'>
            <IonButton>
              <IonSearchbar
                value={searchText}
                onIonChange={(e) => setSearchText(e.detail.value!)}
                spellCheck='true'
                type='search'
              ></IonSearchbar>
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
        <IonGrid>
          <IonRow>
            {products.map((product) => (
              <IonCol key={product._id} size='6'>
                <Product
                  name={product.name}
                  image={product.image}
                  brand={product.brand}
                  description={product.description}
                  category={product.category}
                  price={product.price}
                  countInStock={product.countInStock}
                  rating={product.rating}
                  numReviews={product.numReviews}
                />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Home
