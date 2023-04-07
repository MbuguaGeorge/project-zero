import Nav from './nav';

export default function Contact(){
    return (
        <div className='contact-us'>
            <header>
                <Nav />
            </header>
            <div className="contact">
                <form>
                    <h1>Get In Touch</h1>
                    <div className='contact-first'>
                        <input type='text' placeholder='Name' required />
                        <input type='email' placeholder='Your Email' required />
                    </div>
                    <div className='message'>
                        <textarea placeholder='Your Message' required></textarea>
                    </div>
                    <input type='submit' value='SEND'/>
                </form>
            </div>
        </div>
    )
}