import Alpine from "alpinejs";

import "./style.css";

window.Alpine = Alpine;

Alpine.store("theme", {
  dark: true,
  toggle() {
    this.dark = !this.dark;
  },
} as any);

Alpine.start();
