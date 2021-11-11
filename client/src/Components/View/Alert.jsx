import React from 'react'
import Alert from 'react-bootstrap/Alert'
const AlertMessage = ({infor}) => {
    return  infor===null ? null :(
        <div>
            <Alert variant={infor.type}>{ infor.message}</Alert>
        </div>
    )
}

export default AlertMessage;
