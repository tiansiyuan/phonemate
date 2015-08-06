Meteor.publish('boys', function() {
    return Boys.find();
});