// Variables

var clap = document.getElementById('clap')
var closedHihat = document.getElementById('closed-hihat')
var openHithat = document.getElementById('open-hihat')
var kick = document.getElementById('kick')
var snare = document.getElementById('snare')
var crash = document.getElementById('crash')

// Sounds

var clapSound = new Audio("sounds/trap-pack-clap.wav")
var closedHihatSound =  new Audio("sounds/closed-hihat.wav")
var openHihatSound =  new Audio("sounds/808-open-hi-hat-9.wav")
var kickSound = new Audio("sounds/deep-kick.wav")
var snareSound = new Audio("sounds/vinyl-snare-2.wav")
var crashSound = new Audio("sounds/crash.wav")

clap.addEventListener('click', () => {
    clapSound.play()
})

kick.addEventListener('click', () => {
    kickSound.play()
})

crash.addEventListener('click', () => {
    crashSound.play()
})

snare.addEventListener('click', () => {
    snareSound.play()
})

closedHihat.addEventListener('click', () => {
    closedHihatSound.play()
})

openHithat.addEventListener('click', () => {
    openHihatSound.play()
})