import React, {useEffect} from 'react';
import { Container, Row, Col, Button }  from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as regThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faThumbsUp as solidThumbsUp } from '@fortawesome/free-solid-svg-icons';
// import PetStoreNav from '../../App.js';

//call graphql api to get list of items
const getItems = () => {
  console.log("GRAPHQL API CALL");
  const query = `
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
  `;
  return fetch('http://localhost:9090/catalog', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({query})
  })
  .then(r => r.json())
  .then(data => data.list);
}

// Component to render the item list
const PetItemList = () => {
    const itemPrice = {
      fontSize: '20px',
      fontWeight: 'bold',
      marginRight: '50px'
    };

    const items = [{"id":1, "title":"Top Paw Valentine's Day Single Dog Sweater", "description":"Top Paw Valentine's Day Single Dog Sweater is a cute and cozy way to show your dog some love this Valentine's Day. This sweater features a red heart on the back and a red bow on the front. It's made of soft, comfortable cotton and polyester blend fabric. It's machine washable for easy care. This sweater is available in sizes XS, S, M, L, XL and XXL...", "includes":"1 Sweater", "intended":"Dogs", "color":"Red, White, Black", "material":"100% Acrylic", "url":"/static/media/item-1.0483b98029449b6a1df1.png", "price":14.99}, {"id":2, "title":"Arcadia Trail Dog Windbreaker", "description":"The right jacket for your pet while the two of you are out on the trail together can make all the difference when it comes to both warmth and comfort. This Arcadia Trail Windbreaker zippers shut, features a packable hood, has an opening for a leash, and even comes with a waste bag dispenser and waste bags. Comfortable and versatile, this unique jacket makes a great choice for the outdoor adventures you share with your pup", "includes":"1 Windbreaker Jacket", "intended":"Dogs", "color":"Available in Pink or Navy", "material":"No material", "url":"/static/media/item-2.1d179427447d8296a0b4.png", "price":29.99}, {"id":3, "title":"Top Paw Valentine's Day Kisses Dog Tee and Bandana", "description":"Dress your pup up appropriately for Valentine's Day with this Top Paw Valentine's Day Kisses Dog Tee and Bandana. This tee and bandana slip on and off easily while offering a comfortable fit, and offers kisses from your favorite furry friend", "includes":"1 Tee and Bandana", "intended":"Dogs", "color":"White, Red, Black", "material":"T-Shirt: 65% Polyester, 35% Cotton; Bandana: 100% Cotton", "url":"/static/media/item-3.7334877b874a44c25b54.png", "price":7.47}];
    //console.log("ITEMS " + JSON.stringify(items));

    const listItems = items.map((item) => {
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