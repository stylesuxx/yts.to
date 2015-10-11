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
