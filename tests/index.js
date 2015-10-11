var test = require('tape');
var YTS = require('../');

test('search for movies', function (t) {
  t.plan(8);

  var yts = new YTS();
  yts.findMovie('Snatch', {with_rt_ratings: true}).then( function(movies) {
    t.equal(movies.status, 'ok', 'Request success');
    t.equal(movies.data.movies[0].title, 'Snatch.', 'Title matches');
    t.equal(movies.data.movies[0].id, 10, 'ID matches');
    t.ok(movies.data.movies[0].torrents.length, 'Has at least one torrent');
    t.ok(movies.data.movies[0].background_image, 'Has background image');
    t.ok(movies.data.movies[0].medium_cover_image, 'Has cover image');
    t.ok(movies.data.movies[0].rating, 'Has rating');
    t.ok(movies.data.movies[0].rt_critics_score, 'Has rt score');
  });
});

test('get details for movie', function (t) {
  t.plan(6);

  var yts = new YTS();
  yts.getDetails(10, {with_cast: true}).then( function(movie) {
    t.equal(movie.status, 'ok', 'Request success');
    t.equal(movie.data.title, 'Snatch.', 'Title matches');
    t.ok(movie.data.torrents.length, 'Has at least one torrent');
    t.ok(movie.data.description_intro, 'Has description');
    t.ok(movie.data.rating, 'Has rating');
    t.ok(movie.data.actors, 'Has actors');
  });
});

test('get suggestions for movie', function (t) {
  t.plan(2);

  var yts = new YTS();
  yts.getSuggestions(10).then( function(movies) {
    t.equal(movies.status, 'ok', 'Request success');
    t.ok(movies.data.movie_suggestions, 'Has suggestions');
  });
});

test('get comments for movie', function (t) {
  t.plan(3);

  var yts = new YTS();
  yts.getComments(10).then( function(comments) {
    t.equal(comments.status, 'ok', 'Request success');
    t.ok(comments.data.comment_count, 'Has comment count');
    t.ok(comments.data.comments, 'Has comments');
  });
});

test('get movie reviews', function (t) {
  t.plan(3);

  var yts = new YTS();
  yts.getReviews(10).then( function(reviews) {
    t.equal(reviews.status, 'ok', 'Request success');
    t.ok(reviews.data.review_count, 'Has review count');
    t.ok(reviews.data.reviews, 'Has reviews');
  });
});

test('get parental guides for movie', function (t) {
  t.plan(3);

  var yts = new YTS();
  yts.getParentalGuides(10).then( function(guides) {
    t.equal(guides.status, 'ok', 'Request success');
    t.ok(guides.data.parental_guide_count, 'Has guides count');
    t.ok(guides.data.parental_guides, 'Has guides');
  });
});


test('get upcoming', function (t) {
  t.plan(3);

  var yts = new YTS();
  yts.getUpcoming().then( function(upcoming) {
    t.equal(upcoming.status, 'ok', 'Request success');
    t.ok(upcoming.data.upcoming_movies_count, 'Has upcoming count');
    t.ok(upcoming.data.upcoming_movies, 'Has upcoming movies');
  });
});

test('get user details', function (t) {
  t.plan(3);

  var yts = new YTS();
  yts.getUserDetails(23, {with_recently_downloaded: true}).then( function(user) {
    t.equal(user.status, 'ok', 'Request success');
    t.equal(user.data.username, 'Souseiseki', 'Username matches');
    t.ok(user.data.recently_downloaded, 'Has recently downloaded');
  });
});

/**
 * Widhout credentials the following tests just check for status messages
 */
test('get user key', function (t) {
  t.plan(1);

  var yts = new YTS();
  yts.getUserKey('username', 'password', 'application_key').then( function(key) {
    t.equal(key.status_message, 'Application key is invalid', 'Endpoint seems OK');
  });
});


test('get user profile', function (t) {
  t.plan(0);

  var yts = new YTS();
  yts.getUserProfile('user_key').then( function(profile) {

  });
});
