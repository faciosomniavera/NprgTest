// JavaScript Document
let answers = [];

const question1 = document.querySelector("#question1");
const question2 = document.querySelector("#question2");

const buttons1 = question1.querySelectorAll("button");
const buttons2 = question2.querySelectorAll("button");

//1問目
//左
buttons1[0].addEventListener("click", function() {
    answers.push("A");
    question1.style.display = "none";
    question2.style.display = "block";
});
//右
buttons1[1].addEventListener("click", function() {
    answers.push("B");
    question1.style.display = "none";
    question2.style.display = "block";
});


//2問目
//左
buttons2[0].addEventListener("click", function() {
    answers.push("A");
    showResult();
});
//右
buttons2[1].addEventListener("click", function() {
    answers.push("B");
    showResult();
});

//結果発表
function showResult() {
    question2.style.display = "none";

    const result = document.querySelector("#result");
    const resultTitle = document.querySelector("#resultTitle");
    const resultDescription = document.querySelector("#resultDescription");

    if (answers[0] === "A" && answers[1] === "A"){
        resultTitle.textContent = "モダニズム建築";
        resultDescription.textContent = "シンプルで合理的、幾何学的な美しさを持つ建築がおすすめ！";
    }else if(
		answers[0] === "A" && answers[1] === "B"){
        resultTitle.textContent = "表現主義建築";
        resultDescription.textContent = "独創的な造形や、感情に訴えかける建築がおすすめ！";
    }else if(
		answers[0] === "B" && answers[1] === "A"){
        resultTitle.textContent = "和風・伝統建築";
        resultDescription.textContent = "自然素材や落ち着いた空間、伝統的な美しさを大切にする建築がおすすめ！";
    }else{
        resultTitle.textContent = "有機的建築";
        resultDescription.textContent = "自然の形や曲線を取り入れた、自由で柔らかな建築がおすすめ！";
    }

    result.style.display = "block";
}