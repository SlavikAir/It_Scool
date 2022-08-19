import React, { useEffect } from 'react';
import { CGood } from '../modules/Goods';
import { connect } from 'react-redux';
import { actionCatById } from '../../redux/actions/actionsCats';




const PageGoodsCategory = ({ match: { params: { _id } }, getData }) => {
    useEffect(() => {
        getData(_id)
    }, [_id])
    return (
        <CGood />
    )
}
const CPageCategory = connect(null, { getData: actionCatById })(PageGoodsCategory)

export {CPageCategory}