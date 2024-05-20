const sequelize = require('../../Config/db');
const User = require('../../Models/Users');
const UserBankDetails = require('../../Models/UserBankDetails');
const UserDocsVerify = require('../../Models/UserDocsVerify');
const APIStatus = require('../../Models/ApiStatus');
const Contact = require('../../Models/Contact');
const HelpAndSupport = require('../../Models/HelpAndSupport');
const OTPManage = require('../../Models/OTPManage');
const PasswordManage = require('../../Models/PasswordManage');
const PaymentHistory = require('../../Models/PaymentHistory');
const SocketStatus = require('../../Models/SocketStatus');
const StockList = require('../../Models/StockList');
const Trades = require('../../Models/Trades');
const TradeCharges = require('../../Models/TradeCharges');
const TradeHistory = require('../../Models/TradeHistory');


const syncDatabase = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log('Database & tables synchronized!');
    } catch (error) {
        console.error('Error synchronizing database & tables:', error);
        process.exit(1); 
    }
};

module.exports = syncDatabase;