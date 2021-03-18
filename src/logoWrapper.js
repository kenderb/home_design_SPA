import mainLogo from './assets/images/mainLogo.svg';

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
    this.logoWrapper.appendChild(imageTag);
    this.logoWrapper.appendChild(fontWrapper);
    fontWrapper.appendChild(pTtitle);
    fontWrapper.appendChild(pTag);
  }
}

export default LogoWrapper;