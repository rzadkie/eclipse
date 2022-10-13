import '../App.scss';
import './ContactUs.scss';
import send from '../send.svg';
import Discord from './Discord/Discord';


const MailIcon = (props) => (
    <svg width="24" height="24" stroke={props.stroke} className='props.class' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
        <path stroke={props.stroke} fill='none' stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"/>
        <path stroke={props.stroke} fill='none' stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 6.5L12 12.25L18.5 6.5"/>
    </svg>
)

const PhoneIcon = (props) => (
    <svg width="24" height="24" stroke={props.stroke} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke={props.stroke} fill='none' stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"></path>
    </svg>
)

const ContactUs = () => {
    return(
        

        <div className='Wrapper2'>
        <div className='Content' id='ContactUs'>
        <div className='ContactBox' >
        <h2 className='ContactHeader'> Let's get in touch </h2>    
        <div className='FormMain'>
        <form className='FormMail' method='POST' >
            <h4>Reach us from here</h4>
            <input type="text" name="email" alt='email input form' className='email' id='email' placeholder="email" required/>
            <input type="text" name="name" alt='name input form' className='name' id='name' placeholder="name" required/>
            <textarea type="text" alt='message input form' name="contetns" className='contents' id='contents' placeholder="message" required/>
            <button type='submit' alt='send button' value= "" name='send' className='send'> <img className='SendIcon' src={send}/> </button> 
        </form> 
            <div className='ContactSeparator'><h4>or</h4></div>
            <div className='ContactInfo'>
                <h4>do it by yourself</h4>
                <div className='ContactInfoBox'>
                <div className='ContactInfoBoxChild'>
                <MailIcon stroke='white'/> 
                <p className='ContactInfoTxt' onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigator.clipboard.writeText(e.target.textContent);
                    
                }}> 
                mail@mail.com</p>
                </div>
                <div className='ContactInfoBoxChild'>
                <PhoneIcon stroke="white"/>
                <p className='ContactInfoTxt' onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    navigator.clipboard.writeText(e.target.textContent);
                }}>  69202137</p>
                </div>

                </div>
            </div>
        </div> 
        </div> 
        <div className = 'DiscordBox' >
        <h3> Our Grim and Frostbitten Discord </h3>
        <Discord/>

        
        </div> 
        </div>

        </div>
        
    )
}

export default ContactUs;