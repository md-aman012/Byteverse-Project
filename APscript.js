
  function filterDoctors() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const specialityFilter = document.getElementById("specialityFilter").value.toLowerCase();
    const locationFilter = document.getElementById("locationFilter").value.toLowerCase();
    const cards = document.querySelectorAll(".box");

    cards.forEach(card => {
      const name = card.querySelector(".card-title")?.textContent.toLowerCase() || "";
      const speciality = card.querySelector(".speciality")?.textContent.toLowerCase() || "";
      const location = card.querySelector("h6 i.fa-location-dot")?.parentElement.textContent.toLowerCase() || "";

      const matchesText = name.includes(searchInput) || speciality.includes(searchInput);
      const matchesSpeciality = !specialityFilter || speciality.includes(specialityFilter);
      const matchesLocation = !locationFilter || location.includes(locationFilter);

      if (matchesText && matchesSpeciality && matchesLocation) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

