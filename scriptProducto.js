document.addEventListener("DOMContentLoaded", function () {
    const bodySystems = document.querySelectorAll(".body-system");
  
    bodySystems.forEach((system) => {
      const systemTitle = system.querySelector("h2");
      const medications = system.querySelectorAll(".medicamentos");
  
      systemTitle.addEventListener("click", function () {
        medications.forEach((medication) => {
          medication.style.display =
            medication.style.display === "none" ? "block" : "none";
        });
      });
    });
  });
  