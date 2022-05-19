// it is the form section (login and signup )

import React from 'react'
import './FormSection.scss'

const FormSection = () => {
    return (
        <div className="form-section">
            <div className="form-box">
                <input placeholder='Name' type="text" />
                <input placeholder='Email' type="text" />
                <div className="signup">
                    <h1>Upload user profile</h1>
                    <div>
                        <button style={{background:"#17505D"}}>Upload</button>
                    </div>
                </div>
                <div className="login">
                    <p>Already have an account?</p>
                    <div>
                        <button style={{background:"#F05D2A"}}>login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FormSection