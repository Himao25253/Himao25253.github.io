var mytable = document.getElementById("tbl");

for (var i=0; i < mytable.rows.length; i++) {
  for (var j=0; j < mytable.rows[i].cells.length; j++) {
    console.log(  "(" + i + "," + j + ") : " + mytable.rows[i].cells[j].innerHTML  );
  }
}