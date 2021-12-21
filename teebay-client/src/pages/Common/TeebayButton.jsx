import React from 'react'
import {Button} from 'semantic-ui-react'
const TeebayButton = ({content}) => {
    return (
        <div>
            <Button  style={{ backgroundColor: "#6558F5",color:"white" }}  size='large'>
                {content}
            </Button>
        </div>
    )
}

export default TeebayButton
