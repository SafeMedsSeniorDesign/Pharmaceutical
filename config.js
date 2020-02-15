  
module.exports = {
  db: {
    host: process.env.dbHost || 'safemeds.database.windows.net',
    dialect: 'mssql',
    maxConnectionSockets: 10,
    minConnectionSockets: 5,
    connectionAcquisitionRate: 30000,
    databaseName: process.env.dbName || 'SafeMeds',
    username: process.env.adminUser || 'safemedsadmin@safemeds',
    password: process.env.password || 'Sam4218222',
    connectionIdleRate: 10000,
    port: 1433,
    //DO NOT TURN THIS TO TRUE YOU WILL DROP EVERY TABLE
    forceTableCreation: false,
    shouldLog: true,
	},
  shouldFastifyLog: true,
  serverHost:  process.env.serverAddress || '0.0.0.0' ,
  port: process.env.port || '3003',
};
