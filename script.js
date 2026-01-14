function checkMonth(month) {
  let result = "";

  if (
    month === "January" ||
    month === "February" ||
    month === "March" ||
    month === "April"
  ) {
    result = "Sparkle";
  } else if (
    month === "May" ||
    month === "June" ||
    month === "July" ||
    month === "August"
  ) {
    result = "Shimmer";
  } else {
    result = "Glowy";
  }

  document.getElementById("result").innerText = result;
}
