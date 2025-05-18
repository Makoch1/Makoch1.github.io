let activeProject = document.getElementsByClassName('projects-project')[0];
activeProject.style.display = 'flex';

const buttons = document.getElementsByClassName('projects-btn');
buttons[0].classList.add('active');

for (const button of buttons) {
    button.addEventListener('mouseover', event => {
        const newProject = document.getElementById(`project-${event.target.id}`);

        // check if its just the same
        if (activeProject === newProject) {
            return;
        }

        // remove activeProject
        activeProject.style.display = 'none';
        document.querySelector('.projects-btn.active').classList.remove('active');

        // set activeProject and make it appear
        activeProject = newProject;
        activeProject.style.display = 'flex';
        button.classList.add('active');
    })
}

