const payment = {
  "onPlace": "На месте",
  "cheboksary": "Чебоксары",
  "moscow": "Москва"
};
const level = {
  "null": "Нулевой",
  "beginer": "Начальный",
  "basic": "Базовый",
  "middle": "Средний",
  "high": "Высокий"
};
const residence = {
  "tent": "В палатке",
  "2floor": "2й этаж над столовой",
  "corp20": "Корпус №20",
  "zabava": "Домик Забава",
  "veranda": "На веранде (для организаторов)"
};
const duration = {
  "1": "1 день",
  "2": "2 дня",
  "3": "3 дня",
  "4": "4 дня",
  "5": "5 дней",
  "6": "6 дней",
  "7": "7 дней"
};
const job = {
  "student": "студент",
  "other": "прочие"
};

/**
 * sorts a array by key
 * @param {Array} items
 * @param {string} key
 * @param {string} direction
 */
module.exports = {
  sortArrayItems: (items, key, direction) => {
    if (direction === "ASC") {
      return items.sort((a, b) => {
        if (a[key] > b[key]) {
          return 1;
        }
        if (a[key] < b[key]) {
          return -1;
        }
        return 0;
      });
    } else {
      return items.sort((a, b) => {
        if (a[key] < b[key]) {
          return 1;
        }
        if (a[key] > b[key]) {
          return -1;
        }
        return 0;
      });
    }
  },
  prepareEmailText: data => {
    let text = "Новая заявка на участие в летнем лагере Хавал!\n\n";
    text =
      text +
      "Имя: " +
      data.lastName +
      " " +
      data.firstName +
      " (" +
      data.chuvashName +
      ")\n";
    text =
      text +
      "Пол: " +
      (data.sex === "male" ? "Муж" : "Жен") +
      ", ДР: " +
      data.birthdate +
      "\n";
    text =
      text +
      "Тел.: " +
      data.phone +
      ", E-mail: " +
      data.email +
      ", Профиль соц.сети: " +
      data.social +
      "\n";
    text = text + "Город: " + data.city + ", Страна: " + data.country + "\n";
    text = text + "Уровень языка: " + level[data.level] + "\n";
    text =
      text +
      "Проживание: " +
      residence[data.residence] +
      (data.room ? ", Комната/место: " + data.room : "") +
      "\n";
    text =
      text + "Продолжительность участия: " + duration[data.duration] + "\n";
    text =
      text +
      "Питание: " +
      (data.food !== "vegetarian" ? "Всеядный" : "Вегетарианец") +
      "\n";
    text =
      text +
      "Оплата: " +
      payment[data.payment] +
      (data.job ? ", Статус: " + job[data.job] : "") +
      "\n";
    return text;
  },
  prepareRegistrationList: data => {
    let text = "Имя;Пол;Дата рождения;Телефон;Email;Соцсеть;Город;Страна;Уровень языка;Проживание;Комната;Продолжительность;Питание;Оплата;Статус\n";
    data.forEach(item => {
      text = text + item.data.lastName + " " + item.data.firstName + " (" + item.data.chuvashName + ");";
      text = text + (item.data.sex === "male" ? "Муж" : "Жен") + ";";
      text = text + item.data.birthdate + ";";
      text = text + item.data.phone + ";";
      text = text + item.data.email + ";";
      text = text + item.data.social + ";";
      text = text + item.data.city + ";";
      text = text + item.data.country + ";";
      text = text + level[item.data.level] + ";";
      text = text + residence[item.data.residence] + ";";
      text = text + (item.data.room ? item.data.room : "") + ";";
      text = text + duration[item.data.duration] + ";";
      text = text + (item.data.food !== "vegetarian" ? "Всеядный" : "Вегетарианец") + ";";
      text = text + payment[item.data.payment] + ";";
      text = text + (item.data.job ? job[item.data.job] : "") + ";\n";
    });
    return text;
  }
};
