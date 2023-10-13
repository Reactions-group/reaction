import CardComp from "./card";
import { useEffect, useState } from 'react';



function Car(){
    let[items, setItems]= useState([]);
   

   

    async function dataCar(){
    const url = 'https://motorcycle-specs-database.p.rapidapi.com/article/2012/BMW/F%20800%20GS%20Trophy';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b6fbf0148fmsh061f8756a12d9cfp1f2173jsn2c9f28f17180',
		'X-RapidAPI-Host': 'motorcycle-specs-database.p.rapidapi.com'
	}
};
try {
	const response = await fetch(url, options);
	const result = await response.json();
  console.log(result)
	setItems(result.results)
} catch (error) {
	console.error(error);
}
    }
  
    useEffect(function(){ dataCar()},[])  
    return (
      <>
        <form className="d-flex" id="myform">
          <input
            type="search"
            className="me-2"
            aria-label="search"
            name="search"
          />
          <button variant="outline-success" type="submit">
            search
          </button>
        </form>
    
        {items && items.length !== 0 ? items.map(function (item) {
          return (
            <>
              <CardComp image={item.image_url} title={item.title} />
            </>
          );
        }) : <p>No items to display</p>}
      </>
    );
    
      }
    
        
  
    



export default Car;