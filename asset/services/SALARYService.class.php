<?php
class SALARYService {
    public static function calculateinss($salary) {
        
        if ($salary >= 1 && $salary <= 1399.12){
            return ($salary*8/100);
        }
        else if ($salary >= 1399.13 && $salary <= 2331.88){
            return ($salary*9/100);
        }
        else if ($salary >= 2331.89 && $salary <= 4663.75){
            return ($salary*11/100);
        }
        
        else return 513.02;
    }
    
  // public static function calculateirpf($salary)
}
?>