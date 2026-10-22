const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const calcBtn = document.querySelector(".calc-age");

//Date Constructor
let date = new Date();

let validDay = false;
let validMontt = false;
let validYear = false;

// Check Validet Days
dayInput.addEventListener("input", () => {
  let numDay = parseInt(day.value);
  if (!isNaN(numDay) && numDay >= 1 && numDay <= 31) {
    validDay = true;
    dayInput.classList.remove("invalid");
    document.querySelector(".invalid-data.data-day").style.display = "none";
  } else {
    validDay = false;
    document.querySelector(".invalid-data.data-day").style.display = "block";
    dayInput.classList.add("invalid");
  }
});

//Check Validet Month
monthInput.addEventListener("input", () => {
  let numMonth = parseInt(month.value);
  if (!isNaN(numMonth) && numMonth >= 1 && numMonth <= 12) {
    validMontt = true;
    monthInput.classList.remove("invalid");
    document.querySelector(".invalid-data.data-month").style.display = "none";
  } else {
    validMontt = false;
    document.querySelector(".invalid-data.data-month").style.display = "block";
    monthInput.classList.add("invalid");
  }
});

// //Check Validet Year
yearInput.addEventListener("input", () => {
  let numYear = parseInt(year.value);
  if (!isNaN(numYear) && numYear >= 1900 && numYear <= date.getFullYear()) {
    validYear = true;
    yearInput.classList.remove("invalid");
    document.querySelector(".invalid-data.data-year").style.display = "none";
  } else {
    validYear = false;
    document.querySelector(".invalid-data.data-year").style.display = "block";
    yearInput.classList.add("invalid");
  }
});

function calcAge() {
  if (validDay && validYear && validMontt) {
    let birthDay = new Date(year.value, month.value - 1, day.value);
    // Calc Age
    let userYears = date.getFullYear() - birthDay.getFullYear();
    let userMonths = date.getMonth() - birthDay.getMonth();
    let userDays = date.getDate() - birthDay.getDate();
    // Handel Nagitev Values
    if (userDays < 0) {
      userMonths--;
      let prevMonth = new Date(date.getFullYear(), date.getMonth(), 0);
      userDays += prevMonth.getDate();
    }

    if (userMonths < 0) {
      userYears--;
      userMonths += 12;
    }
    //Show Age
    document.querySelector(".show-years span").textContent = userYears;
    document.querySelector(".show-months span").textContent = userMonths;
    document.querySelector(".show-days span").textContent = userDays;
  }
}

calcBtn.addEventListener("click", calcAge);
