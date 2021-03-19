import twoBlocks from '../assets/images/twoBlocks.svg';
import fourBlocks from '../assets/images/four-square-icon.svg';
import './iconFilters.scss';

export const createFourBlocksIcon = () => {
  const fourSquare = document.querySelector('#four-square-button');
  const iconFourBlocks = document.createElement('img');
  iconFourBlocks.src = fourBlocks;
  fourSquare.appendChild(iconFourBlocks);
};

export const createTwoBlocksIcon = () => {
  const twoBlocksbutton = document.querySelector('#two-blocks-button');
  const icontwoBlocksbutton = document.createElement('img');
  icontwoBlocksbutton.src = twoBlocks;
  twoBlocksbutton.appendChild(icontwoBlocksbutton);
};
