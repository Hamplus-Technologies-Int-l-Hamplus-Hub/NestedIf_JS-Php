<?php
$name = "Hamplus";
$day = date('d');
$month = date('m');
$year = date('Y');
$date = date("d-m-Y");
$greet;
if ($month == 12):
    if ($day == 25):
        $greet =  "Yeah! Today is Christmas.";
    elseif ($day == 26):
        $greet =  "Yeah! Today is Boxing day.";
    endif;
elseif ($month == 1):
    if ($day == 1):
        $greet =  "Yeah! Today is New Year.";
    endif;
elseif ($month == 2):
    if ($day == 14):
        $greet =  "Yeah! Today is Valentine's day.";
    endif;
else:
    $greet =  "Oops! Today is not public holiday.";
endif;
echo ("Hello " . ($name) . " " . $greet . " Today's date is " . $date);

?>
