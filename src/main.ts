import Alpine from "alpinejs";

import "./style.css";

window.Alpine = Alpine;

Alpine.store;
Alpine.store("darkMode", {
  on: false,

  toggle() {
    this.on = !this.on;
  },
} as any);

Alpine.start();
