<?php
namespace fecshop\app\console\modules\Amqp\block;

use yii\base\Object;

class Push extends Object implements \yii\queue\Job
{
    public $name;
    public $age;

    /*
     * $d = 'name:'.$this->name.'####'.'age:'.$this->age;
     */
    public function execute($queue)
    {
        $to = $this->email;
        $subject = $this->subject;
        $htmlBody = $this->htmlBody;
        $sendInfo = compact('to', 'subject', 'htmlBody');
        if($to){
            Yii::$service->email->send($sendInfo);
        }
    }
}