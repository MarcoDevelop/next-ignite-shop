import { useRouter } from 'next/router'
import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'

export default function Product(){
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>
        
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nemo itaque dolorum obcaecati sit sed, libero, iste dolores totam id fugiat aspernatur asperiores, perferendis inventore nobis ut veritatis beatae earum!</p>
      
        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}