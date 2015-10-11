import rp from 'request-promise';

class YTS {
  constructor(url = 'https://yts.to/api/v2/') {
    this.apiUrl = url;
  }

  findMovie(searchString) {
    return rp({url: this.apiUrl + 'list_movies.json?query_term=' + searchString, json:true});
  }
}

export default YTS;
