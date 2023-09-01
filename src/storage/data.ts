import { ImageSourcePropType } from 'react-native'

// Tradicionais
import ExpressoAmericano from '@/assets/coffees/expresso-americano.png'
import ExpressoCremoso from '@/assets/coffees/expresso-cremoso.png'
import ExpressoGelado from '@/assets/coffees/expresso-gelado.png'
import ExpressoTradicional from '@/assets/coffees/expresso.png'
import Latte from '@/assets/coffees/latte.png'

// Doces
import Capuccino from '@/assets/coffees/capuccino.png'
import ChocolateQuente from '@/assets/coffees/chocolate-quente.png'
import Mocaccino from '@/assets/coffees/mochaccino.png'

// Especiais
import Arabe from '@/assets/coffees/arabe.png'
import Cubano from '@/assets/coffees/cubano.png'
import Havaiano from '@/assets/coffees/havaiano.png'
import Irlandes from '@/assets/coffees/irlandes.png'

export const coffeeCard = [
  {
    id: 1,
    tag: 'tradicional',
    name: 'Latte',
    description: 'Café expresso com o dobro de leite e espuma cremosa.',
    price: 9.9,
    image: Latte as ImageSourcePropType
  },
  {
    id: 2,
    tag: 'Doce',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma.',
    price: 9.9,
    image: Mocaccino as ImageSourcePropType
  },
  {
    id: 3,
    tag: 'Especial',
    name: 'Irlandês',
    description: 'Bebida a base de café, úisque irlandês, açúcar e chantily.',
    price: 9.9,
    image: Irlandes as ImageSourcePropType
  }
]

export const coffeeList = [
  {
    title: 'Tradicionais',
    data: [
      {
        id: 1,
        type: 1,
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos.',
        price: 9.9,
        image: ExpressoTradicional as ImageSourcePropType
      },
      {
        id: 2,
        type: 1,
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional.',
        price: 9.9,
        image: ExpressoAmericano as ImageSourcePropType
      },
      {
        id: 3,
        type: 1,
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa.',
        price: 9.9,
        image: ExpressoCremoso as ImageSourcePropType
      },
      {
        id: 4,
        type: 1,
        name: 'Latte',
        description: 'Café expresso com o dobro de leite e espuma cremosa.',
        price: 9.9,
        image: Latte as ImageSourcePropType
      },
      {
        id: 5,
        type: 1,
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo.',
        price: 9.9,
        image: ExpressoGelado as ImageSourcePropType
      }
    ]
  },

  {
    title: 'Doces',
    data: [
      {
        id: 6,
        type: 2,
        name: 'Capuccino',
        description:
          'Bebida com canela feita de doses de café, leite e espuma.',
        price: 9.9,
        image: Capuccino as ImageSourcePropType
      },
      {
        id: 7,
        type: 2,
        name: 'Mocaccino',
        description:
          'Café expresso com calda de chocolate, pouco leite e espuma.',
        price: 9.9,
        image: Mocaccino as ImageSourcePropType
      },
      {
        id: 8,
        type: 2,
        name: 'Chocolate Quente',
        description:
          'Bebida feita com chocolate dissolvido no leite quente e café.',
        price: 9.9,
        image: ChocolateQuente as ImageSourcePropType
      }
    ]
  },

  {
    title: 'Especiais',
    data: [
      {
        id: 9,
        type: 3,
        name: 'Cubano',
        description:
          'Drink gelado de café expresso com rum, creme de leite e hortelã.',
        price: 9.9,
        image: Cubano as ImageSourcePropType
      },
      {
        id: 10,
        type: 3,
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco.',
        price: 9.9,
        image: Havaiano as ImageSourcePropType
      },
      {
        id: 11,
        type: 3,
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias.',
        price: 9.9,
        image: Arabe as ImageSourcePropType
      },
      {
        id: 12,
        type: 3,
        name: 'Irlandês',
        description:
          'Bebida a base de café, uísque irlandês, açúcar e chantilly.',
        price: 9.9,
        image: Irlandes as ImageSourcePropType
      }
    ]
  }
]
