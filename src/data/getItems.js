import axios from   'axios';
export  const getItems= axios.create({
    baseURL: 'http://localhost:3001',
    
   
  });
