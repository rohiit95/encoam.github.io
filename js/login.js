var a = document.getElementById('log');
var b = document.getElementById('sign');
var c = document.getElementById('logi');
var d = document.getElementById('signi');
b.onclick = function () {
d.style.display = "block";
c.style.display = "none";
    a.style.backgroundColor= "#6c7e79";
    b.style.backgroundColor= "#71d2b8";
    
};
a.onclick = function () {
d.style.display = "none";
c.style.display = "block";
     a.style.backgroundColor= "#71d2b8";
    b.style.backgroundColor= "#6c7e79";
};