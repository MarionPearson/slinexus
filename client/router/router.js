Router.route('/', function () {
    this.render('content');
});

Router.route('/forums', function () {
    this.render('forum');
});
