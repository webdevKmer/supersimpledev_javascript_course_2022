const btn = document.querySelector('.js-button')
const gamingBtn = document.querySelector('.gaming')
const musicBtn = document.querySelector('.music')
const techBtn = document.querySelector('.tech')


console.log(btn.classList.contains('js-button'));

function checkIsToggled(btn) {
    if(btn.classList.contains('is-toggled')){
        btn.classList.remove('is-toggled')
    } else {
        btn.classList.add('is-toggled')
    }
}
gamingBtn.addEventListener('click', () => {
    checkIsToggled(gamingBtn)
})
musicBtn.addEventListener('click', () => {
    checkIsToggled(musicBtn)
})
techBtn.addEventListener('click', () => {
    checkIsToggled(techBtn)
})