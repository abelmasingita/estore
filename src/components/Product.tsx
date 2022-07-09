import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
} from '@ionic/react'
import React from 'react'
import ProductProps from '../interfaces/Product'
import './Product.css'
import Rating from './Rating'

const Product: React.FC<ProductProps> = ({
  name,
  price,
  image,
  numReviews,
  rating,
}) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonImg src={image} />
      </IonCardHeader>

      <IonCardContent>
        <IonCardSubtitle>{name}</IonCardSubtitle>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <IonCardTitle className='toolbar-title-md'>R{price}</IonCardTitle>
          <IonCardTitle>
            <Rating numReviews={numReviews} rating={rating} color='yellow' />
          </IonCardTitle>
        </div>
      </IonCardContent>
    </IonCard>
  )
}

export default Product
