export const columns = [
  {
    title: "№",
    dataIndex: "rowNum",
    key: "rowNum",
    sorter: (a, b) => {
      if (a['rowNum'] < b['rowNum']) return -1;
      if (a['rowNum'] > b['rowNum']) return 1;
    },
  },
  {
    title: "Фамилия Имя",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => {
      if (a['name'] < b['name']) return -1;
      if (a['name'] > b['name']) return 1;
    },
  },
  {
    title: "Возраст",
    dataIndex: "age",
    key: "age",
    sorter: (a, b) => {
      if (a['age'] < b['age']) return -1;
      if (a['age'] > b['age']) return 1;
    },
  },
  {
    title: "Город",
    dataIndex: "city",
    key: "city",
    sorter: (a, b) => {
      if (a['city'] < b['city']) return -1;
      if (a['city'] > b['city']) return 1;
    },
  },
  {
    title: "Продолжительность",
    dataIndex: "duration",
    key: "duration",
    sorter: (a, b) => {
      if (a['duration'] < b['duration']) return -1;
      if (a['duration'] > b['duration']) return 1;
    },
  },
  {
    title: "Дата регистрации",
    dataIndex: "date",
    key: "date",
    sorter: (a, b) => {
      if (a['date'] < b['date']) return -1;
      if (a['date'] > b['date']) return 1;
    },
  }
];
