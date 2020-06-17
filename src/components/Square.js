import React from 'react'
import Button from '@material-ui/core/Button';


export default function Square(props) {
    return (
        <Button className="square" variant="contained" color="yellow" onClick={props.onClick}  >
            {props.value}
        </Button>
    )
}
