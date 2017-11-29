<?php

return [
    /* appfront base theme dir   */
    'appadminBaseTheme'     => '@fecshop/app/appadmin/theme/base/default',
    'appadminBaseLayoutName'=> 'main_admin.php',
    'appName'               => 'appadmin',
    'bootstrap' => [
        'queue', // The component registers own console commands
    ],
    'components' => [
        'db' => [
            'class' => \yii\db\Connection::class,
        ],
        'queue' => [
            'class' => \yii\queue\db\Queue::class,
            'db' => 'db', // DB connection component or its config
            'tableName' => 'queue', // Table name
            'channel' => 'default', // Queue channel key
            'mutex' => \yii\mutex\MysqlMutex::class, // Mutex that used to sync queries
        ],
    ],

];