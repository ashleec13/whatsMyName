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
    lastName = "Mermaid";
  } else if (hour >= 12 && hour < 18) {
    lastName = "Siren";
  } else {
    lastName = "Triton";
  }

  return lastName;
}

// BASED ON SWIMMING TIME PREFERENCE
function getPrefix() {
  const time = document.getElementById("time").value;
  let prefix = "";

  if (time === "Morning") {
    prefix = "Seafoam";
  } else if (time === "Day") {
    prefix = "Shellsong";
  } else if (time === "Night") {
    prefix = "Seamist";
  }

  return prefix;
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

  const time = document.getElementById("time").value;
  if (!time) {
    alert("Please select a swimming time!");
    return;
  }

  const firstName = getFirstName();
  const middleName = getMiddleName();
  const lastName = getLastName();
  const prefix = getPrefix();
  const suffix = getSuffix();

  const fullName = `${firstName} ${middleName} ${lastName} ${prefix} ${suffix}`;
  document.getElementById("result").innerText = fullName;
}


// AI WAS USED ON THIS WITH BUILT IN AI
// Event listener for button
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("generateBtn").addEventListener('click', generateMermaidName);
});


