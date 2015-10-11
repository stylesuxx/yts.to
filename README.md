# yts.to API wrapper
This is a wrapper for the [yts.to API](https://yts.to/api).

Calls to the classes methods return promises. All [API](https://yts.to/api) functionality is wrapped.
The parameters for the methods are the mandatory fields. Where optional fields may be passed this may be done via options object. For optional parameters please refere to the [yts.to API documentation](https://yts.to/api). JSON is returned directly as the API returns it. The interesting content is in the *data* field of the response.

## Methods
The *YTS* class provides the following methods:

### public accessible endpoints
* findMovie(searchString, options = {})
* getDetails(movieId, options = {})
* getSuggestions(movieId)
* getComments(movieId)
* getReviews(movieId)
* getParentalGuides(movieId)
* getUpcoming()
* getUserDetails(userId, options = {})

### Require application and/or user key
* getUserKey(username, password, applicationId)
* getUserProfile(userKey)
* editUserSettings(userKey, applicationKey, options = {})
* registerUser(applicationKey, username, password, email)
* forgotPassword(applicationKey, email)
* resetPassword(resetCode, newPassword, applicationKey)
* likeMovie(userKey, movieId, applicationKey)
* getBookmarks(userKey, options = {})
* addBookmark(userKey, movieId, applicationKey)
* deleteBookmark(userKey, movieId, applicationKey)
* makeComment(userKey, movieId, commentText, applicationKey)
* likeComment(userKey, commentId, applicationKey)
* reportComment(userKey, commentId, applicationKey)
* deleteComment(userKey, commentId, applicationKey)

## Examples

## Testing
An extensive test suite is provided and may be invoked by running:

    npm run test
