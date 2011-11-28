node-shell middleware: shortcuts
================================

This is a simple middleware for node-shell which allows you to create shortcuts
to commands registered with the `router` middleware.

Example
-------

```javascript
var Shell      = require('shell'),
    shortcuts  = require('./shell-shortcuts').shortcuts,
    app;

app = new Shell();

app.configure(function () {
   app.use(shortcuts({shell: app}));
   app.use(Shell.router({shell: app}));
   app.use(Shell.help({shell: app, introduction: false}));
});

app.cmd(
   'foobar',
   'do the foobar thing',
   function (req, res) {
      console.log("doin' the foobar thing");
      app.prompt();
   }
);

// make 'f' and 'fb' shortcuts to 'foobar'
app.shortcut('foobar', 'f', 'fb');
```

Interface
---------

The middleware exposes a single function, `shortcut`, to your Shell instance.
The first parameter of this function is the destination command; all following
arguments will be routed to the first argument.

License
-------

MIT.
