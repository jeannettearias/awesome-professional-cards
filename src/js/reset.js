const resetBtn = document.queryselector(".js__resetBtn");

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
  updatePreview();
};

resetBtn.addEventListener("click", handleClickReset);
