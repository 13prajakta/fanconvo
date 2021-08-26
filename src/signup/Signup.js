import React from 'react'
import '../assets/Signup.scss';
import Footer from './Footer.js'
import Nav from './Nav.js'
import { useState } from 'react'
import { validate } from '../util/validation.js';
import axios from 'axios'

function Signup() {

    let [errors, setErrors] = useState({})
    let [user, setUser] = useState({})
    let [msg, setMsg] = useState()
    const onSubmit = (e) => {
        e.preventDefault();
        let fields = e.target.elements
        let error = validate(fields)
        if (Object.keys(error).length > 0) {
            setErrors(error)
        }
        else {

            var user = {
                first_name: fields.fname.value,
                last_name: fields.lname.value,
                username: fields.uname.value,
                email: fields.email.value,
                password: fields.password.value,
                timezone: "America/New_York",
                captcha: "true",

            }
            setUser(user)
            setErrors(" ")
            let apiurl = "https://admin.fanconvo.com/api/v3/sign-up/fan"
            axios({
                url: apiurl,
                method: "POST",
                data: user
            }).then((response) => {
                setMsg(response.message);
                // console.log(response.data)
                alert(response.message);
            }, (error) => {
                console.log("error from fan api", error)
            }, [user])


        }
    }

    const onSubmitTalent = (e) => {
        e.preventDefault();
        let fields = e.target.elements
        let error = validate(fields)
        if (Object.keys(error).length > 0) {
            setErrors(error)
        }
        else {

            var user = {
                first_name: fields.fname.value,
                last_name: fields.lname.value,
                username: fields.uname.value,
                email: fields.email.value,
                password: fields.password.value,
                timezone: "America/New_York",
                captcha: "true",

            }
            setUser(user)
            setErrors(" ")
            let apiurl = "https://admin.fanconvo.com/api/v3/sign-up/talent"
            axios({
                url: apiurl,
                method: "POST",
                data: user
            }).then((response) => {
                setMsg(response.message);
                alert(response.message);
            }, (error) => {
                console.log("error from fan api", error)
            }, [user])


        }
    }

    return (
        <>
            <div className="container-fluid background">
                <div class="main">
                    <Nav />
                    <div className="tag">
                        <p>A MarketPlace For Conversation, mentorship and performance</p>
                        <span>Search New Talent</span>
                        <form class="form-inline">
                            <input class="form-control searchh mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                    <div class="main-form">
                        <div className="detail-menue">
                            <ul class="nav nav-pills mb-3 justify-content-center nav-fill" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">FAN SIGNUP</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">TALENT SIGNUP</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <p>Create Your Fan Account</p>
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                                    <form onSubmit={onSubmit}>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">First Name *</label>
                                            <input type="text" name="fname" class="form-control" placeholder="Enter Your First Name" />
                                            {errors.fname ? <span className="text-danger font-weight-bold">{errors.fname}</span> : null}
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputtext1">Last Name *</label>
                                            <input type="text" name="lname" class="form-control" placeholder="Enter Your Last Name" />
                                            {errors.lname ? <span className="text-danger font-weight-bold">{errors.lname}</span> : null}
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputtext1">User Name *</label>
                                            <input type="text" name="uname" class="form-control" placeholder="Enter Your User Name" />
                                            {errors.uname ? <span className="text-danger font-weight-bold">{errors.uname}</span> : null}
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email *</label>
                                            <input type="email" name="email" class="form-control" placeholder="Enter Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            {errors.email ? <span className="text-danger font-weight-bold">{errors.email}</span> : null}
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">TimeZone *</label>
                                            <input type="text" name="time" class="form-control" placeholder="Enter Your Time Zone" />
                                            {errors.time ? <span className="text-danger font-weight-bold">{errors.time}</span> : null}
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Password *</label>
                                            <input type="password" name="password" class="form-control" placeholder="Enter Password" />
                                            {errors.password ? <span className="text-danger font-weight-bold">{errors.password}</span> : null}
                                        </div>
                                        <div class="form-group form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1" checked />
                                            <label class="form-check-label" for="exampleCheck1">I agree The terms and conditions</label>
                                        </div>
                                        <button type="submit" class="btn signup">Signup</button>
                                        <p class="already">Already Have An Account?<span>Log in</span></p>
                                    </form>


                                </div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">


                                    <form onSubmit={onSubmitTalent}>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">First Name *</label>
                                            <input type="text" name="fname" class="form-control" placeholder="Enter Your First Name" />
                                            {errors.fname ? <span className="text-danger font-weight-bold">{errors.fname}</span> : null}
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputtext1">Last Name *</label>
                                            <input type="text" name="lname" class="form-control" placeholder="Enter Your Last Name" />
                                            {errors.lname ? <span className="text-danger font-weight-bold">{errors.lname}</span> : null}
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputtext1">User Name *</label>
                                            <input type="text" name="uname" class="form-control" placeholder="Enter Your User Name" />
                                            {errors.uname ? <span className="text-danger font-weight-bold">{errors.uname}</span> : null}
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email *</label>
                                            <input type="email" name="email" class="form-control" placeholder="Enter Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            {errors.email ? <span className="text-danger font-weight-bold">{errors.email}</span> : null}
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">TimeZone *</label>
                                            <input type="text" name="time" class="form-control" placeholder="Enter time Zone" />
                                            {errors.time ? <span className="text-danger font-weight-bold">{errors.time}</span> : null}
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Password *</label>
                                            <input type="password" name="password" class="form-control" placeholder="Enter Password" />
                                            {errors.password ? <span className="text-danger font-weight-bold">{errors.password}</span> : null}
                                        </div>
                                        <div class="form-group form-check">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1" checked />
                                            <label class="form-check-label" for="exampleCheck1">I agree The terms and conditions</label>
                                        </div>
                                        <button type="submit" class="btn signup">Signup</button>
                                        <p class="already">Already Have An Account?<span>Log in</span></p>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}
export default Signup