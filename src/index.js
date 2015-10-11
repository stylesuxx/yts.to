import rp from 'request-promise';
import merge from 'merge';

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
    var url = 'list_movies.json?query_term=' + searchString + '&' + query;
    return rp({url: this.apiUrl + url, json:true});
  }

  getDetails(movieId, options = {}) {
    var query = this.buildQuery(options);
    var url = 'movie_details.json?movie_id=' + movieId + '&' + query;
    return rp({url: this.apiUrl + url, json:true});
  }

  getSuggestions(movieId) {
    var url = 'movie_suggestions.json?movie_id=' + movieId;
    return rp({url: this.apiUrl + url, json:true});
  }

  getComments(movieId) {
    var url = 'movie_comments.json?movie_id=' + movieId;
    return rp({url: this.apiUrl + url, json:true});
  }

  getReviews(movieId) {
    var url = 'movie_reviews.json?movie_id=' + movieId;
    return rp({url: this.apiUrl + url, json:true});
  }

  getParentalGuides(movieId) {
    var url = 'movie_parental_guides.json?movie_id=' + movieId;
    return rp({url: this.apiUrl + url, json:true});
  }

  getUpcoming() {
    var url = 'list_upcoming.json';
    return rp({url: this.apiUrl + url, json:true});
  }

  getUserDetails(userId, options = {}) {
    var query = this.buildQuery(options);
    var url = 'user_details.json?user_id=' + userId + '&' + query;
    return rp({url: this.apiUrl + url, json:true});
  }

  getUserKey(username, password, applicationKey) {
    var url = 'user_get_key.json';
    var body = {
      username: username,
      password: password,
      application_key: applicationKey
    };

    return rp.post({url: this.apiUrl + url, body: body, json: true});
  }

  getUserProfile(userKey) {
    var url = 'user_profile.json';
    var body = {
      user_key: userKey
    };

    return rp.post({url: this.apiUrl + url, body: body, json: true});
  }

  editUserSettings(userKey, applicationKey, options = {}) {
    var url = 'user_edit_settings.json';
    var body = {
      user_key: userKey,
      application_key: applicationKey
    };
    body = merge(body, options);

    return rp.post({url: this.apiUrl + url, body: body, json: true});
  }

  registerUser(applicationKey, username, password, email) {
    var url = 'user_register.json';
    var body = {
      application_key: applicationKey,
      username: username,
      password: password,
      email: email
    };

    return rp.post({url: this.apiUrl + url, body: body, json: true});
  }

  forgotPassword(applicationKey, email) {
    var url = 'user_forgot_password.json';
    var body = {
      application_key: applicationKey,
      email: email
    };

    return rp.post({url: this.apiUrl + url, body: body, json: true});
  }

  resetPassword(resetCode, newPassword, applicationKey) {
    var url = 'user_reset_password.json';
    var body = {
      reset_code: resetCode,
      new_password: newPassword,
      application_key: applicationKey
    };

    return rp.post({url: this.apiUrl + url, body: body, json: true});
  }

  likeMovie(userKey, movieId, applicationKey) {
    var url = 'like_movie.json';
    var body = {
      user_key: userKey,
      movie_id: movieId,
      application_key: applicationKey
    };

    return rp.post({url: this.apiUrl + url, body: body, json: true});
  }

  getBookmarks(userKey, options = {}) {
    var url = 'get_movie_bookmarks';
    var body = {
      user_key: userKey
    };
    body = merge(body, options);

    return rp.post({url: this.apiUrl + url, body: body, json: true});
  }

  addBookmark(userKey, movieId, applicationKey) {
    var url = 'add_movie_bookmark.json';
    var body = {
      user_key: userKey,
      movie_id: movieId,
      application_key: applicationKey
    };

    return rp.post({url: this.apiUrl + url, body: body, json: true});
  }

  deleteBookmark(userKey, movieId, applicationKey) {
    var url = 'delete_movie_bookmark.json';
    var body = {
      user_key: userKey,
      movie_id: movieId,
      application_key: applicationKey
    };

    return rp.post({url: this.apiUrl + url, body: body, json: true});
  }

  makeComment(userKey, movieId, commentText, applicationKey) {
    var url = 'make_comment.json';
    var body = {
      user_key: userKey,
      movie_id: movieId,
      comment_text: commentText,
      application_key: applicationKey
    };

    return rp.post({url: this.apiUrl + url, body: body, json: true});
  }

  likeComment(userKey, commentId, applicationKey) {
    var url = 'like_comment.json';
    var body = {
      user_key: userKey,
      comment_id: commentId,
      application_key: applicationKey
    };

    return rp.post({url: this.apiUrl + url, body: body, json: true});
  }

  reportComment(userKey, commentId, applicationKey) {
    var url = 'report_comment.json';
    var body = {
      user_key: userKey,
      comment_id: commentId,
      application_key: applicationKey
    };

    return rp.post({url: this.apiUrl + url, body: body, json: true});
  }
}

export default YTS;
