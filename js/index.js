let date = new Date();
let year = date.getFullYear();

let year_container = document.getElementById('author');

year_container.innerHTML = `Bryan Portillo - ${year}`;