const btn = document.querySelector('.js-button')
const gamingBtn = document.querySelector('.gaming')
const musicBtn = document.querySelector('.music')
const techBtn = document.querySelector('.tech')



console.log(btn.classList.contains('js-button'));

function checkIsToggled(btn) {
    if(!btn.classList.contains('is-toggled')){
        turnOffToggledBtn()
        btn.classList.add('is-toggled')
    } else {
        btn.classList.remove('is-toggled')
    }
}
function turnOffToggledBtn() {
    const toggledBtn = document.querySelector('.is-toggled')

    if(toggledBtn){
        toggledBtn.classList.remove('is-toggled')
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
btn.addEventListener('click', () => {
    checkIsToggled(btn)
})