const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  //passport here is taking code send by in url and sending it to take the details
  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get(
    "/auth/facebook",
    passport.authenticate("facebook", {
      scope: ["user_friends"],
    })
  );

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", {
      successRedirect: "/",
      failureRedirect: "/login",
    })
  );

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
