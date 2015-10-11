var test = require('tape');
var YTS = require('../');

test('search for movies', function (t) {
  t.plan(8);

  var yts = new YTS();
  yts.findMovie('Snatch', {with_rt_ratings: true}).then( function(movie) {
    t.equal(movie.status, 'ok', 'Request success');
    t.equal(movie.data.movies[0].title, 'Snatch.', 'Title matches');
    t.equal(movie.data.movies[0].id, 10, 'ID matches');
    t.ok(movie.data.movies[0].torrents.length, 'Has at least one torrent');
    t.ok(movie.data.movies[0].background_image, 'Has background image');
    t.ok(movie.data.movies[0].medium_cover_image, 'Has cover image');
    t.ok(movie.data.movies[0].rating, 'Has rating');
    t.ok(movie.data.movies[0].rt_critics_score, 'Has rt score');
  });
});

test('get details for movie', function (t) {
  t.plan(5);

  var yts = new YTS();
  yts.getDetails(10, {with_cast: true}).then( function(movie) {
    t.equal(movie.status, 'ok', 'Request success');
    t.equal(movie.data.title, 'Snatch.', 'Title matches');
    t.ok(movie.data.torrents.length, 'Has at least one torrent');
    t.ok(movie.data.description_intro, 'Has description');
    t.ok(movie.data.rating, 'Has rating');
  });
});
