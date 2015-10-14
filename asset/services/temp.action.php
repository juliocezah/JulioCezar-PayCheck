<?php
require 'SALARYService.class.php';

$salary = $_GET['salary'];
$calcINSS = 0.0;
/*$calcIRPF = 0.0;
$calcSalLiq = 0.0;*/

if(is_numeric($salary)) {
    $calcINSS = SALARYService::calculateinss($salary);
   /* $calcIRPF = SALARYService::calculate($salary - $calcINSS);*/
}

echo $calcINSS;
/*echo $calcIRPF;
echo $calcSalLiq;*/
?>