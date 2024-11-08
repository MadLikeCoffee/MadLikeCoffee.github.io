let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    document.body.classList.remove('lightmode')
    localStorage.setItem('darkmode', 'active')
}

function disableDarkmode() {
    document.body.classList.add('lightmode')
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if (darkmode === "active") enableDarkmode()
else disableDarkmode()

themeSwitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode')
    console.log(darkmode)
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
    
})
