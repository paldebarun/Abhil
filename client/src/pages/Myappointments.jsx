import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Myappointments = () => {
  const { username } = useParams(); 
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/appointments/${username}`);
        console.log("this is response : ",response);
        if (response.status!==200) {
          throw new Error('Failed to fetch data');
        }

        
        setAppointments(response.data); 
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
      }
    };

    fetchData();
  }, [username]);


  return (
    <div>
      <h1>Appointments for {username}</h1>
      <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
        
          
          <div>
            {appointments.map((appointment, index) => (
              <div key={index}>
                {appointment.message}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Myappointments;
