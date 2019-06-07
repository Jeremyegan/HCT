import React from 'react';
import Datatable from './../DataTable/DataTable';
import styled from 'styled-components';


const TableContainer = styled.div`
width: 100vw;
height: 93vh;
background: green;
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
`;

export default function Inventory() {
    return (
        <div>
        <TableContainer>
            <Datatable />
        </TableContainer>
        </div>
    )
}