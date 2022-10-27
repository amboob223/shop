import React from 'react'
import "../App.css"
import { useState } from "react";
import axios from 'axios';

function Merchform() {

    const [formData, setFormData] = useState(
        {
            firstname: "",
            lastname: "",
            street: "",
            city: "",
            zipCode: "",
            phone: "",
            shirt: "",
            mug: "",
            pen: ""

        }
    )

    const formHandler = (event) => {
        const { name, type, checked, value } = event.target

        setFormData(formData => {
            return {
                ...formData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }


    function submitHandler(event) {
        event.preventDefault()
        console.log(formData)
        //we send info to spreadsheet using axios and sheets .best and wew get
        const data = {
            FirstName: formData.firstname,
            LastName: formData.lastname,
            Street: formData.street,
            City: formData.city,
            ZipCode: formData.zipCode,
            Phone: formData.phone,
            Pen: formData.pen,
            Mug: formData.mug,
            Shirt: formData.shirt
        }

        //axios we will make a post to spread sheet and what kind of product
        axios.post("https://docs.google.com/spreadsheets/d/1U7jYeB9mXwqvfjmjPHKBgi4EZvEhtPJIM7NNIOtmd5o/edit#gid=0", data).then(
            (response) => {
                console.log(response)

                setFormData(
                    {
                        firstname: "",
                        lastname: "",
                        street: "",
                        city: "",
                        zipCode: "",
                        phone: "",
                        shirt: "",
                        mug: "",
                        pen: ""
                    }
                )
            }
        )
        alert("We are sending your merch right now")
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    name="firstname"
                    onChange={formHandler}
                    value={formData.firstname}
                    id="firstname"
                />,
                <input
                    type="text"
                    name="lastname"
                    onChange={formHandler}
                    value={formData.lastname}
                    id="lastname"
                />,
                <input
                    type="text"
                    name="street"
                    onChange={formHandler}
                    id="street"
                    value={formData.street}
                />
                <input
                    type="text"
                    name="city"
                    onChange={formHandler}
                    id="city"
                    value={formData.city}
                />
                <input
                    type="text"
                    name="zipCode"
                    onChange={formHandler}
                    id="zipCode"
                    value={formData.zipCode}
                />
                <input
                    type="text"
                    name="phone"
                    onChange={formHandler}
                    id="phone"
                    value={formData.phone}
                />
                <input
                    type="text"
                    name="mug"
                    id="mug"
                    onChange={formHandler}
                    value={formData.mug}
                />
                <input
                    type="text"
                    name="pen"
                    id="pen"
                    onChange={formHandler}
                    value={formData.pen}
                />
                <input
                    type="text"
                    name="shirt"
                    id="shirt"
                    onChange={formHandler}
                    value={formData.shirt}
                />
                <button>
                    submit
                </button>

            </form>
        </div>
    )
}

export default Merchform