Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('boys'); }
});

Router.route('/', {name: 'boysList'});