import React from 'react'
import logo from './../image/tlo1.png';
import logoup from './../image/logo.png';
import {Link} from 'react-router-dom'
import {BsHeadset } from 'react-icons/bs'
import './Login.css';
import ReCAPTCHA from "react-google-recaptcha";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isVerified:false };

        this.handleOnChange =this.handleOnChange.bind(this)
    }
    handleOnChange(value) {
        console.log("Captcha value:", value);
        this.setState({isVerified: true})
    }

    render() {
        return (
            <html>
            {
                //screen
            }

            <div className='flex flex-row w-screen h-screen'>
                {
                    //lewy
                }

                <div className='w-[40%] h-screen flex flex-col'>
                    <img src={logoup} className=' object-none object-left-top ml-[5px]' alt="logo"></img>
                    <div className='flex flex-col h-screen items-center justify-center h-[100%]'>
                        <div className="w-[80%] h-[50%]">
                            <form className="flex flex-col w-[100%] space-y-[1rem]">
                                <label className="flex jusify-center items-center box-border">
                                    <input type="login" id="Login" name="login" placeholder="Login" required className='focus:outline-none w-[100%] h-[4rem] border-[1px] border-black rounded-[5px] pl-[10px]'></input>
                                </label>
                                <label>
                                    <input type="password" id="password" name="password" placeholder="Password" required className='focus:outline-none w-[100%] h-[4rem] border-[1px] border-black rounded-[5px] pl-[10px] '></input>
                                    <div className="pt-[1rem]">
                                        <ReCAPTCHA
                                            sitekey="6Ldh6VkjAAAAALQSbzhwhw_tAvmCpgQjCv75yRCY"
                                            onChange={this.handleOnChange}
                                        />
                                    </div>
                                </label>
                                <button   disabled={!this.state.isVerified} id="dis" type='submit' className='w-[100%] h-[4rem] border-[1px] bg-[#022DAA] rounded-[5px] pl-[10px] text-white mt-[50px] space-y-[2rem] hover:bg-blue-700'>
                                   { !this.state.isVerified ?
                                    <Link  className="disabled" onClick={ (event) => event.preventDefault()}  to="/main">
                                        <div  className='text-[2rem] font-lato font-bold'>Zaloguj się</div>
                                    </Link>
                                        : <Link    to="/main">
                                            <div  className='text-[2rem] font-lato font-bold'>Zaloguj się</div>
                                        </Link>
                                    }
                                </button>
                                <div className="bottom-0 left-0 mt-[10px]">
                                    <button className='hover:text-gray-400'>Zapomniałeś hasła?</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='flex justify-end mr-[10px]'>
                        <Link to="/help"> <SideBarIcon  icon={<BsHeadset size="28" />} /> </Link>
                    </div>
                </div>
                {
                    //prawy
                }
                <div className=' object-contain w-screen h-screen object-center'>
                    <div>
                        <div className='h-screen'>
                            <img src={logo} className="object-cover object-center h-[100%] w-[100%] " alt='test'></img>
                        </div>
                    </div>
                </div>
            </div>
            </html>
        );
    }


}

const SideBarIcon = ({ icon, text = 'Kontakt'}) => (
    <div className="sidebar-icon group ">
        {icon }
        <span className="sidebar-tooltip group-hover:scale-100">


    {text}
  </span>
    </div>

);
export default Login;