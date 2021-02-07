import React from 'react'
import { Link } from "react-router-dom"
import "./register.css"

export default function Register() {
    return (
        <body id = "bg">

        <div>
            
            <div class="regform">
                <h1>Patient Medical History Form</h1>
            </div>
            <div class="main">
                <form method="POST">
                    {/* this is the starting of the form */}
                    <br/><h1 class="headings">General Patient Information</h1><hr/>
                    <div id="name">
                        {/* inputing personal details */}
                        <h2 class="name">Name</h2>
                        <input class="firstname" type="text" name="first_name" placeholder="First Name" /><br />
                        {/* <label class="firstlabel">first name</label> */}
                        <input class="lastname" type="text" name="last_name" placeholder = 'Last Name'/><br />
                        {/* <label class="lastlabel">last name</label> */}
                    </div>
                    {/* inputing address and other related data*/}
                        <h2 class="name">Address</h2>
                    <div>
                        <input class="address" type="text" name="address" />
                        <h2 class="name">Email</h2>
                        <input class="email" type="email" name="email" />
                        <h2 class="name">Phone</h2>
                        <input class="Code" type="text" name="area_code" placeholder = "Area Code" />
                        {/* <label class="area-code">Area Code</label> */}
                        <input class="number" type="text" name="phone" placeholder = 'Phone Number'/>
                        {/* <label class="phone-number">Phone Number</label> */}
                    </div>
                    <div>
                        
                    <h2 class="name">Gender</h2>
                    <select class="option" name="gender">
                    <option disabled="disabled" selected="selected">
                        --Choose option--
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                    </select>

                    <h2 class="name">Date of Birth</h2>
                    <input class="dob" type="date" name="dob" />

                    <h2 class="name">Patient Height (cm's)</h2>
                    <input class="height" type="number" name="height" />

                    <h2 class="name">Patient Weight (kg's)</h2>
                    <input class="weight" type="number" name="weight" />

                    <h2 class="name">Reason for seeing the doctor:</h2>
                    <input class="reason" type="text" name="reason" />

                    <h2 class="name" id="name">Please list any drug allergies</h2>
                    <textarea
                    class="allergies"
                    placeholder="List all the drug allergies you have here"
                    name="allergies"
                    cols="90"
                    rows="10"
                    ></textarea>
                    </div>
                    <div>
                        <h2 class="name">Any other disease:</h2>
                        <input class="otherdis" type="text" name="otherdis" />

                        <h2 class="name" id="name">Please list any Operations and Dates of Each</h2>
                        <textarea
                        class="operations"
                        placeholder="List all your operations with dates here"
                        name="operations"
                        cols="90"
                        rows="10"
                        ></textarea>
                        <h2 class="name" id="name">Please list your Current Medications</h2>
                        <textarea
                        class="medicines"
                        placeholder="List all your current medicines here"
                        name="medicines"
                        cols="90"
                        rows="10"
                        ></textarea>
                    </div>
                    <div>
                        <br/><h1 class="headings">Healthy & Unhealthy Habits</h1><hr/>
                        <div>
                            <h2 class="name">Exercise</h2>
                            <ul class="exercise">
                                <li class="list"><label class="radio" />
                                    <input
                                    class="exercise"
                                    type="radio"
                                    checked="checked"
                                    name="exercise"
                                    />Never</li>
                                <li class="list"><label class="radio"/>
                                    <input
                                    class="exercise"
                                    type="radio"
                                    
                                    name="exercise"
                                    />1-2 days</li>
                                <li class="list"><label class="radio"/>
                                    <input
                                    class="exercise"
                                    type="radio"
                                    
                                    name="exercise"
                                    />3-4 days</li>
                                <li class="list"><label class="radio"/>
                                    <input
                                    class="exercise"
                                    type="radio"
                                    
                                    name="exercise"
                                    />5+ days</li>

                            </ul>
                        </div>
                        <div>
                        <h2 class="name">Eating following a diet</h2>                               
                        <ul class="diet">
                            <li class="list"><label class="radio"/>
                                <input
                                class="diet"
                                type="radio"
                                checked="checked"
                                name="diet"
                                />I have a loose diet plan</li>
                            <li class="list"><label class="radio"/>
                                <input
                                    class="diet"
                                    type="radio"
                                    
                                    name="diet"
                                    />I have a strict diet plan</li>
                            <li class="list"><label class="radio"/>
                                <input
                                class="diet"
                                type="radio"
                                
                                name="diet"
                                />I don't have a diet plan</li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="name">Do you smoke</h2>
                            <ul class="smoke">
                                <li class="list"><label class="radio"/>
                                    <input
                                    class="smoke"
                                    type="radio"
                                    checked="checked"
                                    name="smoke"
                                    />No</li>
                                <li class="list"><label class="radio"/>
                                    <input
                                    class="smoke"
                                    type="radio"
                                    
                                    name="smoke"
                                    />0-1 pack/day</li>
                                <li class="list"><label class="radio"/>
                                    <input
                                    class="smoke"
                                    type="radio"
                                
                                    name="smoke"
                                    />1-2 packs/day</li>
                                <li class="list"><label class="radio"/>
                                    <input
                                    class="smoke"
                                    type="radio"
                                    
                                    name="smoke"
                                    />2+ packs/day</li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="name">Alcohol Consumption</h2>
                            <ul class="alcohol">
                                <li class="list"><label class="radio"/>
                                    <input
                                    class="alcohol"
                                    type="radio"
                                    checked="checked"
                                    name="alcohol"
                                    />I don't drink</li>
                                <li class="list"><label class="radio"/>
                                    <input
                                    class="alcohol"
                                    type="radio"
                                
                                    name="alcohol"
                                    />1-2 cups/day</li>
                                <li class="list"><label class="radio"/>
                                    <input
                                    class="alcohol"
                                    type="radio"
                                
                                    name="alcohol"
                                    />3-4 cups/day</li>
                                <li class="list"><label class="radio"/>
                                    <input
                                    class="alcohol"
                                    type="radio"
                                
                                    name="alcohol"
                                    />5+ cups/day</li>
                                </ul>                   
                        </div>
                        <h2 class="name" id="name">Include other comments regarding your Medical History</h2>

                        <textarea
                        class="history"
                        placeholder="Please comments other thing not asked in form releated to your medical history"
                        name="history"
                        cols="90"
                        rows="10"
                        ></textarea>

                        <button type="submit" class = "subb">Submit</button>
                    </div>
                </form>
            </div>
            

        
        </div>
        </body>
    )
}
