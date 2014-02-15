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
                that.items.fetch({
                    success:function(){
			 that.items.each(function(m){
                            that.listItem(m);
                            // that.$('.list').append("<li>"+m.get("body.first")
                            // +" "+m.get("body.last")+"</li>")
                        })
                    },data:{}
                })
             
            
            },createItem:function() {
			var that = this;
			this.items.create ({
				"path" : "newobj",
				"title" : "hhhk",
				"group" : "people",
				"body" : {
					"first" : "bob",
					"last" : "b"
				}
			}, {callback: function(){
				that.$('.d1').html("hello")
			}})	
	},listItem:function(m){
                if(this.$(".list li[data-id='"+m.id+"']").length ==0)
                    this.$('.list').append("<li data-id='"+m.id+"'>"+m.get("body.first")
                            +" "+m.get("body.last")+"</li>")
       }
    });
});

}).call(this);

