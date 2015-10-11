var test = require('tape');
var YTS = require('../');

test('search for movies', function (t) {
  t.plan(4);

  var yts = new YTS();
  yts.findMovie('Snatch').then( function(movie) {
    console.log(movie.data.movies[0]);
    t.equal(movie.status, 'ok', 'Request success');
    t.equal(movie.data.movies[0].title, 'Snatch.', 'Title matches');
    t.equal(movie.data.movies[0].id, 10, 'ID matches');
    t.ok(movie.data.movies[0].torrents.length, 'has at least one torrent');
  });
});
