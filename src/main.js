let accordions = document.querySelectorAll(".accordion-item");
accordions.forEach((item) => {
  let label = item.querySelector(".accordion-header");
  label.addEventListener("click", () => {
    accordions.forEach((accordionItem) => {
      accordionItem.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});

document.getElementById("btnA").onclick = function() {
  // Get the price list and hide it
  document.getElementById("monthly").classList.add("hidden");
  document.getElementById("annually").classList.remove("hidden");
  this.classList.add('bg-black', 'text-white');
  document.getElementById("btnM").classList.remove('bg-black', 'text-white');
};

document.getElementById("btnM").onclick = function() {
  // Get the price list and show it
  document.getElementById("monthly").classList.remove("hidden");
  document.getElementById("annually").classList.add("hidden");
  this.classList.add('bg-black', 'text-white');
  document.getElementById("btnA").classList.remove('bg-black', 'text-white');
};

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.jos');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('flip'); // Thêm lớp để lật thẻ
        observer.unobserve(entry.target); // Ngừng theo dõi sau khi lật thẻ
      }
    });
  });

  cards.forEach(card => {
    observer.observe(card); // Theo dõi các thẻ
  });
});
