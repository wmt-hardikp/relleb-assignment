import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Watch from "./watch";

export const Grid = styled.div`
    border-top:1px solid purple;
    box-sizing:border-box;  
    margin-top:10px;
    padding:5px;    
    display:flex;  
    column-gap:20px;
    row-gap:30px;  
    flex-wrap: wrap;
    @media(max-width:480px) {
    flex-direction:column;
    row-gap:20px;
    }
`;

export default function Watches({ watches }) {
  const[isSearch, setIsSearch] = useState(false);
  const filteredWatches = []
    return(
        <Grid>
        {
           isSearch ?
            filteredWatches && filteredWatches.map((watch) => {{
                return <Watch watch={watch} key={watch._id}/>
            }})   
            :
            watches && watches.map((watch) => {{
                return <Watch watch={watch} key={watch._id}/>
            }})   
  
        }                  
        </Grid>
    )
}


export async function getStaticProps() {
    // const data = await ingest();
    const data = [];
    const watches = JSON.stringify(data);
    return {
      props: {
        watches
      }
    };
  }