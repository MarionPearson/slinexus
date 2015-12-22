Router.route('/', function () {
    this.render('content');
});

Router.route('/forums', function () {
    this.render('forum');
});

Router.route('/registration', function () {
    this.render('registration');
});

Router.route('/login', function () {
    this.render('login');
});
