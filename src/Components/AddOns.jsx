import { useState } from "react"

export function AddOns() {

    const [addOn, setAddOn] = useState([
        {
            'title': 'Online service',
            'price-mo': 1,
            'description': 'Access to multiplayer games'
        },
        {
            'title': 'Larger storage',
            'price-mo': 2,
            'description': 'Extra 1TB of cloud save'
        },
        {
            'title': 'Customizable profile',
            'price-mo': 2,
            'description': 'Custom theme on your profile'
        }
    ])
    return (
        <div className="add-ons">
            <h2>Pick add-ons</h2>
            <p>Add-ons helps enhance your gaming <br/> experience</p>

            
        </div>
    )
}