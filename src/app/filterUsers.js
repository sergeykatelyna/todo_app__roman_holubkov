// function getNameParts(str) {
//   return str.toLowerCase().trim().split(' ');
// }

// function getEntryParts(str) {
//   let newStr = str.toLowerCase();
//   newStr = str.replace(/^\s+/, '');
//   newStr = newStr.replace(/\s+$/, ' ');

//   return newStr.split(' ');
// }

function getStrParts(str) {
  const strArr = str.split(' ');
  return strArr.reduce((finalStrArr, strPart) => {
    if (strPart !== '') {
      finalStrArr.push(strPart.toLowerCase());
    }
    return finalStrArr;
  }, []);
}

// Функция filterUsers выбирает всех пользователей
// у которых хотя бы часть имени совпадает с инпутом.
function filterUsers(usersToFilter, entry) {
  const isLastCharNotSpace = !/\s$/.test(entry);

  const filteredUsers = usersToFilter.filter((user) => {
    const entryParts = getStrParts(entry);
    const nameParts = getStrParts(user.name);

    const isSomeEntryMatch = entryParts.every((entryPart, i) => {
      const isSomeEntryPartMatch = nameParts.some((namePart) => {
        if (i === entryParts.length - 1 && isLastCharNotSpace) {
          return namePart.startsWith(entryPart);
        }
        return namePart === entryPart;
      });

      return isSomeEntryPartMatch;
    });

    return isSomeEntryMatch;
  });

  return filteredUsers;
}

export default filterUsers;
