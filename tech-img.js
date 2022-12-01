const desktop = window.matchMedia('(min-width: 45em)')
const launchImg = document.querySelector('.launch-image')
const spaceportImg = document.querySelector('.spaceport-image')
const capsuleImg = document.querySelector('.capsule-image')


function techImgFlip() {
    if (desktop.matches) {
        launchImg.src = './assets/technology/image-launch-vehicle-portrait.jpg'
        spaceportImg.src = './assets/technology/image-spaceport-portrait.jpg'
        capsuleImg.src = './assets/technology/image-space-capsule-portrait.jpg'
    }
    else {
        launchImg.src = './assets/technology/image-launch-vehicle-landscape.jpg'
        spaceportImg.src = './assets/technology/image-spaceport-landscape.jpg'
        capsuleImg.src = './assets/technology/image-space-capsule-landscape.jpg'
    }
}

techImgFlip()
window.addEventListener('resize', techImgFlip)