const tabsBtn = document.querySelectorAll(".tab-nav-btn");
const tabsItems = document.querySelectorAll(".tab-content");

tabsBtn.forEach((x) => {
  x.addEventListener("click", function () {
    let currentBtn = x;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains("active")) {
      tabsBtn.forEach((y) => {
        y.classList.remove("active");
      });

      tabsItems.forEach((y) => {
        y.classList.remove("active");
      });
    }

    currentBtn.classList.add("active");
    currentTab.classList.add("active");
  });
});

document.querySelector(".tab-nav-btn").click();
