class CustomSplideSlider extends HTMLElement {
  constructor() {
    super();

    this.element = this.querySelector(".splide");
    this.options = JSON.parse(this.getAttribute("options"));
    console.log("options: ", this.options);
    this.initSlider();
  }

  initSlider() {
    new Splide(this.element, this.options).mount();
  }
}

customElements.define("custom-splide-slider", CustomSplideSlider);
