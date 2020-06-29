const uncheckRadios = (num) => {
  let i;
  for (i = 1; i <= num; i++) {
    document.getElementById(`radio${i}`).checked = false;
  }
};

export default uncheckRadios;
