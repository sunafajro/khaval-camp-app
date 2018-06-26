<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use app\models\Element;
use app\models\Registration;
use yii\web\Controller;
use yii\web\Response;

class ApiController extends Controller
{
    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['elements', 'occupiedrooms', 'registrations', 'state'],
                'rules' => [
                    [
                        'actions' => ['elements', 'occupiedrooms', 'registrations', 'state'],
                        'allow' => true,
                        'roles' => ['?'],
                    ],
                    [
                        'actions' => ['elements', 'occupiedrooms', 'registrations', 'state'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    public function actionElements()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        return [
            'result' => Element::getPreparedElements()
        ];
    }

    public function actionOccupiedrooms()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        return [
            'result' => Registration::getOccupiedRooms()
        ];
    }

    public function actionRegistrations()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        if (Yii::$app->request->post() && Yii::$app->request->post('data')) {
            $data = Yii::$app->request->post('data');
            $model = new Registration();
            $model->firstname   = $data['firstName'];
            $model->lastname    = $data['lastName'];
            $model->chuvashname = $data['chuvashName'];
            $model->sex         = $data['sex'];
            $model->birthdate   = $data['birthdate'];
            $model->phone       = $data['phone'];
            $model->email       = $data['email'];
            $model->social      = $data['social'];
            $model->city        = $data['city'];
            $model->country     = $data['country'];
            $model->level       = $data['level'];
            $model->residence   = $data['residence'];
            $model->room        = $data['room'];
            $model->duration    = $data['duration'];
            $model->food        = $data['food'];
            $model->payment     = $data['payment'];
            $model->job         = $data['job'];
            $model->created     = date('Y-m-d');
            if ($model->save()) {
                return [
                    'result' => $model
                ];
            } else {
                Yii::$app->response->statusCode = 500;
                return [
                    'result' => []
                ];
            }
        } else {
            return [
                'result' => Registration::getRegistrations()
            ];
        }
    }

    public function actionState()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        return [
            'lang' => 'ru',
            'loggedIn' => Yii::$app->user->isGuest
        ];
    }
}
