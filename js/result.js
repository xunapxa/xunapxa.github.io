
import { mbtis, results } from "./data.js";

const mbti = new URLSearchParams(location.search)
                                .get('mbti')

console.log(mbti);

const result = results[mbtis[mbti]]
console.log(result);

const titleEL = 
    document.querySelector('.page-title')
const characterEL = 
    document.querySelector('.character')    
const boxELs = 
    document.querySelectorAll('.box')
const jobELs = 
    document.querySelectorAll('.job')
const lectureEL = 
    document.querySelector('.lecture')
const lectureimgEL = 
    document.querySelector('.lecture img')
    
titleEL.innerHTML =result.title;
characterEL.src = result.character

boxELs.forEach(function(boxEl, index) {
    boxEl.innerHTML = result.results[index]
})

jobELs.forEach(function(jobEl, index) {
    jobEl.innerHTML = result.jobs[index]
})


lectureEL.href = result.lectureUrl
lectureimgEL.src = result.lectureImg