<?php  
defined('BASEPATH') OR exit('No direct script access allowed');  
  
use QCloud_WeApp_SDK\Mysql\Mysql as DB;   // 引入DB  
  
class Tt extends CI_Controller {  
    public function index() {  
        $this->json([  
            'code' => 0,  
            'data' => [  
                'msg' => 'Hello World我是Tt文件。。。。。'  
            ]  
        ]);  
    }  
  
    public function test(){  
      echo "Look at this :hi it's me!";  
    }  
  
    public function cha(){  
      // ehco '查询';  
      $row = DB::select('subjects',['*'],'subid = "1"'); //查表名为nn的表里名字是bnc的数据  
        
      $this->json([  
        'data' => $row  
      ]);  
    }  
}  