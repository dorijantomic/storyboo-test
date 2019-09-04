import React from 'react'
import Button from "@material-ui/core/Button"
const MyButton = ({variant, color}) => {
    return (
        <div>
            <Button variant={variant} color={color}>
                Hello
            </Button>
        </div>
    )
}

export default MyButton
