import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button }  from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as regThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as solidThumbsUp } from '@fortawesome/free-solid-svg-icons';
// import PetStoreNav from '../../App.js';

import axios from "axios";
const query = JSON.stringify({query: `
{
  list {
      id
      title
      description
      includes
      intended
      color
      material
      url
      price
  }
}
`});

var items;
// Component to render the item list
const PetItemList = () => {

  const [isLoading, setLoading] = useState(true); // Loading state
  const [pokemon, setPokemon] = useState(); // pokemon state
  
  const authToken = 'eyJ4NXQiOiJPVE15WXpVMU9XVTVNRE16TlRRd01UTXdaVFJoT0dReFptUm1aakl5WlRnMVl6UXhOelZtWlROa01qUmpOMk13Tm1SbVlXSTJaV0V3T1dJMk9ETTVNdyIsImtpZCI6Ik9UTXlZelUxT1dVNU1ETXpOVFF3TVRNd1pUUmhPR1F4Wm1SbVpqSXlaVGcxWXpReE56Vm1aVE5rTWpSak4yTXdObVJtWVdJMlpXRXdPV0kyT0RNNU13X1JTMjU2IiwidHlwIjoiYXQrand0IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiI4OWEzYjI3OS00OGE0LTQ3MTQtYTQxNS1mNmI0ZmIxZjNlYjAiLCJhdXQiOiJBUFBMSUNBVElPTiIsImF1ZCI6Inp6MXc5ZFRROXRKUHhCRkF2NFZ6eWd1MU1MQWEiLCJuYmYiOjE2NzcxNTIxMzgsImF6cCI6Inp6MXc5ZFRROXRKUHhCRkF2NFZ6eWd1MU1MQWEiLCJpc3MiOiJodHRwczpcL1wvYXBpLmFzZ2FyZGVvLmlvXC90XC9kYmdnMVwvb2F1dGgyXC90b2tlbiIsImV4cCI6MjY3NzE1MjEzNywiaWF0IjoxNjc3MTUyMTM4LCJqdGkiOiI5Y2M0MzM2Yy1iNmRhLTQ5ZDctODdmMS02NmRkZDMwZWU3NDQiLCJjbGllbnRfaWQiOiJ6ejF3OWRUUTl0SlB4QkZBdjRWenlndTFNTEFhIn0.arvOAWddtdJD-HIcZIefro1qJXpIeIPXxrpHHwjUtpIvMbetyq0-ziSnM0gl9TkcFw8NlgiQGOi0nRWFjghlPFMSSs-0H8H8djrQX0esGhNQBiuOleehpGa2beTS0ZCpKwb9xXUhoB8mehUq3QS43UUeMQFSTQgz6DE_yUSd1lvsAZ5hH93Gp9hvNuxpaRC0myioSuSh-9f9b0QCXYaF5YxAc9CTdi6tyNr9THuF1kSzb9aywmoJUiH3K4hMLCTW_M2Sec-ObcT5HwaV-AYCcj0_daQGbMoP1WYdtcybPjm5VeDTEcjVCA2lmAfaftLlghPKXljYFAQIC2pb992Mjw';

  console.log(items);
  if (items == undefined) {
    axios({
      url: 'https://1e7fc97e-8568-4827-9933-f0cfd038f4ed-dev.e1-us-east-azure.choreoapis.dev/vfyw/ecommercegraphqlapi/1.0.0/',
      method: 'post',
      data: query,
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      }    
    }).then((result) => {
      console.log("Fez a CALL");
      items = result.data;
      console.log(items);
      console.log(result.data)
  
      setPokemon(result.data); //set pokemon state
      setLoading(false); //set loading state
  
    });
    }


    const itemPrice = {
      fontSize: '20px',
      fontWeight: 'bold',
      marginRight: '50px'
    };

    const items2 = [{"id":1, "title":"Top Paw Valentine's Day Single Dog Sweater", "description":"Top Paw Valentine's Day Single Dog Sweater is a cute and cozy way to show your dog some love this Valentine's Day. This sweater features a red heart on the back and a red bow on the front. It's made of soft, comfortable cotton and polyester blend fabric. It's machine washable for easy care. This sweater is available in sizes XS, S, M, L, XL and XXL...", "includes":"1 Sweater", "intended":"Dogs", "color":"Red, White, Black", "material":"100% Acrylic", "url":"/static/media/item-1.0483b98029449b6a1df1.png", "price":14.99}, {"id":2, "title":"Arcadia Trail Dog Windbreaker", "description":"The right jacket for your pet while the two of you are out on the trail together can make all the difference when it comes to both warmth and comfort. This Arcadia Trail Windbreaker zippers shut, features a packable hood, has an opening for a leash, and even comes with a waste bag dispenser and waste bags. Comfortable and versatile, this unique jacket makes a great choice for the outdoor adventures you share with your pup", "includes":"1 Windbreaker Jacket", "intended":"Dogs", "color":"Available in Pink or Navy", "material":"No material", "url":"/static/media/item-2.1d179427447d8296a0b4.png", "price":29.99}, {"id":3, "title":"Top Paw Valentine's Day Kisses Dog Tee and Bandana", "description":"Dress your pup up appropriately for Valentine's Day with this Top Paw Valentine's Day Kisses Dog Tee and Bandana. This tee and bandana slip on and off easily while offering a comfortable fit, and offers kisses from your favorite furry friend", "includes":"1 Tee and Bandana", "intended":"Dogs", "color":"White, Red, Black", "material":"T-Shirt: 65% Polyester, 35% Cotton; Bandana: 100% Cotton", "url":"/static/media/item-3.7334877b874a44c25b54.png", "price":7.47}];
    if (isLoading) {
      console.log("OK1");

      return (
        <>
        <Container>
        </Container>
      </>
      );
  
    }
  
    const myList = items.data.list;

    const listItems = myList.map((item) => {
      console.log("ITEM " + item.title);
      return <Col key={item.id}>
      <img src={item.url} width="300" alt="dog"/><br />
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <p>
                <b>Includes: </b> {item.includes}<br />
                <b>Intended For:</b> {item.intended}<br />
                <b>Color:</b> {item.color}<br />
                <b>Material: </b> {item.material}<br />
              </p>
              <br />
              <span style={itemPrice}>$ {item.price}</span> <Button variant="danger">Add to cart</Button>
              <br /><br />
              Follow updates &nbsp;&nbsp;<FontAwesomeIcon icon={regThumbsUp} /> 
    </Col>
  });



  
  return (
    <>
    <Container>
    <Row>{listItems}</Row>
    </Container>
  </>
  );

};



  export default function Catalog() {
    useEffect(() => {
        document.title = 'PetStore Catalog';
      }, []);
    return (
      <>
        <PetItemList />
      </>
    );
}