Template.myitems.helpers({
	'showMyItems':function(){
		// var currentUser = Meteor.userId();
		// Meteor.call('showItems', currentUser,function(error,result){
		// 	if(error){
		// 		throw new Meteor.Error( 500, 'There was an error processing your request' );
		// 	}else{
		// 		Session.set('items',result);
		// 	}
		// });

		return ReactiveMethod.call('showItems');

	}

});