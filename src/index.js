import './styles/main.scss';
import ImageGrid from './imagesGrid';
import FilterList from './filterList';
import LogoWrapper from './LogoWrapper';
import HamburgerButton from './HamburgerButton';
import { createFourBlocksIcon, createTwoBlocksIcon } from './filterIcons/iconFilters';
import createSocialMediaIcons from './socialMediaIcons';
import createSearcIcon from './searchIcon';

const hamburgerButton = new HamburgerButton();
hamburgerButton.render();

const logoWrapper = new LogoWrapper();
logoWrapper.render();

const imageGrid = new ImageGrid('all');
imageGrid.render();
imageGrid.setImageGap();

const generateFilters = new FilterList();
generateFilters.render();

createSearcIcon();
createFourBlocksIcon();
createTwoBlocksIcon();
createSocialMediaIcons();
