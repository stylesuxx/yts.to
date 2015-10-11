import rp from 'request-promise';

class YTS {
  constructor(url = 'https://yts.to/api/v2/') {
    this.apiUrl = url;

    this.buildQuery = function(options) {
      var queryString = '';

      for(var index in options) {
        queryString += index + '=' + options[index] + '&'
      }
      return queryString
    }
  }

  findMovie(searchString, options = {}) {
    var query = this.buildQuery(options);
    var url ='list_movies.json?query_term=' + searchString + '&' + query;
    return rp({url: this.apiUrl + url, json:true});
  }

  getDetails(movieId) {
    return rp({url: this.apiUrl + 'movie_details.json?movie_id=' + movieId, json:true});
  }
}

export default YTS;
