import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listDetail } from '../../Redux/Action/DetailAction'
import Tabname from '../Tab/Tabname'

const Detail = ({match}) => {
    const detailId = match.params.id
    
    // DETAIL PRODUCT LIST
    const dispatch = useDispatch()
    const detailProductList = useSelector(state => state.detailProductList)
    const { loading, error, detail } = detailProductList

    console.log(detail);

    useEffect(() => {
        dispatch(listDetail(detailId))
    }, [dispatch, detailId])

    return (
        <Tabname title="Detail">
            <div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                Detail with you
            </div>
        </Tabname>
        
    )
}

export default Detail