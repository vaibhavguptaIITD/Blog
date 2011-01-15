// ==========================================================================
// Project:   Blog.BlogView
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Blog */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Blog.BlogView = SC.View.extend(SC.ContentDisplay,
/** @scope Blog.BlogView.prototype */ {
	contentDisplayProperties: 'title body'.w(),
  // TODO: Add your own code here.
  render: function(context, firstTime)
  {
  	var content = this.get('content');
	 if(content != null)
	 {
	 	var title= content.get("title"),
	 	body = content.get("body");
		context = context.begin('div').addClass('user-summary').push(title).end();
  		context = context.begin('div').addClass('user-summary').push(body).end();
	 }
	sc_super();
  }

});
