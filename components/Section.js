// ↓ components/Section.js ↓

class Section {
  constructor({ items = [], renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._containerEl = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      const element = this._renderer(item);
      this.addItem(element);
    });
  }

  addItem(element) {
    this._containerEl.append(element);
  }
}

export default Section;
