// ==========================================================================
// Project:   Blog - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Blog */

// This page describes the main user interface for your application.  
Blog.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'topView bottomView tabView'.w(),
    topView:SC.ToolbarView.design({
      layout: { top: 0, left: 0, right: 0, height: 40 },
      anchorLocation: SC.ANCHOR_TOP
    }),
    tabView: SC.TabView.design({
    	layout: { left: 15, right: 15, top: 20, bottom: 20}, 
               nowShowing: 'Blog.mainPage.blogList', 
               itemTitleKey: 'title', 
               itemValueKey: 'value', 
               items: [ 
                 {title: 'Blog', 
                 value: 'Blog.mainPage.blogList'},
                 {title: 'About',
                 value:'Blog.mainPage.aboutView'}
               ] 
    }),
    bottomView: SC.ToolbarView.design({
      layout: { bottom: 0, left: 0, right: 0, height: 40 },
      anchorLocation: SC.ANCHOR_BOTTOM

    })
  }),
  blogList : SC.SplitView.design({
      layout: { top: 0, bottom: 0, left: 0, right: 0 },
      layoutDirection: SC.LAYOUT_VERTICAL,
      autoresizeBehavior: SC.RESIZE_TOP_LEFT,
	  topLeftView: SC.TableView.design({
	   backgroundColor: 'white',
    	layout: { left: 15, right: 15, top: 15, bottom: 15 },
    	columns: [ 
      		SC.TableColumn.create({ 
        	key:   'title', 
        	label: 'Title', 
        	width: 1000 
      		}), 
      		SC.TableColumn.create({ 
        		key:   'created_date', 
        		label: 'Date', 
        		width: 100 
      		}),
      		SC.TableColumn.create({ 
        		key:   'category', 
        		label: 'Category', 
        		width: 100 
      		}) 
    ],

    contentBinding:   'Blog.blogController.arrangedObjects', 
    selectionBinding: 'Blog.blogController.selection',
    sortedColumnBinding:'Blog.blogController.sortedColumn',
    selectOnMouseDown: YES,
    exampleView: SC.TableRowView,
    recordType: Blog.Blog
	  }),
	  topLeftMinHeight: 150,
      topLeftMaxHeight: 250,
	  bottomRightView: Blog.BlogView.design({
	  		layout: { centerY: 0, left: 8, top: 0, width: 200 },
	  		contentBinding: 'Blog.selectedBlogController'
	  		}),
	  dividerView: SC.SplitDividerView.design({
            layout: {}
		})

    }),
   aboutView : SC.ScrollView.design({
   	layout: { top: 0, bottom: 0, left: 0, right: 0 },
    backgroundColor: 'white'
   })

});
