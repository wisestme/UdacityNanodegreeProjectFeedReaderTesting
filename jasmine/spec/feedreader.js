/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against our application.
 */

/*  All of our tests are placed within the $() function,
 * since some of these tests may require DOM elements
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are all defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('all URLs are defined', function() {
            for(let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
         });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('all names are defined', function() {
            for(let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
         });

    });


    /* A new test suite named "The menu" */
    describe('The menu', function() {
        /* A test that ensures the menu element is
         * hidden by default. 
         */
         it('is hidden on default', function() {
            const body = $('body');
            expect(body.hasClass('menu-hidden')).toBe(true);
         });
         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('changes visibility', function() {
            const body = $('body');
            const menu = $('.menu-icon-link')

            menu.click();//simulates click on the menu icon
            expect(body.hasClass('menu-hidden')).toBe(false);

            menu.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
         });
    });

        

    /* A new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
         });

         it('at least one entry is present', function() {
            let entry = $('.feed .entry')
            expect(entry.length > 0).toBe(true);
         });
     });
        

    /* A new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        const feed = document.querySelector('.feed')
        const feedOne = []; // holds the first feed's content
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
         // Load two different feeds and check for changes in their contents.
         beforeEach(function(done) {
            loadFeed(0);
            
            // convert feeds children into an array and loop over each
            Array.from(feed.children).forEach(function(entry) {
                // push the innerText into feedOne
                feedOne.push(entry.innerText);
            })
            loadFeed(1, done);
         })

         // A test that ensures that at least two feeds exist
         it('at least two feeds exist', function() {
            expect(allFeeds.length > 1).toBe(true);
         });

          // A test that ensures that the contents of the feeds change
         it('content changes', function() {
            
            Array.from(feed.children).forEach(function(entry, index) {
            
            expect(entry.innerText === feedOne[index]).toBe(false);
            });
        });    
    });
}());
