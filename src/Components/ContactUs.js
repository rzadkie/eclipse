import '../App.scss';
import './ContactUs.scss';
import send from '../send.svg';


const ContactUs = () => {
    return(
        

        <div className='Wrapper2'>
        <div className='Content' id='ContactUs'>
        <div className='FormBox' >
        <h3 className='FormHeader'> Let 's get in touch </h3>    
        <form className='FormMain' method='POST'>

        <div className='FormMail' >
        <input type="text" name="email" alt='email input form' className='email' id='email' placeholder="email" required/>
        <input type="text" name="name" alt='name input form' className='name' id='name' placeholder="name" required/>
        <textarea type="text" alt='message input form' name="contetns" className='contents' id='contents' placeholder="message" required/>
        <button type='submit' alt='send button' value= "" name='send' className='send'> <img className='SendIcon' src={send}/> </button> 
        </div> 
        </form> 
        </div> 
        <div className = 'Contact' >
        <div className='Discord'> placeholder</div>
        {/* <iframe className = 'Discord' src = "https://discord.com/widget?id=354989172055867404&theme=dark" allowtransparency = "true" frameborder = "0" sandbox = "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"> </iframe> </div> */}

        
        </div> 
        </div>

        </div>
        
    )
}

export default ContactUs;