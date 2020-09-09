import './assets/styles/main.scss';
import showUsers from './showUsers';
import filterUsers from './filterUsers';

const users = [
  {
    active: true,
    contact: {
      phoneNumber: '380506535249',
    },
    createdAt: '2020-08-28T11:33:14.237Z',
    id: '23cff83e-4ed4-43a5-ae63-a31310a1076a',
    name: 'Jack',
  },
  {
    active: true,
    contact: {
      phoneNumber: '380506535249',
    },
    createdAt: '2020-08-28T11:33:14.237Z',
    id: '23cff83e-4ed4-43a5-ae63-a31310a1076a',
    name: 'Vladimir',
  },
  {
    active: true,
    contact: {
      phoneNumber: '380506535249',
    },
    createdAt: '2020-08-28T11:33:14.237Z',
    id: '23cff83e-4ed4-43a5-ae63-a31310a1076a',
    name: 'User1',
  },
  {
    active: true,
    contact: {
      phoneNumber: '380506535249',
    },
    createdAt: '2020-08-28T11:33:14.237Z',
    id: '23cff83e-4ed4-43a5-ae63-a31310a1076a',
    name: 'Sam',
  },
  {
    active: true,
    contact: {
      phoneNumber: '380506535249',
    },
    createdAt: '2020-08-28T11:33:14.237Z',
    id: '23cff83e-4ed4-43a5-ae63-a31310a1076a',
    name: 'User2',
  },
  {
    active: false,
    id: '12345',
    name: 'John Doe',
  },
  {
    active: true,
    id: '007',
    name: 'Frodo J. Baggins',
    contact: {
      phoneNumber: '+0987654321',
    },
  },
  {
    active: false,
    id: '00000',
    name: 'User Doe M.',
    contact: {
      phoneNumber: '+1234567890',
    },
  },
];

const tBody = document.getElementsByTagName('tbody')[0];
const input = document.querySelector('input.form-control');

showUsers(users, tBody);

input.addEventListener('input', (e) => {
  const entry = e.target.value;

  if (!entry.trim()) {
    showUsers(users, tBody);
  }

  const filteredUsers = filterUsers(users, entry);

  tBody.innerHTML = '';
  showUsers(filteredUsers, tBody);
});
