import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { get_value_input, setObject_input } from '../redux/Slice/productSlice'
const Search = () => {

    const state_product = useSelector((state_product) => state_product.product)

    const dispatch = useDispatch()

    const getProductByName = (name) => state_product.products.filter(item => {
        for (let i = 0; i < name.length; i++) {
            if (item.name[i] === name[i]) {
                continue;
            }
            else return;
        }
        return item;
    })

    function Enter(e) {
        if (e.charCode == 13) {
            dispatch(setObject_input(getProductByName(state_product.value_input.toUpperCase())))
        }
    }

    return (
        <Link to="/Menu" className="search-container">
            <input type="text" className="search-input" placeholder="Tìm kiếm..." 
            onChange={e => dispatch(get_value_input(e.target.value))} 
            onBlur={e => e.target.value = ""} 
            onKeyPress={e => Enter(e)}
            />
        </Link>
    )
}

export default Search
