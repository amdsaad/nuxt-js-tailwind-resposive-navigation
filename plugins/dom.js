const header = document.querySelector("header");

let options = {
  root: null,
  threshold: 0.9,
  rootMargin: "80px"
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("bg-gray-800");
      header.classList.add("bg-opacity-75");
      header.classList.add("text-white");
      return;
    }
    header.classList.remove("bg-gray-800");
    header.classList.remove("bg-opacity-75");
    header.classList.remove("text-white");
  });
}, options);

observer.observe(document.querySelector("#inter").children[0]);
