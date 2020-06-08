import React, { useState } from 'react';
import ItemForm from '../item-form/ItemForm';

const ShoppingList = (props) => {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);

    const list = !props.items ? window.location.reload(true) : props.items.length ? (
        props.items.map((item, index) => {
            return (
                <div className="item" key={index}>
                    <span className="item-complete" style={{opacity : props.completedItems.includes(item) ? .2 : 1}} onClick={() => {props.completeItem(index)}}>
                        {item.item}
                    </span>
                </div>
            )
        })
    ) : ( 
        <div>

        </div>
    )
    return (
        <div className="item-page-container">
            <h1>GROCERIES AND YEET!</h1>
            <span>...did I say it right?</span>
            { show ?
                <div className="item-view" unselectable="on">
                    <span onClick={toggle}>add items</span>
                </div>
            : 
                <div>
                    <span onClick={toggle}>hide form</span>
                    <ItemForm 
                        item = {props.item}
                        handleChangeItems = {props.handleChangeItems}
                        handleSubmitItems = {props.handleSubmitItems}
                    />
                </div>
            }
            <div>
                {list}
                <button onClick={props.clearCompletedItems}>clear</button>
            </div>
        </div>
    )
}
export default ShoppingList;