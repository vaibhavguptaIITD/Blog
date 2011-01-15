// ==========================================================================
// Project:   Blog.Blog
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Blog */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Blog.Blog = SC.Record.extend(
/** @scope Blog.Blog.prototype */ {
	title: SC.Record.attr(String),
	body: SC.Record.attr(String),
	created_date: SC.Record.attr(Date),
	updated_date:SC.Record.attr(Date),
	category:SC.Record.attr(String)
	
  // TODO: Add your own code here.

}) ;
; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('blog');