const imagesToload = document.querySelectorAll("[data-src]");

function loadImage(img) {
  const src = img.getAttribute("data-src");
  if (!src) {
    return;
  }

  img.src = src;
  img.removeAttribute("data-src");
}

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px -300px 0px",
};

const imgObserver = new IntersectionObserver((items, imgObserver) => {
  items.forEach((item) => {
    if (!item.isIntersecting) {
      return;
    } else {
      loadImage(item.target);
      imgObserver.unobserve(item.target);
    }
  });
}, imgOptions);

imagesToload.forEach((image) => {
  imgObserver.observe(image);
});

//time visits

actualDate = new Date();
timeBetweenP = document.getElementById("user-Visits");

let lastVisit = localStorage.getItem("lastVisit");

if (lastVisit == null) {
  localStorage.setItem("lastVisit", actualDate);
  lastVisit = localStorage.getItem("lastVisit");

  let lastVisitDate = new Date(lastVisit);

  calculateTimePassed(actualDate, lastVisitDate);
} else {
  let lastVisitDate = new Date(lastVisit);

  calculateTimePassed(actualDate, lastVisitDate);
}

function calculateTimePassed(actualDate, lastVisitDate) {
  let timeBetween = actualDate - lastVisitDate;
  let timeBetweenInMinutes = timeBetween / (1000 * 60);
  let timeBetweenInHours = timeBetweenInMinutes / 60;
  let timeBetweenInDays = timeBetweenInHours / 24;
  let timeBetweenInWeeks = timeBetweenInDays / 7;
  let timeBetweenInMonths = timeBetweenInWeeks / 4;
  let timeBetweenInYears = timeBetweenInMonths / 12;

  if (timeBetweenInDays < 7) {
    timePast = Math.round(timeBetweenInDays) + " days";
  } else if (timeBetweenInWeeks < 4) {
    timePast = Math.round(timeBetweenInWeeks) + " weeks";
  } else if (timeBetweenInMonths < 12) {
    timePast = Math.round(timeBetweenInMonths) + " months";
  } else if (timeBetweenInYears < 10) {
    timePast = Math.round(timeBetweenInYears) + " years";
  }

  timeBetweenP.innerHTML = "Time passed from the last visit: " + timePast;

  localStorage.setItem("lastVisit", actualDate);
}
