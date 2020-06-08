import React from 'react';

const ItemForm = (props) => {
    return (
        <div className="item-form-container">
            <form action="/dashboard" method="post" onSubmit={props.handleSubmitItems}>
                <input
                    type="text"
                    id="item"
                    name="item"
                    value={props.item}
                    onChange={props.handleChangeItems}
                    required={true}
                    autoComplete="off"
                    placeholder="input item..."
                />
                <button className="submit" type="submit" onSubmit={props.handleSubmitItems}>add item</button>
            </form>
        </div>
    )
}
export default ItemForm;