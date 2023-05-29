const seedUser = require("./UserData");
const seedPost = require("./postData");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedUser();
  console.log("\n----- USER SYNCED -----\n");
  await seedPost();
  console.log("\n----- POST SYNCED -----\n");

  process.exit(0);
};
seedAll();

module.exports = seedAll;
