/* eslint-disable no-plusplus */

const SourceData = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];

const myKeys = ['id', 'title', 'year', 'imdb'];
const sortKeys = [1, -1];
let appIndex = 0;

function* paramGenerator() {
  if (appIndex >= 8) { appIndex = 0; }
  yield appIndex++;
}

/*
* Сортировка массива data
* num_column - номер колонки (от 0)
* SortOrder - порядок сортировки. 1 - возр, -1 - убыв.
*/
function SortSourceData(data, key, SortOrder) {
  data.sort((a, b) => {
    const x = a[key];
    const y = b[key];
    if (SortOrder === 1) {
      return (x >= y) ? 1 : -1;
    }
    return (x >= y) ? -1 : 1;
  });
}

/*
* Отрисовка таблицы
* data - массив с данными
* id - ID родительского элемента (перед отрисовкой в нем затирается содержимое)
*/
function RenderTable(data, id) {
  const AutoAddChild = (node, typ) => {
    const newElement = document.createElement(typ);
    node.appendChild(newElement);
    return newElement;
  };
  const parentElement = document.getElementById(id);
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
  const myTable = AutoAddChild(parentElement, 'table');
  const myThead = AutoAddChild(myTable, 'thead');
  const MyTheadTr = AutoAddChild(myThead, 'tr');
  for (const key of myKeys) {
    const td = AutoAddChild(MyTheadTr, 'td');
    td.innerHTML = key;
  }
  const myTbody = AutoAddChild(myTable, 'tbody');
  for (const row of data) {
    const MytTbodyTr = AutoAddChild(myTbody, 'tr');
    for (const key of myKeys) {
      const td = AutoAddChild(MytTbodyTr, 'td');
      td.innerHTML = row[key];
    }
  }
}

function doAction() {
  const nextVal = paramGenerator().next().value;
  // console.log(nextVal);
  const tebIndex = Math.floor(nextVal / 2);
  const sortIndex = nextVal % 2;
  const tableKey = myKeys[tebIndex];
  const sortKey = sortKeys[sortIndex];
  SortSourceData(SourceData, tableKey, sortKey);
  const taskinfo = document.getElementById('taskinfo');
  taskinfo.innerText = `Sort by "${tableKey}" ${(sortKey === 1) ? 'asc' : 'desc'}`;
  RenderTable(SourceData, 'workplace');
}

document.addEventListener('DOMContentLoaded', () => {
  setInterval(() => { doAction(SourceData, myKeys); }, 2000);
  // eslint-disable-next-line no-console
  console.log('it works!');
});
