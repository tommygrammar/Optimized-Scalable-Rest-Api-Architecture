// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState([]);

    

  
    const fetchData = async () => {
        try {
            const response = await axios.post('http://localhost:3001/read', {
                
            });
    
            
            let data = response.data;
            console.log(data)

            
            setData(response.data);

    

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    useEffect(() => {
      fetchData();
    }, []);
 

    return (
        <div>
            <h1>Data Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>OID</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.oid}</td>
                            <td>{item.content}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
