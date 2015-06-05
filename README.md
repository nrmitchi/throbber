## throbber.js

Original CodePen: http://codepen.io/AlcidesRC/pen/gafno

Goals of this repo:
 - Inject 'throbbs' dynamically based on a config
 - Store dismissed state for each one in a cookie
 - Allow beforeShow/afterShow/beforeClose/afterClose events so that we can do stuff 'around' the throbbs.
 - Make it work properly with both requirejs/browserify/plainjs