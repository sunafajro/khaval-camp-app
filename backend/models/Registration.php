<?php

namespace app\models;

use Yii;

class Registration extends \yii\db\ActiveRecord
{
    public static function tableName()
    {
        return 'registrations';
    }

    public function rules()
    {
        return [
            [['duration'], 'integer'],
            [['lastname', 'firstname', 'chuvashname', 'sex', 'phone', 'email', 'social', 'city', 'country', 'level', 'residence', 'room', 'food', 'payment', 'job'], 'string', 'max' => 256],
            [['birthdate', 'created'],'date','format' => 'yyyy-mm-dd'],
        ];
    }

    public static function getRegistrations()
    {
        $registrations = Registration::find()->orderBy(['id'=> SORT_ASC])->all();
        $result = [];
        $i = 1;
        foreach($registrations as $r) {
            $date1 = new \DateTime();
            $date2 = new \DateTime($r->birthdate);
            $diff = $date1->diff($date2);
            $result[] = [
                'key' => $r->id,
                'rowNum' => $i,
                'name' => $r->lastname . ' ' . $r->firstname,
                'age'      => $diff->y,
                'city'     => $r->city,
                'duration' => $r->duration,
                'date'     => $r->created
            ];
            $i++;
        }
        return $result;
    }

    public static function getOccupiedRooms()
    {
        $registrations = Registration::find()->where(['in', 'residence', ['corp20', 'zabava']])->all();
        $result = [
          "corp20" => [],
          "zabava" => [],
        ];
        forEach($registrations as $r) {
          if($r->residence === "corp20") {
            $result['corp20'][] = $r->room;
          } else if($r->residence === "zabava") {
            $result['zabava'][] = $r->room;
          }
        }
        return $result;
    }
}
