import React from "react";
import { Alert, Card, Col, Row, Table } from "antd";
import { columns } from "./columns";
import { dataSource } from "./dataSource";

export const Information = () => {
  return (
    <div>
      <h3>Друзья,</h3>
      <p>
        Девятый лагерь чувашского языка "Хавал" в этом году пройдет с 8-го по 15
        июля 2018 г. на той же базе как и в предыдущие годы: б/о «Сурские Зори».
        Основная цель нашего лагеря - создать традицию ежегодных встреч, в
        которых можно будет интенсивно изучать чувашский язык, окунуться в
        языковую среду, а также познакомиться с культурой, историей, традициями
        народа через лекции, круглые столы, тренинги, занятия и совместный
        здоровый отдых. Наконец, мы надеемся, что лагерь «Хавал» поможет вам не
        потерять связь с национальной средой, завести новых друзей, а также
        принять участие в общем деле развития чувашской идентичности, языка и
        культуры через различные проекты, инициируемые «Хавал».
      </p>
      <h3>В программе следующие мероприятия:</h3>
      <p>
        <b>
          Уроки чувашского языка трех уровней, включая занятия для подростков.
        </b>{" "}
        Уроки будут проводиться опытными преподавателями на основе современных
        коммуникативных и грамматических методик; Уроки чувашского языке для
        детей дошкольного и младшего школьного возраста; <b>Лекции</b> на
        высоком уровне специалистов в разных областях, затрагивающие темы с
        национальной проблематикой; <b>Мастер-классы.</b> В рамках лагеря
        пройдут мастер-классы по национальной вышивке, чувашским песням,
        чувашским народным танцам, и др. <b>Спортивные мероприятия.</b> В рамках
        лагеря у нас будет возможность поиграть в футбол, волейбол, покупаться в
        Суре; В вечерней программе планируются{" "}
        <b>концерты, совместные театральные постановки и многое другое.</b> И
        это, конечно, далеко не все мероприятия, в которых вы сможете принять
        участие, став участником лагеря ХАВАЛ 2017. Анонсы отдельных мероприятий
        будут периодически представляться на сайте и социальных сетях.
      </p>
      <h3>Участие:</h3>
      <p>
        Участие в лагере – платное и состоит из 4 основных частей (оргвзнос,
        проживание, питание, языковой взнос).
      </p>
      <h3>1. Организационный взнос</h3>
      <p>
        Обязательный организационный взнос оплачивается заранее, на полный
        период с 8-го по 15-ое июля.
      </p>
      <Table columns={columns} dataSource={dataSource} pagination={false} size="small" />
      <p>
        Для участников, которые приезжают на период меньший, чем 1 неделя
        организационный взнос исчисляется следующим образом: за первый день
        участия сумма 1-го периода + 50% от этой суммы за каждый последующий
        день (например, для ребенка приехавшего на 3 дня, сумма будет равна 300
        + 100 + 100 = 500 рублей, для студента приехавшего на 4 дня, сумма будет
        равна 500 + 250 + 250 + 250 = 1250 руб).
      </p>
      <Alert
        message="ВНИМАНИЕ в случае, если участник по каким-либо причинам не приезжает в лагерь, организационный взнос НЕ возвращается! (тогда как другие взносы (за питание, проживание) возвращаются)."
        type="warning"
        showIcon
      />
      <p />
      <h3>Организационный взнос можно оплатить:</h3>
      <Row>
        <Col xs={24} sm={12} md={10} lg={8}>
          <Card style={{ width: '250px', marginBottom: '1em' }}>
            <p>
              <b>Чебоксары:</b>
            </p>
            <p>Алпарух (Блинов Александр) 89023285051</p>
            <p>
              <a href="https://vk.com/alparuh">vk.com</a>{" "}
              <a href="https://www.facebook.com/al.blinov">fb.com</a>
            </p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={4}>
          <Card style={{ width: '250px' }}>
            <p>
              <b>Москва:</b>
            </p>
            <p>Салампи (Антонова Оксана) 89680799852</p>
            <p>
              <a href="https://vk.com/id124601891">vk.com</a>
            </p>
          </Card>
        </Col>
      </Row>
      <h3>2. Питание </h3>
      <p>
        480 рублей в сутки (которое включает завтрак, обед, ужин, а также чай,
        кофе на протяжение всего лагеря).<br />
        Для детей до 5 лет — питание бесплатное вместе с родителями.<br />
        Для детей до 12 лет - (20% скидка) — 384 рубля.
      </p>
      <h3>3. Проживание</h3>
      <p>Проживание также оплачивается посуточно и имеет разные категории:</p>
      <ol>
        <li>
          Палатка (своя) — 200 руб. за место. Душ и туалет (хорошие) находятся
          недалеко.
        </li>
        <li>2 этаж над столовой — 500 руб. за место. Туалет на этаже.</li>
        <li>20-ый корпус — 600 руб за место. Туалет на 3 комнаты.</li>
        <li>
          Забава (2-местные комнаты с туалетом) — 700 руб за место в сутки.
        </li>
      </ol>
      <p>Информацию по домикам можно будет получить здесь.</p>
      <h3>4. Языковой взнос.</h3>
      <p>
        Ставший уже традиционный и обязательный для каждого языковой взнос
        является возвращаемым при условии, когда участник сдаст экзамен, который
        по силам как знающему язык, так и начинающему изучать. В этом году будет
        письменный экзамен на знание слов и выражений чувашского языка.<br />
        Информация об этом появится позже.<br />
        Взнос равен — 300 рублям.<br />
        Взнос не платят только дети дошкольного возраста и гости лагеря.
      </p>
      <p>Подробную информацию Вы можете получить по телефону: +7 8352 685051</p>
    </div>
  );
};