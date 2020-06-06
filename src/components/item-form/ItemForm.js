import React from 'react';

const ItemForm = (props) => {
    return (
        <div className="item-form-container">
            <form action="/dashboard" method="post">
                <input
                    type="text"
                    id="item"
                    name="item"
                    value={props.item}
                    onChange={props.handleChangeItems}
                    required={true}
                    placeholder="I need to buy..."
                />
                <button type="submit" onSubmit={props.handleSubmitItems}>add item</button>
            </form>
        </div>
    )
}
export default ItemForm;