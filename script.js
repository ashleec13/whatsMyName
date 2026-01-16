let selectedMonth = "";

function checkMonth(month) {
  selectedMonth = month;
  
 
  const allButtons = document.querySelectorAll("button");
  allButtons.forEach(btn => {
    btn.classList.remove("month-selected");
  });
  

  allButtons.forEach(btn => {
    if (btn.textContent === month) {
      btn.classList.add("month-selected");
    }
  });
}

// MIX OF DIFFERNT THINGS GOOGLED AND A BIT OF AI HELP
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

// HELP WITH AI BC IT WAS NOT WORKING
function getMiddleName() {
  const activityElement = document.querySelector('input[name="activity"]:checked');
  const activityValue = activityElement ? activityElement.value : "";

  switch (activityValue) {
    case "Swim":
      return "Bubble";
    case "Play in Sand":
      return "Splash";
    case "Tan":
      return "Twinkle";
    default:
      return "Shine";
  }
}

// FOUND ON MDN WEB DOCS
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

// FOUND ON BOOTSTRAP
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

// FOUND ON W3 SCHOOLS 
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


// AI WAS USED ON THIS WITH BUILT IN AI
// Event listener for button
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("generateBtn").addEventListener('click', generateMermaidName);
});


