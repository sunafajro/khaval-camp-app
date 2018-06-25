<?php

namespace app\models;

use Yii;
use yii\base\Model;

class Element extends Model {
    public static function getElements()
    {
        $items = [
            [
                "num" => 1,
                "name" => "lastNameEl",
                "label" => [
                    "cv" => "Фамилия",
                    "ru" => "Фамилия",
                    "en" => "Last Name"
                ],
                "items" => [],
                "type" => "input"
            ],
            [
                "num" => 2,
                "name" => "firstNameEl",
                "label" => [
                    "cv" => "Имя",
                    "ru" => "Имя",
                    "en" => "First Name"
                ],
                "items" => [],
                "type" => "input"
            ],
            [
                "num" => 2,
                "name" => "firstNameEl",
                "label" => [
                    "cv" => "Имя",
                    "ru" => "Имя",
                    "en" => "First Name"
                ],
                "items" => [],
                "type" => "input"
            ],
            [
                "num" => 4,
                "name" => "sexEl",
                "label" => [
                    "cv" => "Пол",
                    "ru" => "Пол",
                    "en" => "Sex"
                ],
                "items" => [
                    [
                        "value" => "male",
                        "label" => [
                            "cv" => "Мужской",
                            "ru" => "Мужской",
                            "en" => "Male"
                        ],
                        "colNum" => 2
                    ],
                    [
                        "value" => "female",
                        "label" => [
                            "cv" => "Мужской",
                            "ru" => "Женский",
                            "en" => "Female"
                        ],
                        "colNum" => 2
                    ]
                ],
                "type" => "radio"
            ],
            [
                "num" => 5,
                "name" => "birthdateEl",
                "label" => [
                    "cv" => "Дата рождения",
                    "ru" => "Дата рождения",
                    "en" => "Birthdate"
                ],
                "items" => [],
                "type" => "datepicker"
            ],
            [
                "num" => 6,
                "name" => "jobEl",
                "label" => [
                    "cv" => "Статус",
                    "ru" => "Статус",
                    "en" => "Status"
                ],
                "items" => [
                    [
                        "value" => "student",
                        "label" => [
                            "cv" => "Студент",
                            "ru" => "Студент",
                            "en" => "Student"
                        ],
                        "colNum" => 2
                    ],
                    [
                        "value" => "other",
                        "label" => [
                            "cv" => "Прочие",
                            "ru" => "Прочие",
                            "en" => "Others"
                        ],
                        "colNum" => 2
                    ],
                ],
                "type" => "radio"
            ],
            [
                "num" => 7,
                "name" => "phoneEl",
                "label" => [
                    "cv" => "Телефон",
                    "ru" => "Телефон",
                    "en" => "Phone"
                ],
                "items" => [],
                "type" => "input"
            ],
            [
                "num" => 8,
                "name" => "emailEl",
                "label" => [
                    "cv" => "Э-почта",
                    "ru" => "Э-почта",
                    "en" => "E-mail"
                ],
                "items" => [],
                "type" => "input"
            ],
            [
                "num" => 9,
                "name" => "socialEl",
                "label" => [
                    "cv" => "Профиль соц.сети",
                    "ru" => "Профиль соц.сети",
                    "en" => "Social link"
                ],
                "items" => [],
                "type" => "input"
            ],
            [
                "num" => 10,
                "name" => "cityEl",
                "label" => [
                    "cv" => "Город",
                    "ru" => "Город",
                    "en" => "City"
                ],
                "items" => [],
                "type" => "input"
            ],
            [
                "num" => 11,
                "name" => "countryEl",
                "label" => [
                    "cv" => "Страна",
                    "ru" => "Страна",
                    "en" => "Country"
                ],
                "items" => [],
                "type" => "input"
            ],
            [
                "num" => 12,
                "name" => "levelEl",
                "label" => [
                    "cv" => "Уровень языка",
                    "ru" => "Уровень языка",
                    "en" => "Language level"
                ],
                "items" => [
                    [
                        "value" => "null",
                        "label" => [
                            "cv" => "Нулевой",
                            "ru" => "Нулевой",
                            "en" => "NULL"
                        ]
                    ],
                    [
                        "value" => "beginer",
                        "label" => [
                            "cv" => "Начальный",
                            "ru" => "Начальный",
                            "en" => "Beginer"
                        ]
                    ],
                    [
                        "value" => "basic",
                        "label" => [
                            "cv" => "Базовый",
                            "ru" => "Базовый",
                            "en" => "Basic"
                        ]
                    ],
                    [
                        "value" => "middle",
                        "label" => [
                            "cv" => "Средний",
                            "ru" => "Средний",
                            "en" => "Middle"
                        ]
                    ],
                    [
                        "value" => "high",
                        "label" => [
                            "cv" => "Высокий",
                            "ru" => "Высокий",
                            "en" => "High"
                        ]
                    ]
                ],
                "type" => "select"
            ],
            [
                "num" => 13,
                "name" => "residenceEl",
                "label" => [
                    "cv" => "Проживание",
                    "ru" => "Проживание",
                    "en" => "Residence"
                ],
                "items" => [
                    [
                        "value" => "tent",
                        "label" => [
                            "cv" => "Своя палатка",
                            "ru" => "Своя палатка",
                            "en" => "Own tent"
                        ]
                    ], [
                        "value" => "2floor",
                        "label" => [
                            "cv" => "2й этаж над столовой",
                            "ru" => "2й этаж над столовой",
                            "en" => "2 floor above dining room"
                        ]
                    ], [
                        "value" => "corp20",
                        "label" => [
                            "cv" => "20й корпус",
                            "ru" => "20й корпус",
                            "en" => "20 housing"
                        ]
                    ], [
                        "value" => "zabava",
                        "label" => [
                            "cv" => 'Домик "Забава"',
                            "ru" => 'Домик "Забава"',
                            "en" => '"Zabava" house'
                        ]
                    ], [
                        "value" => "veranda",
                        "label" => [
                            "cv" => "На веранде (для организаторов)",
                            "ru" => "На веранде (для организаторов)",
                            "en" => "On veranda for orgs"
                        ]
                    ]
                ],
                "type" => "select"
            ],
            [
                "num" => 14,
                "name" => "roomEl",
                "label" => [
                    "cv" => "Комната/место",
                    "ru" => "Комната/место",
                    "en" => "Room/place"
                ],
                "items" => [
                    "corp20" => [
                        "1" => [ "1:1", "1:2", "1:3" ],
                        "2" => [ "2:4", "2:5", "2:6" ],
                        "3" => [ "3:7", "3:8", "3:9" ],
                        "4" => [ "4:10", "4:11", "4:12" ],
                        "5" => [ "5:13", "5:14", "5:15", "5:16" ],
                        "6" => [ "6:17", "6:18", "6:19", "6:20" ],
                        "7" => [ "7:21", "7:22", "7:23", "7:24" ],
                        "8" => [ "8:25", "8:26", "8:27", "8:28" ]
                    ],
                    "zabava" => [
                        "1" => [ "1:1", "1:2" ],
                        "2" => [ "2:3", "2:4" ],
                        "3" => [ "3:5", "3:6" ],
                        "4" => [ "4:7", "4:8" ],
                        "5" => [ "5:9", "5:10" ],
                        "6" => [ "6:11", "6:12" ],
                        "7" => [ "7:13", "7:14" ],
                        "8" => [ "8:15", "8:16" ],
                        "9" => [ "9:17", "9:18" ],
                        "10" => [ "10:19", "10:20" ],
                        "11" => [ "11:21", "11:22" ],
                        "12" => [ "12:23", "12:24" ]
                    ]
                ],
                "type" => "selectgroup"
            ],
            [
                "num" => 15,
                "name" => "durationEl",
                "label" => [
                    "cv" => "Продолжительность участия",
                    "ru" => "Продолжительность участия",
                    "en" => "Participation duration"
                ],
                "items" => [
                    [
                        "value" => "7",
                        "label" => [
                            "cv" => "Весь период",
                            "ru" => "Весь период",
                            "en" => "All days"
                        ]
                    ],
                    [
                        "value" => "6",
                        "label" => [
                            "cv" => "6 дней",
                            "ru" => "6 дней",
                            "en" => "6 days"
                        ]
                    ],
                    [
                        "value" => "5",
                        "label" => [
                            "cv" => "5 дней",
                            "ru" => "5 дней",
                            "en" => "5 days"
                        ]
                    ],
                    [
                        "value" => "4",
                        "label" => [
                            "cv" => "4 дня",
                            "ru" => "4 дня",
                            "en" => "4 days"
                        ]
                    ],
                    [
                        "value" => "3",
                        "label" => [
                            "cv" => "3 дня",
                            "ru" => "3 дня",
                            "en" => "3 days"
                        ]
                    ],
                    [
                        "value" => "2",
                        "label" => [
                            "cv" => "2 дня",
                            "ru" => "2 дня",
                            "en" => "2 days"
                        ]
                    ],
                    [
                        "value" => "1",
                        "label" => [
                            "cv" => "1 день",
                            "ru" => "1 день",
                            "en" => "1 day"
                        ]
                    ],
                ],
                "type" => "select"
            ],
            [
                "num" => 16,
                "name" => "foodEl",
                "label" => [
                    "cv" => "Питание",
                    "ru" => "Питание",
                    "en" => "Food"
                ],
                "items" => [
                    [
                        "value" => "nonVegetarian",
                        "label" => [
                            "cv" => "Всеядный",
                            "ru" => "Всеядный",
                            "en" => "None vegetarian"
                        ],
                        "colNum" => 2
                    ], [
                        "value" => "vegetarian",
                        "label" => [
                            "cv" => "Вегетарианец",
                            "ru" => "Вегетарианец",
                            "en" => "Vegetarian"
                        ],
                        "colNum" => 2
                    ]
                ],
                "type" => "radio"
            ],
            [
                "num" => 17,
                "name" => "paymentEl",
                "label" => [
                    "cv" => "Оплата",
                    "ru" => "Оплата",
                    "en" => "Payment"
                ],
                "items" => [
                    [
                        "value" => "onPlace",
                        "label" => [
                            "cv" => "На месте",
                            "ru" => "На месте",
                            "en" => "On place"
                        ],
                        "colNum" => 3
                    ], 
                    [
                        "value" => "cheboksary",
                        "label" => [
                            "cv" => "Чебоксары",
                            "ru" => "Чебоксары",
                            "en" => "Cheboksary"
                        ],
                        "colNum" => 3
                    ], [
                        "value" => "moscow",
                        "label" => [
                            "cv" => "Москва",
                            "ru" => "Москва",
                            "en" => "Moscow"
                        ],
                        "colNum" => 3
                    ]
                ],
                "type" => "radio"
            ]
        ];
        return $items;
    }

    public static function getPreparedElements()
    {
          $elements = static::getElements();
          $result = [];
          foreach($elements as $e) {
              $result[] = [
                  'id' => $e['name'],
                  'label' => $e['label'],
                  'items' => $e['items'],
                  'type' => $e['type']
              ];
          }
          return $result;
    }
}
