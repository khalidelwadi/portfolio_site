// select each section
let home = document.getElementById('home')
let about_me = document.getElementById('about_me')
let portfolio = document.getElementById('portfolio')
let elevator = document.getElementById('elevator-pitch')

// select head links
let home_btn = document.getElementById('home-btn')
let aboutme_btn = document.getElementById('aboutme-btn')
let portfolio_btn = document.getElementById('portfolio-btn')
let elv_btn = document.getElementById('elv-btn')


home_btn.addEventListener('click', () => {
        elevator.style.display = 'none';
        portfolio.style.display = 'none';
        about_me.style.display = 'none';
        home.style.display = 'block';
})

aboutme_btn.addEventListener('click', () => {
    elevator.style.display = 'none';
    portfolio.style.display = 'none';
    home.style.display = 'none';
    about_me.style.display = 'block';
})

portfolio_btn.addEventListener('click', () => {
    elevator.style.display = 'none';
    home.style.display = 'none';
    about_me.style.display = 'none';
    portfolio.style.display = 'block';
})

elv_btn.addEventListener('click', () => {
    home.style.display = 'none';
    about_me.style.display = 'none';
    portfolio.style.display = 'none';
    elevator.style.display = 'block'
})
