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

  formReset.reset();

  updatePreview();
};

resetBtn.addEventListener("click", handleClickReset);
