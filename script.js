function toggleDetail(id) {
  var detail = document.getElementById(id);
  if (detail.style.display === "none" || detail.style.display === "") {
    detail.style.display = "block";
  } else {
    detail.style.display = "none";
  }
}