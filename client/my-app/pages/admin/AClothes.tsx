import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

import NavBar from './Navbar component/NavBar';
import AllProduct from '../AllProduct';

import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
export default function Clothes() {
  
  const allProd = useContext(AllProduct);
  
  const [clothes , setclothes]=useState([])
  useEffect(() => {
    axios.get("http://localHost:8080/product/clothes").then((res) => {
      console.log(res.data ,"sous");
      setclothes(res.data);
    });
  }, []);
  const DeleteProduct=(id:any)=>{
    console.log(id, "ffffff");
    
    axios
      .delete(`http://localHost:8080/product/${id}`)
      .then((res) => {
        axios.get("http://localHost:8080/product/clothes").then((res) => {
          
          setclothes(res.data);
        });
      })
      .catch((err) => alert("Error deleting"));
    }

  return (
    <>
      <NavBar />

      {clothes.map((e: any) => {
        return (
          <CardGroup id="groupitems" key={e._id}>
            <Card className="groupitemCard">
              <Card.Img variant="top" src={e.image} 
              
              />
              <Card.Body>
                <Card.Title> {e.name} </Card.Title>
                <Card.Text>{e.description}</Card.Text>
              </Card.Body>
              <h2>${e.price}</h2>

              <Button
                variant="outline-dark"
                className="snipcart-add-item"
                data-item-id={e._id}
                data-item-price={e.price}
                // data-item-description={e.description}
                data-item-image={e.image}
                data-item-name={e.name}
              >Add to cart
              </Button>

              <Card.Footer>
                <small className="text-muted">{e.date_added}</small>
              </Card.Footer>
              <button className=" hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" style={{background:"black"}}    
                 onClick={() => {
                  DeleteProduct(e._id)
                  console.log(e._id , "zyg");
                  
                }}
              
              >
  delete
</button>
<br></br>
              <button className=" hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" style={{background:"black"}}>
  update
</button>
            </Card>
          </CardGroup>
        );
      })}
    </>
  );
}
