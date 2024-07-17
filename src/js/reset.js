const resetBtn = document.querySelector(".js__resetBtn");
const formReset = document.querySelector(".js__form");

const handleClickReset = (ev) => {
  data = {
    palette: 1,
    name: "",
    job: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    photo: "",
  };
  createCardBtn.classList.remove("disabled");
  createCardIcon.classList.remove("disabled_icon");
  createMessage.classList.remove('visible');
  createMessage.classList.add('hidden');

  formReset.reset();

  updatePreview();
};

resetBtn.addEventListener("click", handleClickReset);
