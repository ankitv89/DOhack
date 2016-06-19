Router.configure({
     layoutTemplate: 'layout'
});



Router.route('/add', {
	name: 'add',
	template: 'add'
  
     }
  );

Router.route('/', {
	name: 'home',
	template: 'home'
  
     }
  );

Router.route('/myitems', {
	name: 'myitems',
	template: 'myitems'
  
     }
  );

// Router.route('/result', {
// 	name: 'result',
// 	template: 'showData',
// 	data: function(){
// 		templateData={
// 			showDataItems: Data.find();
// 		};
// 		return templateData;
// 	}
  
//      }
//   );
Router.route('/map', {
	name: 'map',
	template: 'map'
  
     }
  );






     