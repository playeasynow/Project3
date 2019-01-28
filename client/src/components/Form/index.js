import React from "react";
// import Typeform from "../Typeform";

function Form({ fname, lname, pword, user, email, handleInputChange, handleFormSubmit}) {
    return (
        <form>
            <div className="form-group row">
                <div className="col-sm-8">
                    <label>First Name</label>
                    <input onChange={handleInputChange} value={fname} name="fname" type="text" className="form-control" placeholder="First name" />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-8">
                    <label>Last Name</label>
                    <input onChange={handleInputChange} value={lname} name="lname" type="text" className="form-control" placeholder="Last name" />
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-8">
                    <label>Password</label>
                    <input onChange={handleInputChange} value={pword} name="pword" type="password" className="form-control" placeholder="Password" />
                </div>
            </div>

            <fieldset className="form-group">
                <div className="row">
                    <legend className="col-form-label col-sm-2 pt-0">Client or Coach</legend>
                    <div className="col-sm-10">
                        <div className="form-check custom-control-inline">
                            <input onChange={handleInputChange} className="form-check-input" type="radio" name="gridRadios" id="user-client" value={user} defaultChecked />
                            <label className="form-check-label">
                                Client</label>
                        </div>
                        <div className="form-check custom-control-inline">
                            <input onChange={handleInputChange} className="form-check-input" type="radio" name="gridRadios" id="user-coach" value={user} />
                            <label className="form-check-label">
                                Coach</label>
                        </div>
                    </div>
                </div>
            </fieldset>

            <div className="form-group">
                <div className="row">
                    <div className="col-sm-8">
                        <label>After completing the survey, confirm your email address</label>
                        <input onChange={handleInputChange} value={email} type="email" name="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-10">
                    <button onClick={handleFormSubmit} type="submit" className="btn btn-primary">Gather Matches</button>
                </div>
            </div>
        </form>
    );
}

export default Form;