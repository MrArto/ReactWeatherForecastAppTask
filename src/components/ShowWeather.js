import React from "react";
import "./ShowWeather.css";



let columns = [
    {
      heading: 'Day',
      property: 'day'
    },
    {
      heading: 'Temperature',
      property: 'temperature'
    },
    {
      heading: 'Wind',
      property: 'wind'
    }
  ]
  
  
  const Table = ({ data }) => {
    data.forEach(k => {
        const keys = Object.keys(k);        
        console.log("keys", keys);
    });
    
    return (
      <table>
              <tr>{columns.map(col => <th>{col.heading}</th>)}</tr>
              {data.map(val =>
                  <tr>
                      {columns.map(col => <td>{val[col.property]}</td>)}
                  </tr>
              )}
      </table>
  )
}

 




function ShowWeather(props) {         

    const {data} = props;  
    console.log(data.forecast);
    
    return (
        <div className="todays-weather">
            <div className="title" ><h3>Todays Weather</h3></div>
            <div className="todays-data">Description: {data.description}</div>
            <div className="todays-data">Temperature: {data.temperature}</div>
            <div className="todays-data">Wind speed: {data.wind}</div>
            <br/>
            <div className="title" >Forecast for upcomming weather</div>
            <div>
                <Table data={data.forecast} />                
            </div>

        </div>
    )
}


export default ShowWeather