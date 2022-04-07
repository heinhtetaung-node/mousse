import React, { useEffect } from 'react'

const Tabname = props => {

    document.title = 'Mousse - ' + props.title

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div>{props.children}</div>
    )
}

export default Tabname