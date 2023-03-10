import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

import NavBar from "./Navbar component/NavBar";
import AllProduct from "./AllProduct.js";

import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { queryy } from "./admin/AllProduct";
import { useRouter } from "next/router";

export default function Search() {
  const allProd = useContext(AllProduct);

  const router = useRouter();
  const query = router.query;
  const x = query.name
  console.log(query, "*******");
  const search = allProd.products.filter((e: any) => e.name.includes(x));
  console.log("=====>", x);

  return (
    <>
      <NavBar />

      {search.map((e: any) => {
        return (
          <CardGroup id="groupitems" key={e._id}>
            <Card className="groupitemCard">
              <Card.Img variant="top" src={e.image} />
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
              >
                Add to cart
              </Button>

              <Card.Footer>
                <small className="text-muted">{e.date_added}</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        );
      })}
    </>
  );
}
