Template.add.events({
	'submit form':function(event){
		event.preventDefault();
		var item = $('#item').val();
		var desc = $('#desc').val();
		var type = $('#type1').val();
		var lat = Session.get('latitude');
		console.log(lat);

		var long= Session.get('longitude');
		console.log(long);
		var price = $('#price').val();
		var add = $("#address").val();
		var no = $("#conNo").val();

		Meteor.call('insertData',item,desc,type,lat,long,price,add,no, function(error,result){
			if(!error){
				FlashMessages.sendSuccess("Product added successfully! To add more products fill the form again.");
				 $('#item').val('');
				 $('#desc').val('');
		 		 $('#type1').val('');
		 		 $('#price').val('');
				$("#address").val('');
				$("#conNo").val('');

			}
			else{
				FlashMessages.sendError("Some Error occured! Please try after some time.");
			}
		});


		// Items.insert({
		// 	name:item,
		// 	description:desc,
		// 	type: type,
		// 	price:price,
		// 	owner:Meteor.userId(),
		// 	latitude : lat,
		// 	longitude : long,
		// 	address : add,
		// 	contactNo : no
		// }, function(error,result){
		// 	if(!error){
		// 		FlashMessages.sendSuccess("Product added successfully!");
		// 	}
		// 	else{
		// 		FlashMessages.sendError("Some Error occured! Please try after some time.");
		// 	}
		// });

	},
	'change #type1' : function(){

    var x = $("#type1").val();
    console.log(x);
    //var z=$('#searchBox').val();
    //console.log(z);
    if(x == '2')
    {
      $("#Price").show();
      console.log("equal");
    }
    else {
    $("#Price").hide();
console.log("not equal")}
    ;
}})


