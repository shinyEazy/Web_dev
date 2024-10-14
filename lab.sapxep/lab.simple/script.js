var col = 0;
var dir = "";
var tbl = document.getElementById("data_table");

tbl.rows[0].cells[1].onclick = function () {
  if (col == 1) tbl.rows[0].cells[1].classList.remove(dir);
  else if (col == 2) tbl.rows[0].cells[2].classList.remove(dir);
  if (col == 1) {
    dir = dir == "asc" ? "desc" : "asc";
  } else {
    col = 1;
    dir = "asc";
  }
  this.classList.add(dir);
  tblSort();
};

tbl.rows[0].cells[2].onclick = function () {
  if (col == 1) tbl.rows[0].cells[1].classList.remove(dir);
  else if (col == 2) tbl.rows[0].cells[2].classList.remove(dir);
  if (col == 2) {
    dir = dir == "asc" ? "desc" : "asc";
  } else {
    col = 2;
    dir = "asc";
  }
  this.classList.add(dir);
  tblSort();
};

function tblSort() {
  var rows = Array.from(tbl.rows).slice(1);
  rows.sort((row1, row2) => {
    var cell1 = row1.cells[col].innerHTML.toLowerCase();
    var cell2 = row2.cells[col].innerHTML.toLowerCase();
    if (dir == "asc") {
      return cell1 > cell2 ? 1 : cell1 < cell2 ? -1 : 0;
    } else {
      return cell1 < cell2 ? 1 : cell1 > cell2 ? -1 : 0;
    }
  });

  rows.forEach((row) => tbl.appendChild(row));
}
