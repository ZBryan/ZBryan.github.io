/* /controllers/usersController.js 
*/
App.UsersController = Ember.ArrayController.extend({
  sortProperties: ['lastName'],
  sortAscending: true // false = descending
  usersCount: function(){
    return this.get('model.length');
  }.property('@each')
  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});