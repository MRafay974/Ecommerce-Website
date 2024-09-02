document.addEventListener("DOMContentLoaded", function () {
  const tickBox = document.querySelector("#tickBox");
  const customCheckmark = document.querySelector(".fa-check");

  tickBox.addEventListener("click", () => {
    customCheckmark.style.display =
      customCheckmark.style.display === "block" ? "none" : "block";
  });
});
