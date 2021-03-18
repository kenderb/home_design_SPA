import './styles/main.scss';
import ImageGrid from './imagesGrid';
import FilterList from './filterList';
import LogoWrapper from './LogoWrapper';

const logoWrapper = new LogoWrapper();
logoWrapper.render();

const imageGrid = new ImageGrid('all');
imageGrid.render();

const generateFilters = new FilterList();
generateFilters.render();
