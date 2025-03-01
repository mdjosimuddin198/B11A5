// find all buttons
const completeBtns = document.querySelectorAll(".complete-btn");

let navDigit = converedNumberInnerText("nav-digit");
let taskAssigned = converedNumberInnerText("task-assigned");

let isTaskComplete = document.getElementById("activity-log-innerText");

// background color
let body = document.querySelector("body");
const themeBtn = document.getElementById("bg-color");
themeBtn.addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor = randomColor;
});
// click events
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let now = new Date();
let monthname = months[now.getMonth()];
let year = now.getFullYear();
let date = now.getDate();
let day = days[now.getDay()];
let daynames = day;
// dadeline
const dadelines = document.querySelectorAll(".deadline");
dadelines.forEach((dadeline) => {
  dadeline.innerText = `${date} ${monthname} ${year}`;
});
document.getElementById("time").innerText = `${monthname} ${date} ${year}`;
document.getElementById("day").innerText = day;

// commplete btn click
completeBtns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    navDigit++;
    taskAssigned--;
    document.getElementById("nav-digit").innerText = navDigit;
    document.getElementById("task-assigned").innerText = taskAssigned;
    alert("Board Updated Succefully");
    btn.disabled = true;
    btn.classList.add("bg-[#dbe4ff]");
    if (index === completeBtns.length - 1) {
      alert("Congratulations You have completed all the current tasks");
    }

    // find day and time
    now = new Date();

    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");

    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    hours = hours.toString().padStart(2, "0");

    // appendChild
    const card = btn.closest(".card");
    const title = card.querySelector("h2").innerText;
    let li = document.createElement("li");
    li.innerHTML = `You have Complete The Task ${title} at ${hours}:${minutes}:${seconds} ${ampm}`;

    li.classList.add(
      "text-gray-400",
      "rounded-md",
      "p-2",
      "bg-[rgba(55,82,253,0.1)]"
    );
    isTaskComplete.appendChild(li);
  });
});

// clearHistory button click
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () => {
  isTaskComplete.innerHTML = "";
});
