function shortcut () {
   var settings   = {},
       shortcuts  = {};

   function route (req, res, next) {
      var command = req.command.split(' ')[0];
      if (shortcuts[command]) {
         req.command = req.command.replace(command, shortcuts[command]);
      }
      next();
   }

   function add () {
      var args = Array.prototype.slice.apply(arguments), 
          to   = args.shift();
      args.forEach(function (from) {
         shortcuts[from] = to;
      });
      return settings.shell;
   }

   if (arguments.length === 1) {
      settings = arguments[0];
      settings.shell.shortcut = add;
      return route;
   } else {
      route.apply(null, arguments);
   }
}

exports.shortcuts = shortcut;
