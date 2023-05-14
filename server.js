const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Set up handlebars as the view engine
app.engine("handlebars", exphbs.engine);
app.set("view engine", "handlebars");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));

// Routes
app.use(routes);

// GET route for '/'
app.get("/", (req, res) => {
  res.render("home");
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
