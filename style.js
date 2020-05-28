let dropDownValue = document.getElementById("dropDown");

dropDownValue.onchange = function() {
  if (this.selectedIndex !== 0) {
    window.location.href = this.value;
    let x = this.value;
    document.getElementById("dropDown").innerHTML(x);
  }
};