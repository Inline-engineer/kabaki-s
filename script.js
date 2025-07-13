
  const pigBreeds = [
    {
      name: "Large White (Adult)",
      type: "largewhite",
      age: "adult",
      image: "img/l w.jpg",
      description: "Robust and fast-growing. Great for meat production."
    },
    {
      name: "Large White Piglet",
      type: "largewhite",
      age: "piglet",
      image: "img/l w p.webp",
      description: "Young and healthy piglet. Requires warmth and care."
    },
    {
      name: "Landrace (Adult)",
      type: "landrace",
      age: "adult",
      image: "img/l r a.jpg",
      description: "Highly reproductive and excellent mothering breed."
    },
    {
      name: "Landrace Piglet",
      type: "landrace",
      age: "piglet",
      image: "img/images.jpg",
      description: "Landrace piglet. Gentle and easy to rear."
    },
    {
      name: "Duroc (Adult)",
      type: "duroc",
      age: "adult",
      image: "img/h.jpg",
      description: "Hardy breed, known for flavorful meat."
    },
    {
      name: "Duroc Piglet",
      type: "duroc",
      age: "piglet",
      image: "img/piglets.jpg",
      description: "Cute and chubby Duroc piglet!"
    }
  ];
  
  function renderGallery(breedFilter = "all", ageFilter = "all") {
    const gallery = document.getElementById("breedGallery");
    gallery.innerHTML = "";
  
    const filtered = pigBreeds.filter(pig => {
      const breedMatch = breedFilter === "all" || pig.type === breedFilter;
      const ageMatch = ageFilter === "all" || pig.age === ageFilter;
      return breedMatch && ageMatch;
    });
  
    filtered.forEach(pig => {
      const card = document.createElement("div");
      card.className = "breed-card";
      card.innerHTML = `
        <img src="${pig.image}" alt="${pig.name}">
        <h3>${pig.name}</h3>
        <p>${pig.description}</p>
      `;
      gallery.appendChild(card);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderGallery();
  
    document.getElementById("breedFilter").addEventListener("change", () => {
      const breed = document.getElementById("breedFilter").value;
      const age = document.getElementById("ageFilter").value;
      renderGallery(breed, age);
    });
  
    document.getElementById("ageFilter").addEventListener("change", () => {
      const breed = document.getElementById("breedFilter").value;
      const age = document.getElementById("ageFilter").value;
      renderGallery(breed, age);
      document.getElementById('breedSelect').addEventListener('change', function () {
        const selected = this.value;
        document.querySelectorAll('.breed-card').forEach(card => {
          const breed = card.getAttribute('data-breed');
          card.style.display = (selected === 'all' || selected === breed) ? 'block' : 'none';
        });
      });
  
      function submitMessage() {
        const messageBox = document.querySelector('textarea');
        if (messageBox.value.trim() === '') {
          alert('Please enter a message.');
          return;
        }
        alert('Thank you for your message!');
        messageBox.value = '';
      }
    });
  });
  const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    button.classList.toggle("active");
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

  