<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
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
            'result' => []
        ];
    }

    public function actionOccupiedrooms()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        return [
            'result' => []
        ];
    }

    public function actionRegistrations()
    {
        Yii::$app->response->format = Response::FORMAT_JSON;
        return [
            'result' => Registration::getRegistrations()
        ];
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
