import React from "react";
import './Help.css';
import helpbg from './../image/helpbg.jpg'
import ReCAPTCHA from "react-google-recaptcha";


class Help extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isVerified:false };

        this.handleOnChange =this.handleOnChange.bind(this)
    }
    handleOnChange(value) {
        console.log("Captcha value:", value);
        this.setState({isVerified: true})
    }

    render() {
        return (
            <html className='w-screen h-screen'>
            <div className="h-[100%] w-[100%]">
                <img className="object-cover object-center h-[100%] w-[100%] " src={helpbg} alt={"helpbg"}/>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <form className="w-[550px] h-[100%] max-w-[550px] bg-white p-[40px] rounded-[3px] ">

                        <h1 className="m-0 text-center"> Kontakt</h1>

                        <label htmlFor="name">Login: </label>
                        <input type="text" id="name" placeholder="Twój login" required className='focus:outline-none  border-[1px] border-black rounded-[5px] pl-[10px]'/>
                        <small className="error"></small>

                        <label htmlFor="email">Email: </label>
                        <input type="text" id="email" placeholder="Twój email" required className='focus:outline-none  border-[1px] border-black rounded-[5px] pl-[10px]'/>
                        <small className="error"></small>

                        <label htmlFor="message">Wiadomość: </label>
                        <textarea id="message" placeholder="Twoja wiadomość" rows="3" required className='focus:outline-none  border-[1px] border-black rounded-[5px] pl-[10px] '/>
                        <small className="error"></small>

                        <div>
                            <ReCAPTCHA
                                sitekey="6Ldh6VkjAAAAALQSbzhwhw_tAvmCpgQjCv75yRCY"
                                onChange={this.handleOnChange}
                            />

                            <button disabled={!this.state.isVerified} id="dis" type='submit' className='w-[100%] h-[4rem]  border-[1px] bg-blue-800  rounded-[5px] pl-[10px] text-white mt-[50px] space-y-[1rem] hover:bg-blue-700 '>
                                <div className=' font-lato font-bold' >Wyślij</div>
                            </button >
                            <p id="succes"/>
                        </div>

                    </form>
                </div>
            </div>
            </html>
        );
    }


}




export default Help;
