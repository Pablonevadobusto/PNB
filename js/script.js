/*=========== MIXITUP FILTER PORTFOLIO ==============*/

let mixerPortfolio = mixitup('.card-content', {
    selectors: {
        target: '.card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))
