<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Link extends CI_Controller {
    function Mtest(){  
        parent::__construct();  
    }

    function get_entries()  
    {   
        $con=mysqli_connect("localhost","root","xq2018ww","psytest");       
        mysqli_query($con,"set names utf8");  //防止中文乱码  
        $sql = "SELECT * FROM subjects WHERE psytype=2"; 
        $result = mysqli_query($con,$sql);
        $data = [];
        while($row= mysqli_fetch_array($result))
          {
          $data[]=$row;

          }
        #$ques=array_column($data, 'subdesc');
        #foreach($ques as $a){
          
        #print_r($a);

    #}
        foreach($data as $a){
          print_r($a[2]);
          echo "./" ;
        }
  
    }

    function upload()
    {
    $username = $_GET['nickName'] ;//小程序传来的用户昵称
    $gender = $_GET['gender'] ;//小程序传来的性别
    $language = $_GET['language'];
    $province = $_GET['province'];
    $city = $_GET['city'];
   // $uin = $_GET['openid'];
    $start_time = $_GET['time'];
    $sessionid = $_GET['sessionid'];
    $answerResult = $_GET['answerResult'];

    $conn=mysqli_connect("localhost","root","xq2018ww",'psytest');  
    mysqli_query($conn,"SET NAMES utf8mb4");
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
          };

    $sql = "INSERT INTO users (username,gender,language,province,city,accesstype,status)
    VALUES ('$username', '$gender', '$language', '$province', '$city', '0','0')";

    if ($conn->query($sql) === TRUE) {
        echo "新记录插入成功";
        #$result=mysqli_query($conn,"SELECT * from users");
        #while ($row= mysqli_fetch_object($result)){
         #  echo $row->username . "<br />";
        #}  #返回每一行的username后，没有乱码，正确显示，但从mysql直接导出到csv，乱码


    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    };


     $sql = "INSERT INTO useraction (psytype,username,choose_option,sessionid,status,start_time)
    VALUES ('0','$username', '$answerResult','$sessionid','1','$start_time')";

    if ($conn->query($sql) === TRUE) {
        echo "新记录插入useraction成功";
        #$result=mysqli_query($conn,"SELECT * from users");
        #while ($row= mysqli_fetch_object($result)){
         #  echo $row->username . "<br />";
        #}  #返回每一行的username后，没有乱码，正确显示，但从mysql直接导出到csv，乱码


    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    };

    $conn->close();
}

}
