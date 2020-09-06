import './assets/styles/main.scss';

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

function showValue(value) {
  return value || 'Value is missing!';
}

function showUsers(usersToShow) {
  let counter = 0;

  usersToShow.forEach((user) => {
    const {
      active,
      contact,
      createdAt,
      name,
    } = user;
    const number = contact?.phoneNumber || 'no phone number';

    const newTr = document.createElement('TR');
    newTr.insertAdjacentHTML('afterbegin', `
      <td>${counter += 1}</td>
      <td>${showValue(name)}</td>
      <td>${showValue(number)}</td>
      <td>${(active) ? 'active' : 'inactive'}</td>
      <td>${showValue(createdAt)}</td>
    `);
    tBody.append(newTr);
  });
}

// Функция filterUsers выбирает всех пользователей
// у которых хотя бы часть имени совпадает с инпутом.
function filterUsers(usersToFilter, entry) {
  const filteredUsers = usersToFilter.filter((user) => {
    const entryParts = entry.toLowerCase().trim().split(' ');
    const nameParts = user.name.toLowerCase().trim().split(' ');

    const DoesSomeEntryMatch = entryParts.every((entryPart) => {
      const DoesSomeEntryPartMatch = nameParts.some((namePart) => namePart.startsWith(entryPart));
      return DoesSomeEntryPartMatch;
    });
    return DoesSomeEntryMatch;
  });
  return filteredUsers;
}

showUsers(users);

input.addEventListener('input', (e) => {
  const entry = e.target.value;
  const filteredUsers = filterUsers(users, entry);

  tBody.innerHTML = '';
  showUsers(filteredUsers);
});
