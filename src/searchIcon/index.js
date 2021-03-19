import searchIcon from '../assets/images/search-icon.svg';
import './searchIcon.scss';

const createSearcIcon = () => {
  const getButton = document.querySelector('#search-button');
  const icon = document.createElement('img');
  icon.src = searchIcon;
  icon.alt = searchIcon;
  getButton.appendChild(icon);
};

export default createSearcIcon;