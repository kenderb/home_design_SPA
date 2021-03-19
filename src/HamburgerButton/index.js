import './HamburgerButton.scss';
import hamburgerIcon from '../assets/images/hamburger_icon.svg';

class HamburgerButton {
  constructor() {
    this.hamburgerButton = document.querySelector('#hamburger-button');
  }

  static handleClick() {
    const navMenu = document.querySelector('#nav-menu');
    navMenu.classList.toggle('hidden');
  }

  render() {
    const closeButton = document.querySelector('#close-button');
    const searchButton = document.querySelector('#search-button');
    const imageTag = document.createElement('img');
    searchButton.onclick = () => HamburgerButton.handleClick();
    closeButton.onclick = () => HamburgerButton.handleClick();
    imageTag.src = hamburgerIcon;
    imageTag.alt = 'hamburger icon';
    this.hamburgerButton.appendChild(imageTag);
    this.hamburgerButton.onclick = () => HamburgerButton.handleClick();
  }
}
export default HamburgerButton;