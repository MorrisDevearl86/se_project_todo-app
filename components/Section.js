class Section {
Constructor({items, render, containerSector}) {

    this._items = items;
    this._render = render;
    this._container = document.querySelector(`.${containerSector}`);
    renderItems() 
        this._items.forEach((item => {
            this._render(item);
        }));
  }
}

export default Section;