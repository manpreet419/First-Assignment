function init() {
    const setInit = document.querySelectorAll(".panel");
    setInit.forEach((cur) => {
      cur.classList.remove("open", "format-text");
    });
  }
  document.querySelectorAll(".panel").forEach((cur) => {
    cur.addEventListener("click", function (el) {
      if (!cur.classList.contains("open")) {
        init();
        cur.classList.add("open","format-text");
       
      } else {
        init();
      }
    });
  });
  