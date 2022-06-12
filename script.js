// onclicks
// document.getElementById('input1').onclick = function () {
//     document.getElementById('cardrotate').style.transform = 'rotateY(' + 0 + 'deg)'
// }
// document.getElementById('input2').onclick = function () {
//     document.getElementById('cardrotate').style.transform = 'rotateY(' + 0 + 'deg)'
// }
// document.getElementById('input3').onclick = function () {
//     document.getElementById('cardrotate').style.transform = 'rotateY(' + 180 + 'deg)'
// }
// document.getElementById('input4').onclick = function () {
//     document.getElementById('cardrotate').style.transform = 'rotateY(' + 0 + 'deg)'
// }
// $(function () { 
//   $(".inputs :nth-child(1)").keyup(function () {
//     var inputString1 = $('.inputs :nth-child(1)').val();
//     if (isNaN($(".inputs :nth-child(1)").val())) {
//         $(".inputs :nth-child(1)").css({
//             border : "1px solid red",
//         })
//         $('#error1').text('The card number cant be a letter')
//         $('#error1').css({
//             color: 'red',
//         })
//         $(".inputs :nth-child(1)").val(inputString1.substr(0,(inputString1.length -1)))
//     }
//     else if (!(isNaN($(".inputs :nth-child(1)").val()))){
//         $(".inputs :nth-child(1)").css({
//             border : "1px solid springgreen"
//         })
//         $('#cardnumberinput').val($(".inputs :nth-child(1)").val())
//         $('#error1').text('')
//         $(".inputs :nth-child(1)").attr('placeholder', 'Fill the blank')
//     }
//     if($(".inputs :nth-child(1)").val() == '') {
//         $(".inputs :nth-child(1)").css({
//             border : "1px solid silver"
//         })
//         $(".inputs :nth-child(1)").attr('placeholder', 'Fill the blank')
//     }
//     });
//   $(".inputs :nth-child(2)").keyup(function () {
//     var inputString2 = $('.inputs :nth-child(2)').val();
//     if(isNaN(inputString2[0])){
//         $(".inputs :nth-child(2)").css({
//             border : "1px solid red"
//         })
//         $('#error2').text('The card valid till cant be a letter')
//         $('#error2').css({
//             color: 'red',
//         })
//         $(".inputs :nth-child(2)").val(inputString2.substr(0,(inputString2.length -1)))
//     }
//     else if (!(isNaN(inputString2[0]))){
//         $(".inputs :nth-child(2)").css({
//             border : "1px solid springgreen"
//         })
//         $('#validinfo').val($(".inputs :nth-child(2)").val())
//         $('#error2').text('')
//     }
//      if(inputString2.length == 2 && isNaN(inputString2[1])){
//         $(".inputs :nth-child(2)").css({
//             border : "1px solid red"
//         })
//         $('#error2').text('The card valid till cant be a letter')
//         $('#error2').css({
//             color: 'red',
//         })
//         $(".inputs :nth-child(2)").val(inputString2.substr(0,(inputString2.length -1)))
//     }
//     else if (inputString2.length == 2 && !(isNaN(inputString2[1]))){
//         $(".inputs :nth-child(2)").css({
//             border : "1px solid springgreen"
//         })
//         $('#validinfo').val($(".inputs :nth-child(2)").val())
//         $('#error2').text('')
//     }
//     if($(".inputs :nth-child(2)").val().length == 2) {
//         $(".inputs :nth-child(2)").val(`${$(".inputs :nth-child(2)").val()}/`)
//     }
//      if(inputString2.length == 4 && isNaN(inputString2[3])){
//         $(".inputs :nth-child(2)").css({
//             border : "1px solid red"
//         })
//         $('#error2').text('The card valid till cant be a letter')
//         $('#error2').css({
//             color: 'red',
//         })
//         $(".inputs :nth-child(2)").val(inputString2.substr(0,(inputString2.length -1)))
//     }
//     else if (inputString2.length == 4 && !(isNaN(inputString2[3]))){
//         $(".inputs :nth-child(2)").css({
//             border : "1px solid springgreen"
//         })
//         $('#validinfo').val($(".inputs :nth-child(2)").val())
//         $('#error2').text('')
//     }
//      if(inputString2.length == 5 && isNaN(inputString2[4])){
//         $(".inputs :nth-child(2)").css({
//             border : "1px solid red"
//         })
//         $('#error2').text('The card valid till cant be a letter')
//         $('#error2').css({
//             color: 'red',
//         })
//         $(".inputs :nth-child(2)").val(inputString2.substr(0,(inputString2.length -1)))
//     }
//     else if (inputString2.length == 5 && !(isNaN(inputString2[4]))){
//         $(".inputs :nth-child(2)").css({
//             border : "1px solid springgreen"
//         })
//         $('#validinfo').val($(".inputs :nth-child(2)").val())
//         $('#error2').text('')
//     }
//   });   
//   $(".inputs :nth-child(3)").keyup(function () {
//     var inputString3 = $('.inputs :nth-child(3)').val();
//     if (isNaN($(".inputs :nth-child(3)").val())) {
//         $(".inputs :nth-child(3)").css({
//             border : "1px solid red",
//         })
//         $('#error3').text('The card CVV cant be a letter')
//         $('#error3').css({
//             color: 'red',
//         })
//         $(".inputs :nth-child(3)").val(inputString3.substr(0,(inputString3.length -1)))
//     }
//     else if (!(isNaN($(".inputs :nth-child(3)").val()))){
//         $(".inputs :nth-child(3)").css({
//             border : "1px solid springgreen"
//         })
//         $('#pininfo').val($(".inputs :nth-child(3)").val())
//         $('#error3').text('')
//         $(".inputs :nth-child(3)").attr('placeholder', 'MM/YY')
//     }
//     if($(".inputs :nth-child(3)").val() == '') {
//         $(".inputs :nth-child(3)").css({
//             border : "1px solid silver"
//         })
//         $(".inputs :nth-child(3)").attr('placeholder', 'MM/YY')
//     }
//   });
//   $(".inputs :nth-child(4)").keyup(function () {
//     var inputString4 = $('.inputs :nth-child(4)').val();
//     if (!(isNaN($(".inputs :nth-child(4)").val()))) { 
//         $(".inputs :nth-child(4)").css({
//             border : "1px solid red"
//         })
//         $('#error4').text('The name and the last name cant be a number')
//         $('#error4').css({
//             color: 'red',
//         })
//         $(".inputs :nth-child(4)").val(inputString4.substr(0,(inputString4.length -1)))
//     }
//     else if (isNaN($(".inputs :nth-child(4)").val())){
//         $(".inputs :nth-child(4)").css({
//             border : "1px solid springgreen"
//         })
//         $('#nameinfo').val($(".inputs :nth-child(4)").val())
//         $('#error4').text('')
//         $(".inputs :nth-child(4)").attr('placeholder', 'First Name / Last Name')
//     }
//     if($(".inputs :nth-child(4)").val() == '') {
//         $(".inputs :nth-child(4)").css({
//             border : "1px solid silver"
//         })
//         $(".inputs :nth-child(4)").attr('placeholder', 'First Name / Last Name')
//     }
//     });
// });
window.onload = function() {

var up = 0;
var side = 0;

document.onkeydown = run;
function run(e) {
    if(e.keyCode == 38){
        up -= 90;
    }
    else if(e.keyCode == 40){
        up += 90;
    }
    else if(e.keyCode == 39){
        side -= 90;
    }
    else if(e.keyCode == 37){
        side += 90;
    }
    document.getElementById('b').style.transform = 'rotateX(' + up + 'deg)' + 'rotateY(' + side + 'deg)';
}
}