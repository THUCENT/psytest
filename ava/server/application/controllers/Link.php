<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Link extends CI_Controller {
    function Mtest(){  
        parent::__construct();  
    }
    function get_entries()  
    {  
        $con=mysqli_connect("localhost","root","wx92f9e1e5427c0b78","psytest");         
        mysqli_query($con,"set names utf8");  //防止中文乱码  
        $sql = "SELECT * FROM subjects"; 
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
          echo " " ;
        }
  
    }
}
