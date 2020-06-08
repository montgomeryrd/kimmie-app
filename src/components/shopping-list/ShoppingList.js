import React, { useState } from 'react';
import ItemForm from '../item-form/ItemForm';

const ShoppingList = (props) => {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);

    const list = props.items.length ? (
        props.items.map((item, index) => {
            return (
                <div className="item" key={item.id = index}>
                    <span className="item-complete" style={{opacity : item.status ? 1 : .3}} onClick={() => {props.completeItem(item.id)}}>
                        {item.content}
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
                        items = {props.items}
                        completedItems = {props.completedItems}
                        handleChangeItems = {props.handleChangeItems}
                        handleSubmitItems = {props.handleSubmitItems}
                    />
                </div>
            }
        </div>
    )
}
export default ShoppingList;