// JavaScript Document
let answers = [];

const question1 = document.querySelector("#question1");
const question2 = document.querySelector("#question2");

const buttons1 = question1.querySelectorAll("button");

buttons1[0].addEventListener("click", function() {
    answers.push("modern");
    question1.style.display = "none";
    question2.style.display = "block";
});

buttons1[1].addEventListener("click", function() {
    answers.push("natural");
    question1.style.display = "none";
    question2.style.display = "block";
});