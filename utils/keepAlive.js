const cron = require('node-cron');
const axios = require('axios');

const keepAlive = (url) => {
    // Run every 14 minutes
    cron.schedule('*/14 * * * *', async () => {
        try {
            const response = await axios.get(url);
            console.log('Keep-alive ping successful:', response.status);
        } catch (error) {
            console.error('Keep-alive ping failed:', error.message);
        }
    });
};

module.exports = keepAlive;