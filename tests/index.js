var test = require('tape');
var YTS = require('../');

test('search for movies', function (t) {
  t.plan(6);

  var yts = new YTS();
  yts.findMovie('Snatch').then( function(movie) {
    t.equal(movie.status, 'ok', 'Request success');
    t.equal(movie.data.movies[0].title, 'Snatch.', 'Title matches');
    t.equal(movie.data.movies[0].id, 10, 'ID matches');
    t.ok(movie.data.movies[0].torrents.length, 'has at least one torrent');
    t.ok(movie.data.movies[0].background_image, 'has background image');
    t.ok(movie.data.movies[0].medium_cover_image, 'has cover image');
  });

  yts.getDetails(10).then( function(movie) {
    console.log(movie);
  });
});

test('get details for movie', function (t) {
  t.plan(0);

  var yts = new YTS();
  yts.getDetails(10).then( function(movie) {
    console.log(movie);
  });
});
