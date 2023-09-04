const a = document.getElementById("date");
const birth = (e) => {
  let b = document.getElementById("age");
  // Getting All Birth Dates
  const birth_year = e.target.valueAsDate.getFullYear();
  const birth_month = e.target.valueAsDate.getMonth() + 1;
  const birth_date = e.target.valueAsDate.getDate();
  // Getting All Current Dates
  date = new Date();
  const cur_year = date.getFullYear();
  const cur_month = date.getMonth() + 1;
  const cur_date = date.getDate();
  let days_in_month = (month) => {
    days = new Date(0, month, 0);
    return days.getDate();
  };
  console.log(days_in_month(birth_month));
  if (e.target.valueAsDate > date) {
    b.innerHTML =
      "Don't rush things, Take your time and enjoy the womb service while it lasts!";
  } else {
    let age_year = cur_year - birth_year;
    let age_month, age_date;
    if (cur_month >= birth_month) {
      age_month = cur_month - birth_month;
    } else {
      age_year--;
      age_month = 12 + (cur_month - birth_month);
    }
    if (cur_date >= birth_date) {
      age_date = cur_date - birth_date;
    } else {
      age_month--;
      age_date =
        days_in_month(birth_year, birth_month) + (cur_date - birth_date);
      if (age_month < 0) {
        age_year--;
        age_month = 11;
      }
    }

    b.innerHTML = `You are <span>${age_year}</span> year, <span>${age_month}</span> month and <span>${age_date}</span> days old.`;
  }
};
a.addEventListener("change", birth);

const re = document.getElementById("reset");
const saaf = () => {
  let b = document.getElementById("age");
  b.innerHTML = "";
  a.value = "";
};
re.addEventListener("click", saaf);
