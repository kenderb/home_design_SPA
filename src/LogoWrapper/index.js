import mainLogo from '../assets/images/mainLogo.svg';
import './logoWrapper.scss';

class LogoWrapper {
  constructor() {
    this.logoWrapper = document.querySelector('#logo-wrapper');
  }

  render() {
    const imageTag = document.createElement('img');
    const fontWrapper = document.createElement('div');
    const pTtitle = document.createElement('p');
    const pTag = document.createElement('p');
    imageTag.src = mainLogo;
    imageTag.alt = 'main Logo';
    imageTag.classList = 'main-logo';
    pTtitle.innerHTML = 'SNEAK';
    pTag.innerHTML = 'CREATIVE PORTOFLIO';
    this.logoWrapper.appendChild(imageTag);
    this.logoWrapper.appendChild(fontWrapper);
    fontWrapper.appendChild(pTtitle);
    fontWrapper.appendChild(pTag);
  }
}

export default LogoWrapper;