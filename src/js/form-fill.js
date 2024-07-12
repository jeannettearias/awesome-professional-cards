'use strict';

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

//FUNCTIONS AND EVENTS

//listen and display the NAME input by User
const handleInputName = (ev) => {

    data.name = nameInput.value;
    namePreview.innerHTML = data.name;

    //save the data in Localstorage
    //localStorage.setItem('data', JSON.stringify(data));

    console.log(data);
};
nameInput.addEventListener('input', handleInputName);


//listen and display the JOB input by User
const handleInputJob = (ev) => {

    data.job = jobInput.value;
    jobPreview.innerHTML = data.job;

    //save the data in Localstorage
    //localStorage.setItem('data', JSON.stringify(data));

    console.log(data);
};
jobInput.addEventListener('input', handleInputJob);

//listen the phone event and change the href link (js__phonePreview)
const handleInputPhone = (ev) => {

    data.phone = phoneInput.value;
    phonePreview.setAttribute('href', data.phone);

    //save the data in Localstorage
    //localStorage.setItem('data', JSON.stringify(data));

};
phoneInput.addEventListener('input', handleInputPhone);

// listen the email event and change the href link (js__emailPreview)
const handleInputEmail = (ev) => {


    if (data.email !== emailInput.value) {
        data.email = emailInput.value;
        emailPreview.setAttribute('href', data.email);

        //save the data in Localstorage
        //localStorage.setItem('data', JSON.stringify(data));
    }
    console.log(data);
};

emailInput.addEventListener('input', handleInputEmail);


// listen the linkedin event and change the href link (js__linkedinPreview)
const handleInputLinkedin = (ev) => {

    data.linkedin = linkedinInput.value;
    linkedinPreview.setAttribute('href', data.linkedin);

    //save the data in Localstorage
    //localStorage.setItem('data', JSON.stringify(data));

    console.log(data);
};
linkedinInput.addEventListener('input', handleInputLinkedin);


// listen the github event and change the href link (js__githubPreview)
const handleInputGithub = (ev) => {

    data.github = githubInput.value;
    githubPreview.setAttribute('href', data.github);

    //save the data in Localstorage
    //localStorage.setItem('data', JSON.stringify(data));

    console.log(data);
};
githubInput.addEventListener('input', handleInputGithub);


//save the data in Localstorage
localStorage.setItem('data', JSON.stringify(data));

//Load page with the data stored in localstorage

function renderInputs(dfl) {
    nameInput.setAttribute('value', dfl.name);
    jobInput.setAttribute('value', dfl.job);
    phoneInput.setAttribute('value', dfl.phone);
    emailInput.setAttribute('value', dfl.email);
    linkedinInput.setAttribute('value', dfl.linkedin);
    githubInput.setAttribute('value', dfl.github);

}

const dataFromLS = JSON.parse(localStorage.getItem('data'));

if (dataFromLS !== null) {
    renderInputs(dataFromLS);

};


//load the page 
// API https://dev.adalab.es/api/card/
// 
//
//
/////////////////////////////////////

