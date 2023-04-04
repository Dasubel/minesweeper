import React, { useState } from 'react'
import { Container, Row, Col }  from 'react-bootstrap';

export default function Board({ board }) {

    const [flag, setFlag] = useState(false)
    const bombs = [7, 13, 22, 36, 44, 55, 61, 79, 80, 97]
    const calculate = (cell) => {
        if(!bombs.includes(cell)){
            console.log(cell)
            document.getElementById(cell).style.backgroundColor = 'rgb(195,195,195)'
            document.getElementById(cell).style.textAlign = "center"
            document.getElementById(cell).innerHTML = 'X'
            setFlag(true)
        } else {
            document.getElementById(cell).style.backgroundColor = 'red'
            alert(`You've clicked on a bomb!  Please try again!`)
            window.location.reload(true)
        }
    }

    return (
        <Container style={{border: '1px solid black', height:'100vh', width:'100vw'}}>
            {
                board.map((row, index) => {
                    return (<Row id={index} key={index} style={{border: '1px solid black', height:'10vh'}}>
                        {
                            row.map((num, i) => {
                                return (
                                    <Col id={num} key={i} onClick={() => calculate(num)} style={{border: '1px solid white', backgroundColor:'rgb(98,98,98)', height:'10vh'}} >
                                    </Col>)
                            })
                        }
                    </Row>)
                })
            }
        </Container >
    )
}