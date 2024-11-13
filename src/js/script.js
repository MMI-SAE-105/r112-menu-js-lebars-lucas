
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const class = ad_class.body;


toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed : ", isClosed);
  // Mise à jour des attributs ARIA pour accessibilité
  nav.ariaHidden = isOpen;
  toggle.ariaExpanded = isClosed;
  ad_class.classlist.toggle("noscroll")
});