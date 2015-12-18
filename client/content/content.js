Template.content.helpers( {
  showtemplate: function () {
    return routes.findOne( { _usersid: _usersid.get() } );
  },

  isuserloggedin: function () {
    return _isuserloggedin.get();
  }

});
