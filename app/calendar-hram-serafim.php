<?php header("Content-Type:text/html; charset=utf-8");

 $date = $_POST['data'];
 $contents = file_get_contents("http://script.days.ru/php.php?life=1&date=$date&feofan=1&encoding=u");
 $arra=unserialize(stripslashes($contents));
 /*Преобразование даты в массив*/
$calendar_day = explode(" ", $arra['day']);


$text = '<div class="card-header">
            <div class="row">
              <div class="col-md-8 card-header-prev-day my-auto"><button id="prev-day" class="calendar-link prev-day"><i class="fas fa-chevron-left"></i></button></div>
              <div class="col-md-8 text-center day-of-week my-auto">'.str_replace(".","",$calendar_day[8]).'</div>
              <div class="col-md-8 text-right card-header-next-day my-auto"><button id="next-day" class="calendar-link next-day"><i class="fas fa-chevron-right"></i></button></div>
            </div>
          </div>
          <div class="card-body">
			<div class="row">
			  <div class="col-lg-6 col-md-6 col-sm-24 order-xs-2 order-sm-2 date-style my-auto"><p>Старый стиль '.$calendar_day[5].'&nbsp'.$calendar_day[6].'</p></div>
			  <div class="col-lg-12 col-md-12 col-sm-24 order-md-2 order-xs-1 order-sm-1 block-icons"><div class="crop">'.$arra['dayicon_today'].'</div></div>
			  <div class="col-lg-6 col-md-6 col-sm-24 order-xs-1 order-sm-3 date-style text-right my-auto"><p>Новый стиль '.$calendar_day[0].'&nbsp'.$calendar_day[1].'</p></div>
			</div> 
			<div class="row">
			  <div class="col-sm-24">
			  <p class="text-center">'.$arra['para'].'</p>
			  <p class="text-center">'.$arra['chten'].'</p>
			  <p class="text-center">'.$arra['feofan'].'</p>
			  <p class="text-center">'.$arra['life'].'</p>
			  </div>
			</div>
		</div>';

$trapeza=str_replace(".","",$arra['trapeza_txt']);
echo json_encode(array($text, $trapeza,$arra));
exit();
?>

