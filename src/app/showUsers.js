function getValueToShow(value) {
  return value || 'Value is missing!';
}

function createTdTag(userAttr) {
  const newTd = document.createElement('TD');
  newTd.textContent = getValueToShow(userAttr);

  return newTd;
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

function showUsers(usersArr, outputTag) {
  let counter = 0;

  usersArr.forEach((user) => {
    counter += 1;

    const newTr = createTrTag(user, counter);

    outputTag.append(newTr);
  });
}

export default showUsers;
