import React from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css'
const ContactMe = () => {

    const sendEmail = e => {
        emailjs.sendForm('service_7amm9ho', 'template_nqy046e', e.target, 'user_8UCGJ8UfBqs3ZI7MS2jlD')
            .then(res => {
                console.log(res);
                e.target.value = "";
            }).catch(error => {
                console.log(error);
            })
        e.preventDefault();

    }


    return (
        <section className="container  form-bg-color">
            <div className="container my-5 col-lg-4 col-md- col-12">
                <div className=" my-5"><p className="text-center fw-bold fs-2">Conect With Me</p></div>


                <form onSubmit={sendEmail}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Your Name</label>
                        <input type="text" name="name" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />

                    </div>
                    <div className="mb-3" >
                        <label htmlFor="example" className="form-label">Email address</label>
                        <input type="email" name="user-email" className="form-control" id="example" placeholder="name@example.com" /></div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <br />
                    <div className="d-flex justify-content-center align-items-center"><button className="btn btn-custom-color fw-bold py-1 px-2 fs-5">Submit</button></div>
                </form>
            </div>
        </section>
    );
};

export default ContactMe;