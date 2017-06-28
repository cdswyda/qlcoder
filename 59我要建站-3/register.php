<?php 

$uName = $_GET["registerusername"];

$dbc = mysqli_connect("qdm16284842.my3w.com","qdm16284842","","qdm16284842_db") or die('链接数据库失败！');

$sql = "select registerusername from qlcoder_users where registerusername = '$uName'";

// echo $sql;

$result = mysqli_query($dbc, $sql) or die('数据查询失败！');

$row = mysqli_fetch_array($result);

if($row['registerusername'] == "") {
    // 不存在
    mysqli_query($dbc, "insert into qlcoder_users(registerusername) values('$uName')");
    echo "register success";
}else {
    echo 'already used';
}

// Free result set
mysqli_free_result($result);
mysqli_close($dbc);

 ?>
