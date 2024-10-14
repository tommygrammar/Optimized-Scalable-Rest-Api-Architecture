// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const app = express();



app.use(cors());
app.use(express.json());
app.use(bodyParser.raw({ type: '*/*' }));

console.log("hello")
app.post('/read', async (req, res) => {
    
    
    try{
    console.time('Execution Time');
    const response = await axios.post('http://127.0.0.1:5000/read', req.body);
    
    console.timeEnd('Execution Time');
    
    
    const datare = response.data
    
    // Decode the byte string received from Python
    const jsonData = datare.toString('utf-8');

    // Use regex to extract JSON objects and OIDs
    const dataMatches = jsonData.match(/(\{[^}]*"_id" : \{ "\$oid" : "([^"]+)" \}[^}]*\})/g);
    
    const extractedData = [];

    if (dataMatches) {
        dataMatches.forEach(match => {
            const oid = match.match(/"\$oid" : "([^"]+)"/)[1];
            extractedData.push({ oid, content: match });
        });
    } else {
        console.log("No JSON objects found in the data.");
    }

    
    res.json(extractedData);}
    catch (error) {
        console.error('Error in /read endpoint:', error); 
        res.status(500).send(error.message);
    }
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Read Service running on port ${PORT}`));
