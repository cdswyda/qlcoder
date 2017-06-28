<?php 

// $queryStr = $_SERVER['QUERY_STRING'];
// 
// function get($str){
//     $data = array();
//     $parameter = explode('&',end(explode('?',$str)));
//     foreach($parameter as $val){
//         $tmp = explode('=',$val);
//         $data[$tmp[0]] = $tmp[1];
//     }
//     return $data;
// }
// 
// $queryObj = get($queryStr);
// 
// echo (int)$queryObj['a'] * (int)$queryObj['b'];
echo (int)$_GET['a'] * (int)$_GET['b'];


 ?>
