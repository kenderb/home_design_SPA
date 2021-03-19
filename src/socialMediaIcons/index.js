import './socialMediaIcons.scss';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../assets/images/social-media-icons/', false, /\.(svg)$/));

const addicons = (route) => {
  const socialMediaList = document.querySelector('#social-media-list');
  const li = document.createElement('li');
  const aTag = document.createElement('a');
  const image = document.createElement('img');
  aTag.href = '/';
  image.src = route;
  image.alt = route;
  image.classList.add('social-media-icon');
  li.appendChild(aTag);
  aTag.appendChild(image);
  socialMediaList.appendChild(li);
};

const createSocialMediaIcons = () => {
  images.forEach(element => {
    addicons(element.default);
  });
};

export default createSocialMediaIcons;