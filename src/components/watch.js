import React from "react";
import styled from "styled-components";

export const Card = styled.div`  
  box-sizing:border-box;
  box-shadow: 5px 5px 10px 0px rgba(50, 50, 50, 0.22);
  width: 250px;
  transition: all 0.3s ease-out;  
  @media(max-width:480px) {
    width:100%
  }
`

export const CardTitle = styled.h4`
  color:black;
  text-align:center
`

export const CartButton = styled.button`
  padding: 6px;
  border: 1px solid purple;
  color: purple;
  border-radius: 10px;
  width: 98%;  
  cursor: pointer;
  margin-bottom:20px;
`

export default function Watch({ watch }) {
    return(
        <Card key={watch}>             
            <CardTitle>{watch.title}</CardTitle>
            <CartButton>Add to Cart</CartButton>
        </Card>    
    )
}