import React, { useState } from 'react';
import ItemForm from '../item-form/ItemForm';
import grocerys from '../../assets/grocery.svg';

const ShoppingList = (props) => {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);

    const list = !props.items ? window.location.reload(true) : props.items.length ? (
        props.items.map((item, index) => {
            return (
                <div className="item" unselectable="on" key={index}>
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
            <h1 className="title">GROCERIES AND YEET!</h1>
            { show ?
                <div className="item-view" unselectable="on">
                    <span className="subtitle" onClick={toggle}>...add items</span>
                </div>
            : 
                <div>
                    <span className="subtitle" onClick={toggle}>...hide form</span>
                    <ItemForm 
                        item = {props.item}
                        handleChangeItems = {props.handleChangeItems}
                        handleSubmitItems = {props.handleSubmitItems}
                    />
                </div>
            }
            <div className="list-container">
                {list}
                { props.items.length ?
                    <button className="clear-btn" onClick={props.clearCompletedItems}>clear completed items</button>
                :
                    <div className="groceries">
                        <img className="empty" width="25%" src={grocerys} alt="groceries"/>
                        <img className="empty" width="25%" src={grocerys} alt="groceries"/>
                        <img className="empty" width="25%" src={grocerys} alt="groceries"/>
                    </div>
                }
            </div>
        </div>
    )
}
export default ShoppingList;