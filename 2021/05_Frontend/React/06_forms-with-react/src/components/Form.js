import React from 'react'

function Form() {
    const handleChanges = () => {

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Sent');
    }
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <h2>A FORM</h2>
                <label for="formOrder">Order:</label>
                <input type="text" id="formOrder" placeholder='Your Order'/>
                <label for="formName">First name:</label>
                <input type="text" id="formName" placeholder='Your Name'/>
                <label for="formLName">Last name:</label>
                <input type="text" id="formLName" placeholder='Your Last Name'/>
                <label for="formLName">Phone Number</label>
                <input type="number" id="formNumber" placeholder='Your Number (include prefix "+")'/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Form
