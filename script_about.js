const dropdown = document.querySelector(".dropdown");
const dropdownContent = dropdown.querySelector(".dropdown-content");

let timeout;

dropdown.addEventListener('mouseenter', () =>{
  clearTimeout(timeout);
  dropdownContent.style.display = "block";
});

dropdown.addEventListener('mouseleave', () =>{
  timeout = setTimeout(() =>{
    dropdownContent.style.display = "none";
  }, 300);
});