import { Meteor } from 'meteor/meteor';

Meteor.publish('itemslist', function(){
	return Items.find();
});


Meteor.methods({

	'distance1':function(lat1,long1,lat2,long2){
		var R = 6371000;
		var dlat = (lat2-lat1)* Math.PI/180;
		var dlon = (long2-long1)* Math.PI/180;

		var a = 0.5-Math.cos(dlat)/2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180)*(1-Math.cos(dlon))/2;

		console.log(R*2*Math.asin(Math.sqrt(a)));
		return R*2*Math.asin(Math.sqrt(a));
	},

	'insertData':function(item,desc,type,lat,long,price,add,no){

			Items.insert({
			name:item,
			description:desc,
			type: type,
			price:price,
			owner:Meteor.userId(),
			latitude : lat,
			longitude : long,
			address : add,
			contactNo : no
		});


	},

	'showItems':function(){
		// if(!currentUser){
		// 	throw new Meteor.Error( 500, 'There was an error processing your request' );
		// }
		return Items.find({owner:Meteor.userId()});
	}


});

