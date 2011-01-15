// ==========================================================================
// Project:   Blog.Blog Fixtures
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Blog */

sc_require('models/blog');

Blog.Blog.FIXTURES = [

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique primary key (default 'guid').  See 
  // the example below.

  {
  	guid:1,
  	title:"Blog Title 1",
  	body: "<div>This should be a sample html</div>",
  	created_date: new Date(),
  	category: "random"
  },
  
  {
  	guid:2,
  	title:"Blog Title 2",
  	body: " Blah blah blah",
  	created_date: new Date(),
  	category: "random"
  },
  
  {
  	guid:3,
  	title:"Blog Title 3",
  	body: " Blah blah blah",
  	created_date: new Date(),
  	category: "random"
  }

];
