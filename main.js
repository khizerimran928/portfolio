let typed = new Typed(".text", {
    strings: [ "Frontend Developer" , "Web Developer" , "Programmer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


function getRandomPercentage() {
    return Math.floor(Math.random() * 101);
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skills .skill-info').forEach(skillInfo => {
        const percentageElement = skillInfo.querySelector('.percentage');
        const lineElement = skillInfo.querySelector('.line');

        const percentage = getRandomPercentage();
        percentageElement.textContent = `${percentage}%`;
        lineElement.style.width = `${percentage}%`;
    });
});
const skills = document.querySelectorAll('.progress-bar');

skills.forEach(skill => {
  const randomPercentage = Math.floor(Math.random() * 101);
  skill.style.width = randomPercentage + '%';
});

