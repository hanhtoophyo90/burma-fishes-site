const fishGrid = document.getElementById('fish-grid');
const searchInput = document.getElementById('search-input');
const noResults = document.getElementById('no-results');

function renderSpecies(data) {
  fishGrid.innerHTML = "";
  if (data.length === 0) {
    noResults.classList.remove("hidden");
    return;
  }
  noResults.classList.add("hidden");
  data.forEach(fish => {
    fishGrid.innerHTML += `
      <div class="bg-white p-4 shadow rounded">
        <img src="${fish.photo_url}" alt="${fish.name}" class="w-full h-48 object-cover mb-2 rounded">
        <h2 class="text-xl font-bold text-blue-600">${fish.name}</h2>
        <p class="italic text-sm text-gray-500">${fish.scientific_name}</p>
        <p class="text-gray-700 mt-2">${fish.description}</p>
        <p class="text-sm mt-2"><strong>Habitat:</strong> ${fish.habitat}</p>
        <p class="text-sm"><strong>Status:</strong> ${fish.conservation_status}</p>
        <p class="text-xs text-gray-400 mt-2">Photo by ${fish.photo_credit}</p>
      </div>
    `;
  });
}

function handleSearch() {
  const term = searchInput.value.toLowerCase();
  const results = fishData.filter(fish =>
    fish.name.toLowerCase().includes(term) ||
    fish.scientific_name.toLowerCase().includes(term)
  );
  renderSpecies(results);
}

searchInput.addEventListener("input", handleSearch);
window.onload = () => renderSpecies(fishData);
