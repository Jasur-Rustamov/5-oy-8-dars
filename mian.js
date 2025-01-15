const urlImageInput = document.getElementById("urlImage");
const addBtn = document.getElementById("add");
const oldingiBtn = document.getElementById("oldingi");
const keyingiBtn = document.getElementById("keyingi");
const sliderRasm = document.getElementById("sliderRasm");

let images = JSON.parse(localStorage.getItem("images")) || [];
let currentIndex = parseInt(localStorage.getItem("currentIndex")) || 0;

if (images.length > 0) {
  sliderRasm.src = images[currentIndex];
}

addBtn.addEventListener("click", function () {
  const urlImage = urlImageInput.value.trim();
  if (urlImage) {
    images.push(urlImage);
    localStorage.setItem("images", JSON.stringify(images));
    urlImageInput.value = "";
    sliderRasm.src = urlImage;
    currentIndex = images.length - 1;
    localStorage.setItem("currentIndex", currentIndex);
  } else {
    alert("Iltimos, rasm URL kiriting!");
  }
});

oldingiBtn.addEventListener("click", function () {
  if (images.length === 0) {
    alert("Hech qanday rasm yo'q!");
    return;
  }
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  sliderRasm.src = images[currentIndex];
  localStorage.setItem("currentIndex", currentIndex);
});

keyingiBtn.addEventListener("click", function () {
  if (images.length === 0) {
    alert("Hech qanday rasm yo'q!");
    return;
  }
  currentIndex = (currentIndex + 1) % images.length;
  sliderRasm.src = images[currentIndex];
  localStorage.setItem("currentIndex", currentIndex);
});


// 1. Barcha postlarni olish

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  })
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(function (data) {
      data.forEach(function (post) {
        console.log(`Title: ${post.title}`);
        console.log(`Body: ${post.body}`);
        console.log("__________________________");
      });
    })
    .catch(function (error) {
      console.log("Xatolik bor!!!", error);
    });
});

// 2. Random user ma'lumotlarini olish
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://randomuser.me/api/")
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(function (data) {
      const user = data.results[0];
      console.log(`Ism: ${user.name.first} ${user.name.last}`);
      console.log(`Email: ${user.email}`);
      console.log(`Manzil: ${user.location.city}, ${user.location.country}`);
      console.log("__________________________");
    })
    .catch(function (error) {
      console.log("Xatolik", error);
    });
});

// 3. Dunyo bo'ylab COVID-19 statistikasi

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://disease.sh/v3/covid-19/all", {
    method: "GET",
  })
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error("Ma'lumotlar olinmadi");
      }
    })
    .then(function (data) {
      console.log(`Jami kasallanganlar: ${data.cases}`);
      console.log(`Jami vafot etganlar: ${data.deaths}`);
      console.log(`Jami tuzalganlar: ${data.recovered}`);
      console.log("__________________________________");
    })
    .catch(function (error) {
      console.log("Xatolik bor!!!", error);
    });
});

// 4. Bitcoin narxi
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://api.coindesk.com/v1/bpi/currentprice.json", {
    method: "GET",
  })
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(function (data) {
      const bitcoin = data.bpi.USD.rate;
      console.log(`Bitcoin narxi: ${bitcoin}`);
      console.log("___________________________");
    })
    .catch(function (error) {
      console.log("Xatolik bor!!!", error);
    });
});

// 5. Havo harorati haqida ma'lumot
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://goweather.herokuapp.com/weather/Tashkent", {
    method: "GET",
  })
    .then(function (response) {
      if (response.status == 200) {
        return response.json();
      }
    })
    .then(function (data) {
      console.log(`Toshkentdagi harorat: ${data.temperature}`);
      console.log("________________________________________");
    })
    .catch(function (error) {
      console.error("Xatolik!!", error);
    });
});