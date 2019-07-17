import React from 'react';
import Datatable from './../DataTable/DataTable';
import styled from 'styled-components';
import Nav from '../Nav/Nav';


const TableContainer = styled.div`
width: 100vw;
height: 93vh;
background: #B49082;
display: flex;
flex-direction: row;
justify-content: center;
align-content: center;
`;

const TableWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
width: 70vw;
`



export default function Inventory() {



    return (
    <>
        <Nav />
            <TableContainer>
                <TableWrapper>
                    <Datatable />
                </TableWrapper>
            </TableContainer>
    </>
    )
}