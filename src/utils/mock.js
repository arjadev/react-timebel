import { v4 as uuidv4 } from 'uuid';

export const PARTICIPANTS = [
  {
    id: uuidv4(),
    type: 'freelancer_basic',
    name: 'Ekaterina Tankova',
    image: '/static/users/1.png',
    subscriptions: '13,153',
    currency: '$',
    price: '5.00',
    progress: 93
  },
  {
    id: uuidv4(),
    type: 'freelancer_extra',
    name: 'Cao Yu',
    image: '/static/users/2.jpg',
    subscriptions: '10,300',
    currency: '$',
    price: '15.00',
    progress: 76
  },
  {
    id: uuidv4(),
    type: 'agency_basic',
    name: 'Alex Richardson',
    image: '/static/users/3.png',
    subscriptions: '5,300',
    currency: '$',
    price: '25.00',
    progress: 60
  },
  {
    id: uuidv4(),
    type: 'enterprise_basic',
    name: 'Anje Keizer',
    image: '/static/users/4.jpg',
    subscriptions: '1,203',
    currency: '$',
    price: '205.00',
    progress: 46
  },
  {
    id: uuidv4(),
    type: 'enterprise_extra',
    name: 'Katarina Smith',
    image: '/static/users/5.jpg',
    subscriptions: '254',
    currency: '$',
    price: '500.00',
    progress: 41
  }
]