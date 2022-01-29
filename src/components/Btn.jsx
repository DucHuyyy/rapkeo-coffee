import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap'
const Btn = props => {
    let URL;
    if (props.class === "btn_info-item") {
         URL = "/Menu/" + props.link;
    }
    else
    {
        URL = props.link;
    }

    return (
        <Link to={URL}>
            <Button className={props.class} onClick={props.onClick}>{props.name}</Button>
        </Link>
    )
}

Btn.propTypes = {
    name: PropTypes.string.isRequired,
    class: PropTypes.string.isRequired,
    link: PropTypes.string,
    onClick: PropTypes.func
}

export default Btn
