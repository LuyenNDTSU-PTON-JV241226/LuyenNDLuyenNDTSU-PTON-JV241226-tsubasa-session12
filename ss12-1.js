//sss12-1.1

let a = +prompt("Mời bạn nhập váo số a");
let b = +prompt("Mời bạn nhập váo số a");
alert(Number.isInteger(a/b));

//ss12-1.2

let age = +prompt("Hãy nhập vào tuổi của bạn");
if(age < 13){
    alert("Bạn chưa đủ điều kiện vào lớp 10");
}

//ss12-1.3

let number = +prompt("Hãy nhập vào một số nguyên");
if (number > 0){
    alert("số lớn hơn 0");
}else if (number < 0){
    alert("số nhỏ hơn 0");
}

//ss12-1.4

let z = +prompt("Hãy nhập váo số nguyên thứ 1");
let x = +prompt("Hãy nhập váo số nguyên thứ 2");
let c = +prompt("Hãy nhập váo số nguyên thứ 3");
if (z > x && z > c){
    alert("số lớn nhất là: " + z);
}else if (x > z && x > c){
    alert("số lớn nhất là: " + x);
}else if (z < c && x < c){
    alert("số lớn nhất là: " + c);
}

//ss12-1.5 

let k1 = +prompt("Hãy nhập vào điểm giữa kì của bạn");
let k2 = +prompt("Hãy nhập vào điểm cuối kì của bạn");
let tb = (k1 + k2)/2;
if (tb >= 9.5){
    alert("Học lực xuât sắc")
}else if (tb >= 8 && tb < 9.5){
    alert("Học lực giỏi");
}else if(tb > 6 && tb < 8){
    alert("Học lực khá");
}else if(tb > 4 && tb < 6){
    alert("Học lực trung bình");
}else {
    alert("Học lực yếu");
}

