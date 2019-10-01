class PixbayApiService {
  constructor() {
    this.apiKey = '8388315-65cb8de1d559d7b3d44e4d9ed',
    this.data = {
      order: 'popular',
      lang: 'en',
      orientation: 'vertical',
      minWidth: 400,
      minHeight: 700
    },
    this.baseUrl = 'https://pixabay.com/';
  }
  
  async createRequest(request) {
    let url = this.baseUrl + 
    'api/?key=' + this.apiKey + 
    '&order=' + this.data.order + 
    '&lang='+ this.data.lang + 
    '&orientation=' + this.data.orientation + 
    '&min_width=' + this.data.minWidth + 
    '&min_height=' + this.data.minHeight + '&';

    if(request) {
      url += request
    }
    
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(response => response.json())
      .then(response => resolve(response))
      .catch(error => reject(error))
    })
  }

 getImageBySearchPhrase(searchPhrase) {
    const request = 'q=' + searchPhrase;

    return this.createRequest(request);
  }
}

const pixbayApiService = new PixbayApiService();

export default pixbayApiService;