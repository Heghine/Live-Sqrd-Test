(function() {
    define(['require', 'jquery', 'underscore', 'bb', 'i/item/c','text!/html/index.html'], function(require, $, _, Backbone, Items) {
        return Backbone.View.extend({
            id: 'index',
            initialize: function(options) {
                var that = this;
                this.___ = options.___;
                this.items = new Items(null,{ s: this.___.so});
                var Home = require('text!/html/index.html');
                this.home = _.template(Home);
                that.render();
            },
            events: {
		'click .create':'createItem'
            },
            render:function(){
                var that       = this;
                that.$el.html(this.home({}))
               /* that.items.fetch({
                    success:function(){
                    },data:{}
                })
             */
            
            },createItem:function() {
			var that = this;
			this.items.create {
				"path" : "newobj",
				"title" : "hhhk",
				"group" : "people",
				"body" : {
					"name" : "hhh"
				}
			}, {callback: function(){
				that.$('.d1').html("hello")
			}}	
		}
    });
});

}).call(this);

