import unsplash from './api/unspalsh';

class ImageGrid {
  constructor(imagesName) {
    this.imagesName = imagesName;
    this.imagesWrapper = document.querySelector('#images-wrapper');
  }

  handleLoading() {
    this.imagesWrapper.innerHTML = 'loading...';
  }

  handleError(error) {
    this.imagesWrapper.innerHTML = `Not posible!!! ${error}`;
  }

  handleSuccess(response) {
    console.log(response);
  }

  async handleRequest() {
    try {
      this.handleLoading();
      const response = await unsplash.get('search/photos/', {
        params: {
          query: this.imagesName,
        },
      });
      this.handleSuccess(response.data.results);
    } catch (error) {
      this.handleError(error);
    }
  }

  render() {
    this.handleRequest();
  }
}

export default ImageGrid;