const calculateAge = () => {
  setInterval(() => {
    // Input BirthDate
    let birthDate = new Date(document.getElementById("date").value);

    // getTime() : returns number of milliseconds
    let currentTime = new Date();
    let ageInMs = currentTime.getTime() - birthDate.getTime();

    let ageInS = ageInMs / 1000; // to Seconds
    let ageInMin = ageInS / 60; // to Minutes
    let ageInHours = ageInMin / 60; // to Hours
    let ageInDays = ageInHours / 24; // to Days
    let ageInMonth = ageInDays / 30.43; // to Months
    let ageInYear = ageInMonth / 12; // to Years

    document.querySelector("#years h6").innerText = Math.floor(ageInYear);
    document.querySelector("#months h6").innerText = Math.floor(
      ageInMonth % 12
    );
    document.querySelector("#days h6").innerText = Math.floor(
      ageInDays % 30.43
    );
    document.querySelector("#hours h6").innerText = Math.floor(ageInHours % 24);
    document.querySelector("#min h6").innerText = Math.floor(ageInMin % 60);
    document.querySelector("#sec h6").innerText = Math.floor(ageInS % 60);
  }, 1000);
};

const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", calculateAge);
