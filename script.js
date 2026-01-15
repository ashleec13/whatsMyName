let selectedMonth = "";

function checkMonth(month) {
  selectedMonth = month;
  
  // Remove highlight from all month buttons
  const allButtons = document.querySelectorAll("button");
  allButtons.forEach(btn => {
    btn.classList.remove("month-selected");
  });
  
  // Find and highlight the clicked button
  allButtons.forEach(btn => {
    if (btn.textContent === month) {
      btn.classList.add("month-selected");
    }
  });
}

// A) getFirstName() — PREFIX BY MONTH
function getFirstName() {
  if (
    selectedMonth === "January" ||
    selectedMonth === "February" ||
    selectedMonth === "March" ||
    selectedMonth === "April"
  ) {
    return "Sparkle";
  } else if (
    selectedMonth === "May" ||
    selectedMonth === "June" ||
    selectedMonth === "July" ||
    selectedMonth === "August"
  ) {
    return "Shimmer";
  } else {
    return "Glowy";
  }
}

// C) getMiddleName() — SWITCH
function getMiddleName() {
  const activity = document.querySelector('input[name="activity"]:checked')?.value;
  let middleName = "";

  switch (activity) {
    case "Swim":
      middleName = "Bubble";
      break;

    case "Play in Sand":
      middleName = "Splash";
      break;

    case "Tan":
      middleName = "Twinkle";
      break;

    default:
      middleName = "Shine";
      break;
  }

  return middleName;
}

// D) getLastName() — TIME OF DAY
function getLastName() {
  const hour = new Date().getHours();
  let lastName = "";

  if (hour >= 6 && hour < 12) {
    lastName = "Seafoam";
  } else if (hour >= 12 && hour < 18) {
    lastName = "Shellsong";
  } else {
    lastName = "Seamist";
  }

  return lastName;
}

// E) getSuffix() — DROPDOWN
function getSuffix() {
  const weather = document.getElementById("weather").value;
  let suffix = "";

  if (weather === "Warm and sunny") {
    suffix = "of the Sea";
  } else if (weather === "Cool and breezy") {
    suffix = "of the Bright";
  } else if (weather === "Calm and cloudy") {
    suffix = "of the Ocean";
  }

  return suffix;
}

// F) MAIN GENERATE FUNCTION
function generateMermaidName() {
  if (!selectedMonth) {
    alert("Please select a month!");
    return;
  }

  const activity = document.querySelector('input[name="activity"]:checked');
  if (!activity) {
    alert("Please select an activity!");
    return;
  }

  const weather = document.getElementById("weather").value;
  if (!weather) {
    alert("Please select weather!");
    return;
  }

  const firstName = getFirstName();
  const middleName = getMiddleName();
  const lastName = getLastName();
  const suffix = getSuffix();

  const fullName = `${firstName} ${middleName} ${lastName} ${suffix}`;
  document.getElementById("result").innerText = fullName;
}

// Event listener for button
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("generateBtn").addEventListener('click', generateMermaidName);
});

// INPUT VALIDATION
function validateInputs() {
  const activityChecked = document.querySelector('input[name="activity"]:checked');
  const weather = document.getElementById("weather").value;

  if (!activityChecked || weather === "") {
    alert("Not quite yet! A few shells are still missing. Answer all the questions to discover your mermaid name.");
    return false;
  }

  return true;
}

// MAIN FUNCTION
function generateMermaidName() {
  if (!validateInputs()) return;

  const middle = getMiddleName();
  const last = getLastName();
  const suffix = getSuffix();

  document.getElementById("result").innerText =
    `Your mermaid name is: ${middle} ${last} ${suffix}`;
}

// BUTTON EVENT LISTENER
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("generateBtn")
    .addEventListener("click", generateMermaidName);
});


