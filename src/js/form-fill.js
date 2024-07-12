"use strict";

//QUERY SELECTORS
const nameInput = document.querySelector('.js__input_name');
const jobInput = document.querySelector('.js__input_job');
const phoneInput = document.querySelector('.js__input_phone');
const emailInput = document.querySelector('.js__input_email');
const linkedinInput = document.querySelector('.js__input_linkedin');
const githubInput = document.querySelector('.js__input_github');

const namePreview = document.querySelector('.js__namePreview');
const jobPreview = document.querySelector('.js__jobPreview');
const phonePreview = document.querySelector('.js__phonePreview');
const emailPreview = document.querySelector('.js__emailPreview');
const linkedinPreview = document.querySelector('.js__linkedinPreview');
const githubPreview = document.querySelector('.js__githubPreview');



//GLOBAL VARIABLES

let data = {
    //   palette: 1,
    name: '',
    job: '',
    photo: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',

};

//FUNCTIONS AND EVENTS

//listen and display the NAME input by User
const handleInputName = (ev) => {
    //const value = nameInput.value;
    //namePreview.innerHTML = value;

    data.name = nameInput.value;
    namePreview.innerHTML = data.name;


};
nameInput.addEventListener('input', handleInputName);

//listen and display the JOB input by User
const handleInputJob = (ev) => {

    data.job = jobInput.value;
    jobPreview.innerHTML = data.job;

};
jobInput.addEventListener('input', handleInputJob);

//listen the phone event and change the href link (js__phonePreview)
const handleInputPhone = (ev) => {

    data.phone = phoneInput.value;
    phonePreview.innerHTML = data.phone;

};
phoneInput.addEventListener('input', handleInputPhone);

// listen the email event and change the href link (js__emailPreview)
const handleInputEmail = (ev) => {

    data.email = emailInput.value;
    emailPreview.innerHTML = data.email;

};
emailInput.addEventListener('input', handleInputEmail);

// listen the linkedin event and change the href link (js__linkedinPreview)
const handleInputLinkedin = (ev) => {

    data.linkedin = linkedinInput.value;
    linkedinPreview.innerHTML = data.linkedin;

};
linkedinInput.addEventListener('input', handleInputLinkedin);

// listen the github event and change the href link (js__githubPreview)
const handleInputGithub = (ev) => {

    data.github = githubInput.value;
    githubPreview.innerHTML = data.github;

};
githubInput.addEventListener('input', handleInputGithub);






//load the page 
// API https://dev.adalab.es/api/card/
// 
//
//
/////////////////////////////////////

