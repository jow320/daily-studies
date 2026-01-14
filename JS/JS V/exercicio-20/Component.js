export class Component {
  #element = null;
  constructor(tag, parents, options) {
    this.tag = tag;
    this.parents = parents;
    this.options = options;
    this.build();
  }
  build() {
    this.#element = document.createElement(this.tag);
    Object.assign(this.#element, this.options);
    return this;
  }
  render() {
    if (this.parent instanceof Component) {
      this.parent.getElement().append(this.#element);
    } else {
      document.querySelector(this.parent).append(this.#element);
    }
  }
}
