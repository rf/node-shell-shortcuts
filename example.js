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
