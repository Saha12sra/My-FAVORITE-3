function welcomefav() {
    document.getElementById("s1").style.display = "none";
    document.getElementById("s2").style.display = "block";
}

function favorite() {
    document.getElementById("s2").style.display = "none";
    document.getElementById("s3").style.display = "block";
    document.getElementById("s4").style.display = "block";
}

function hawaii() {
    document.getElementById("s3").style.display = "none";
    document.getElementById("s4").style.display = "none";
    document.getElementById("s5").style.display = "block";
}

function back2b() {
    document.getElementById("s5").style.display = "none";
    document.getElementById("s3").style.display = "block";
    document.getElementById("s4").style.display = "block";
}

function next2ins() {
    document.getElementById("s5").style.display = "none";
    document.getElementById("s6").style.display = "block";
}

function back2ins() {
    document.getElementById("s6").style.display = "none";
    document.getElementById("s5").style.display = "block";
}
