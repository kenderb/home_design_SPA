import ImageGrid from './imagesGrid';

class FilterList {
  constructor() {
    this.filterWrapper = document.querySelector('#button-list-wrapper');
    this.filterArray = ['all', 'Branding', 'Web', 'Photography', 'App'];
  }

  static handleClick(filterName) {
    const filterImages = new ImageGrid(filterName);
    filterImages.render();
  }

  render() {
    this.filterArray.forEach(item => {
      const listTag = document.createElement('li');
      const buttonTag = document.createElement('button');
      buttonTag.innerHTML = item;
      buttonTag.type = 'button';
      buttonTag.onclick = () => FilterList.handleClick(item);
      listTag.appendChild(buttonTag);
      this.filterWrapper.appendChild(listTag);
    });
  }
}

export default FilterList;