import { NavBar } from "./NavBar";
import './personal-info.css';

export function PersonalInfo() {


    return (
        <div className="container">
            <form action="">
                <div className="personali-info--card">
                    <h2>Personal Info</h2>
                    <p>Please provide your name, email address,
                        <br/> and phone number.
                    </p>

                    <label htmlFor="name">Name</label> <br/>
                    <input type="text" name="" id="name" /> <br/>
                    <label htmlFor="email-address">Email Address</label> <br/>
                    <input type="text" id="email-address"/> <br/>
                    <label htmlFor="phone-number">Phone Number</label> <br/>
                    <input type="text" id="phone-number" />
                
                </div>
            </form>
        </div>
    )
}
