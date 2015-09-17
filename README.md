Playing around with Angular 2 and Webpack
===========================================

Working off `angular2-webpack-starter`

My main approach was initially to separate everything in `app.ts` into their own files, to start preparing for a project structure.

Issues I encountered
---------------------

### Importing HTML file

I tried moving the app template into it's own file using:

```
import appView from './app.html';
```

But it didn't work, tried some stuff with a couple of guys for 20 minutes and still didn't work.

Eventually used:

```
let appView = require('./app.html');
```

I guess this is more a Webpack thing.

### Services

I wanted to move the HTTP stuff in the App `constructor` to it's own `service`, searching "services" in angular.io brings up pretty much nothing.
So I searched Google for "angular 2 services" and got some direction, but it's not until someone offered guidance and told me to look for "injectable" that I kicked it off.
