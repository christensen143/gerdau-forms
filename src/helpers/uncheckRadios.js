const uncheckRadios = (start, end) => {
  let i;
  for (i = start; i <= end; i++) {
    document.getElementById(`radio${i}`).checked = false;
  }
};

export default uncheckRadios;
