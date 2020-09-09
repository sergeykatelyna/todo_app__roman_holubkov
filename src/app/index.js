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

function getValueToShow(value) {
  return value || 'Value is missing!';
}

function createTdTag(val) {
  return `<td>${getValueToShow(val)}</td>`;
}

function createTrTag(user, counter) {
  const {
    active,
    contact,
    createdAt,
    name,
  } = user;
  const number = contact?.phoneNumber || 'no phone number';
  const activeStr = active ? 'active' : 'inactive';
  const newTr = document.createElement('TR');

  newTr.append(
    createTdTag(counter),
    createTdTag(name),
    createTdTag(number),
    createTdTag(activeStr),
    createTdTag(createdAt),
  );

  return newTr;
}

function showUsers(usersToShow) {
  let counter = 0;

  usersToShow.forEach((user) => {
    const newTr = createTrTag(user, counter);

    tBody.append(newTr);

    counter += 1;
  });
}

function getStrPartsArr(str) {
  return str.toLowerCase().trim().split(' ');
}

// Функция filterUsers выбирает всех пользователей
// у которых хотя бы часть имени совпадает с инпутом.
function filterUsers(usersToFilter, entry) {
  const filteredUsers = usersToFilter.filter((user) => {
    const entryParts = getStrPartsArr(entry);
    const nameParts = getStrPartsArr(user.name);

    const isSomeEntryMatch = entryParts.every((entryPart) => {
      const isSomeEntryPartMatch = nameParts.some((namePart) =>
        namePart.startsWith(entryPart)
      );
      return isSomeEntryPartMatch;
    });
    return isSomeEntryMatch;
  });
  return filteredUsers;
}

showUsers(users);

input.addEventListener('input', (e) => {
  const entry = e.target.value;
  if (!entry) {
    return;
  }

  const filteredUsers = filterUsers(users, entry);

  tBody.innerHTML = '';
  showUsers(filteredUsers);
});
