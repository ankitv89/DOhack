/**
* Template - search
*/


Template.home.rendered = function () {
  AutoCompletion.init("input#searchBox");
}

Template.home.events = {
  'keyup input#searchBox': function () {
    AutoCompletion.autocomplete({
      element: 'input#searchBox',       // DOM identifier for the element
      collection: Items,              // MeteorJS collection object
      field: 'name',                    // Document field name to search for
      limit: 5,                         // Max number of elements to show
      sort: { name: 1 }});              // Sort object to filter results with
      //filter: { 'gender': 'female' }}); // Additional filtering
  },
    'change #type' : function(){

    var x = $("#type").val();
    console.log(x);
    var z=$('#searchBox').val();
    console.log(z);
    if(x == '2')
    {
      $("#OnlyForPrice").show();
      console.log("equal");
    }
    else {
    $("#OnlyForPrice").hide();
console.log("not equal")}
    ;

},

 'submit form':function(event){
    event.preventDefault();
    var searchVal = $("#searchBox").val();
    var range = $('#distance').val();
    var type = $('#type').val();
    var price = $("#price").val();
    console.log(price);
    if(price == null){
      price = 0;
    }
    $('#list1').show();
    var res = Items.find({name:searchVal, type:type, price:{$lte:price}}).fetch();
    //Session.set('result',res);

    var len = res.length;
    function distance1(lat1,long1,lat2,long2){
      var R = 6371000;
      var dlat = (lat2-lat1)* Math.PI/180;
      var dlon = (long2-long1)* Math.PI/180;

      var a = 0.5-Math.cos(dlat)/2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180)*(1-Math.cos(dlon))/2;

      console.log(R*2*Math.asin(Math.sqrt(a)));
      return R*2*Math.asin(Math.sqrt(a));
    }
    //console.log(res.length);
    //return ReactiveMethod.call('distance1',78,12,36,32);
   // Session.set('distRes',y);
    //console.log(y);

    var curlat = Session.get('latitude');
    console.log(curlat);
    var curlng = Session.get('longitude');
    //var larr = [{}];

    //Data.remove({});
   //localStorage.clear();
    Data = new Meteor.Collection(null);
    DataObserver = new LocalPersist(Data, 'data',
      {                                     // options are optional!
        maxDocuments: 99,                   // maximum number of line items in cart
        storageFull: function (col, doc) {  // function to handle maximum being exceeded
          col.remove({ _id: doc._id });
          alert('Shopping cart is full.');
        }
      });
      

    Data.remove({});
    for(var i=0;i<len;i++){
      var lt = res[i].latitude;
      var lg = res[i].longitude;
      console.log(lt);
      var r = distance1(curlat,curlng,lt,lg);
      if(r<range){
        if(res[i].price == null || res[i].price == 0){
          priceNew = "NA";
        }else{
          priceNew = res[i].price;
        }
        Data.insert({
          itemId : res[i]._id,
          name : res[i].name,
          description : res[i].description,
          contactNo : res[i].contactNo,
          address: res[i].address,
          price : priceNew
        });
      }
      
    }

    console.log(Data.find().fetch());
    Session.set('dataItems',Data.find().fetch());



      
 }

};

//ReactiveMethod.call('distance1',78,12,36,32);

// Template.showData.helpers({
//   'item': function(){

//     //return Session.get('result');
//     return Data.find().fetch();
//   },

  //'showDistance':function(){
  // //   Meteor.call('distance1', 78,12,36,32, function(error,result){
  // //         if(error){
  // //           console.log(error.reason);
  // //         }
  // //         else{
  // //           Session.set('dist',result);
  // //           console.log(result);
  // //         }
  // //   });
  // //   console.log(Session.get('dist'));
  // // }

   //Session.set('distRes',ReactiveMethod.call('distance1',78,12,36,32));
   //console.log(Session.get('distRes'));

  //}



//});

Template.showData.helpers({
  'showDataItems':function(){
    return Session.get('dataItems');
  }
});



