import ImageGrid from '../imagesGrid';
import './filterList.scss';

class FilterList {
  constructor() {
    this.filterWrapper = document.querySelector('#button-list-wrapper');
    this.filterArray = ['all', 'Branding', 'Web', 'Photography', 'App'];
  }

  static handleClick(event, filterName, nameList) {
    const filterImages = new ImageGrid(filterName);
    filterImages.render();
    event.target.classList.toggle('active-button');
    nameList.forEach(element => {
      if (element !== event.target.name) {
        const getElement = document.querySelector(`#${element}`);
        getElement.classList = '';
      }
    });
  }

  render() {
    this.filterArray.forEach(item => {
      const listTag = document.createElement('li');
      const buttonTag = document.createElement('button');
      if (item === 'all') {
        buttonTag.classList = 'active-button';
      }
      buttonTag.innerHTML = item;
      buttonTag.type = 'button';
      buttonTag.name = item;
      buttonTag.id = item;
      buttonTag.onclick = (e) => FilterList.handleClick(e, item, this.filterArray);
      listTag.appendChild(buttonTag);
      this.filterWrapper.appendChild(listTag);
    });
  }
}

export default FilterList;