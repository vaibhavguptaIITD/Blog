// ==========================================================================
// Project:   Blog.blogController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Blog */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Blog.blogController = SC.ArrayController.create(
/** @scope Blog.blogController.prototype */ {

	sortStateDidChange: function() {
	  var column = this.get('sortedColumn');
	  if( column == null || column.get('sortState') == null ) { return; }
	
	  sort = column.get('sortState') == SC.SORT_ASCENDING ? 'ASC' : 'DESC';
	  var query = SC.Query.local(Blog.Blog, { orderBy: column.get('key')+' '+sort });
	  this.set('content', Blog.store.find(query));
	}.observes('*sortedColumn.sortState')


});

Blog.selectedBlogController = SC.ObjectController.create({
	contentBinding: SC.Binding.single('Blog.blogController.selection')
});
