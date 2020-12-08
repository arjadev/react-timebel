import { v4 as uuidv4 } from 'uuid';

export const PARTICIPANTS = [
  // {
  //   id: uuidv4(),
  //   watch: 'Apple Watch 5',
  //   name: 'Ekaterina Tankova',
  //   image: '/static/users/1.png',
  //   battery: 93,
  //   connected: 'online',
  // },
  {
    id: uuidv4(),
    watch: 'Fitbit versa2',
    name: 'Cao Yu',
    image: '/static/users/2.jpg',
    battery: 76,
    connected: 'online',
  },
  {
    id: uuidv4(),
    watch: 'Rythym+',
    name: 'Alex Richard',
    image: '/static/users/3.png',
    battery: 60,
    connected: 'away',
  },
  {
    id: uuidv4(),
    watch: 'Fossil5',
    name: 'Anje Keizer',
    image: '/static/users/4.jpg',
    battery: 46,
    connected: 'online',
  },
  {
    id: uuidv4(),
    watch: 'Scosche',
    name: 'Katarina Smith',
    image: '/static/users/5.jpg',
    battery: 41,
    connected: 'offline',
  }
]