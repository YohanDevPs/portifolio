let navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((item) => {
  console.log(item);
  item.addEventListener("click", function () {
    document.querySelector("nav ul li a.active").classList.remove("active");
    item.classList.add("active");
    document.querySelector("main > section.active").classList.remove("active");
    document
      .querySelector(`main > section${item.getAttribute("href")}`)
      .classList.add("active");
    console.log(`main > section${item.getAttribute("href")}`);
  });
});

document
  .querySelector("#sidebar .toggle-sidebar")
  .addEventListener("click", function () {
    document.querySelector("#sidebar").classList.toggle("open");
    
  });
