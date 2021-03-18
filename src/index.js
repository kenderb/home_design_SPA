import './styles/main.scss';
import ImageGrid from './imagesGrid';
import FilterList from './filterList';

const imageGrid = new ImageGrid('all');
imageGrid.render();

const generateFilters = new FilterList();
generateFilters.render();
