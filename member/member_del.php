<?
    session_start();
    //$userid = $_SESSION['userid'];
    //$username = $_SESSION['username'];
    //$usernick = $_SESSION['usernick'];
    //$userlevel = $_SESSION['userlevel'];

    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);    
?>
<meta charset="utf-8">
<?
    include "../lib/dbconn.php";       // dconn.php 파일을 불러옴

    $sql = "delete from member where id = '$userid'";
    //$sql .= "nick='$nick', hp='$hp', email='$email', regist_day='$regist_day' where id='$userid'";

    mysqli_query( $connect, $sql);  // $sql 에 저장된 명령 실행

    // 세션변수 삭제
    unset($_SESSION['userid']);
    unset($_SESSION['username']);
    unset($_SESSION['usernick']);
    unset($_SESSION['userlevel']);

    mysqli_close($connect); // db연결끊기
    echo "
        <script>
            window.alert('회원탈퇴가 완료되었습니다. 지금까지 GS리테일을 이용해 주셔서 감사합니다.');
            location.href = '../index.html';
        </script>
    ";

?>