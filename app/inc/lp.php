<?php
require_once "LiqPay.php";
$public_key = "i35172522940"; 
$private_key = "pNKMam46mnwXKBeeV4TXhOHaGSsCMbtZFMkx1T9A"; 
$v = $_GET['v'];
function plural_form($number, $after)
{
    $cases = array(2, 0, 1, 1, 1, 2);
    $w = $number . ' ' . $after[($number % 100 > 4 && $number % 100 < 20) ? 2 : $cases[min($number % 10, 5)]];
    return $w;
}

if ($v == '1') {
    $amount = $_POST['amount'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $order_id = time();
    $liqpay = new LiqPay($public_key, $private_key);
    $html = $liqpay->gen_form(array(
        'action' => 'pay',
        'amount' => $amount,
        'email' => $email,
        'phone' => $phone,
        'currency' => 'UAH',
        'description' => 'Пожертвование на храм', //заменить, если надо
        'order_id' => $order_id,
        'sandbox' => '1', // заменить на 0, после тестов
        'version' => '3'
    ));
    print $html;
    print('
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
        <script>
            $(document).ready(function(){
                $( "form:first" ).submit();
            })
        </script>
    ');
} elseif ($v == '2') {
    $amount1 = $_POST['amount'];
    $amount = $amount1 * 15;
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $order_id = time();
    $w = plural_form($amount1,
        /* варианты написания для количества 1, 2 и 5 */
        array('кирпича', 'кирпичей'));
    $liqpay = new LiqPay($public_key, $private_key);
    $html = $liqpay->gen_form(array(
        'action' => 'pay',
        'amount' => $amount,
        'email' => $email,
        'phone' => $phone,
        'currency' => 'UAH',
        'description' => 'Покупка ' . $w . ' с именем ' . $name, //заменить ксли надо ($w генерирует фразы  2 кирпичей,  3 кирпичей, $name имя введенное в форме)
        'order_id' => $order_id,
        'sandbox' => '1', // заменить на 0, после тестов
        'version' => '3'
    ));
    print $html;
    print('
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
        <script>
            $(document).ready(function(){
                $( "form:first" ).submit();
            })
        </script>
    ');
}
