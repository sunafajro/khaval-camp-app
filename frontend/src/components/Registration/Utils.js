import Moment from "moment";

export const Aux = (props) => props.children;

export const calculateCost = (birthDate, days, residence, jobEl) => {
  const age = Moment().diff(birthDate, "years");
  /* считаем первоначальный взнос */
  let firstPay = 0;
  if (age && days) {
    /* для тех кто приезжает на все дни */
    if (days && days === "7") {
      if (Moment().isBefore("2018-03-01")) {
        if (age < 5) {
          firstPay = 0;
        } else if (age > 4 && age < 12) {
          firstPay = 300;
        } else if (age > 11 && age < 17) {
          firstPay = 400;
        } else {
          if (jobEl === "student") {
            firstPay = 500;
          } else {
            firstPay = 700;
          }
        }
      } else if (
        Moment().isAfter("2018-02-28") &&
        Moment().isBefore("2018-04-30")
      ) {
        if (age < 5) {
          firstPay = 0;
        } else if (age > 4 && age < 12) {
          firstPay = 500;
        } else if (age > 11 && age < 17) {
          firstPay = 600;
        } else {
          if (jobEl === "student") {
            firstPay = 700;
          } else {
            firstPay = 900;
          }
        }
      } else if (
        Moment().isAfter("2018-05-01") &&
        Moment().isBefore("2018-06-30")
      ) {
        if (age < 5) {
          firstPay = 0;
        } else if (age > 4 && age < 12) {
          firstPay = 600;
        } else if (age > 11 && age < 17) {
          firstPay = 700;
        } else {
          if (jobEl === "student") {
            firstPay = 900;
          } else {
            firstPay = 1200;
          }
        }
      } else {
        if (age < 5) {
          firstPay = 0;
        } else if (age > 4 && age < 12) {
          firstPay = 800;
        } else if (age > 11 && age < 17) {
          firstPay = 900;
        } else {
          if (jobEl === "student") {
            firstPay = 1200;
          } else {
            firstPay = 1500;
          }
        }
      }
    } else {
      if (age < 5) {
        firstPay = 0;
      } else if (age > 4 && age < 12) {
        firstPay = 300 + days * 300 / 2;
      } else if (age > 11 && age < 17) {
        firstPay = 400 + days * 300 / 2;
      } else {
        if (jobEl === "student") {
          firstPay = 500 + days * 300 / 2;
        } else {
          firstPay = 700 + days * 300 / 2;
        }
      }
    }
  }

  let feed = 0;
  if (age && days) {
    if (age < 5) {
      feed = 0;
    } else if (age > 4 && age < 12) {
      feed = 480 - 480 * 0.2;
    } else {
      feed = 480 * parseInt(days, 10);
    }
  }

  let roomPay = 0;
  if (residence && days) {
    switch(residence) {
      case "tent":   roomPay = 200 * parseInt(days, 10); break;
      case "2floor": roomPay = 500 * parseInt(days, 10); break;
      case "corp20": roomPay = 600 * parseInt(days, 10); break;
      case "zabava": roomPay = 700 * parseInt(days, 10); break;
      default: 
    }
  }

  let lang = 0;
  if (age && age > 7) {
    lang = 300;
  }
  const totalCostParts = firstPay.toString() + " + " + roomPay.toString() + " + "  + feed.toString() + " + " + lang.toString();
  const totalCost = firstPay + roomPay + feed + lang;
  return { totalCost, totalCostParts };
};

export const getCsrfToken = () => {
  return new Promise((resolve, reject) => {
    fetch("/csrfToken", {
      method: "GET",
      accept: "application/json",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Произошла ошибка!");
        }
        return response.json();
      })
      .then(csrf => {
        resolve(csrf);
      })
      .catch(error => {
        reject(error.message);
      });
  });
}