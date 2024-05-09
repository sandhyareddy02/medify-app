import './footer.css';

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='footer-container1'>
                <div className='footer-logo'>
                    <img src="/logo.png" alt='logo' className='img-logo' />
                </div>
                <div className='footer-contact'>
                    <div className='footer-fb'>
                        <img src='/fb.png' alt='' />
                    </div>
                    <div className='footer-x'>
                        <img src='/x.png' alt='' />
                    </div>
                    <div className='footer-yt'>
                        <img src='/yt.png' alt='' />
                    </div>
                    <div className='footer-p'>
                        <img src='/p.png' alt='' />
                    </div>
                </div>
            </div>
            <div className='footer-container2'>
                <div className='footer-col1'>
                    <ul className='list1'>
                        <li><span className='symbol'>&gt;</span>About Us</li>
                        <li><span className='symbol'>&gt;</span>Our Pricing</li>
                        <li><span className='symbol'>&gt;</span>Our Gallery</li>
                        <li><span className='symbol'>&gt;</span>Appointment</li>
                        <li><span className='symbol'>&gt;</span>Privacy Policy</li>
                    </ul>
                </div>
                <div className='footer-col2'>
                    <ul className='list2'>
                        <li><span className='symbol'>&gt;</span>Orthology</li>
                        <li><span className='symbol'>&gt;</span>Neurology</li>
                        <li><span className='symbol'>&gt;</span>Dental Care</li>
                        <li><span className='symbol'>&gt;</span>Opthalmology</li>
                        <li><span className='symbol'>&gt;</span>Cardiology</li>
                    </ul>
                </div>
                <div className='footer-col3'>
                    <ul className='list3'>
                        <li><span className='symbol'>&gt;</span>About Us</li>
                        <li><span className='symbol'>&gt;</span>Our Pricing</li>
                        <li><span className='symbol'>&gt;</span>Our Gallery</li>
                        <li><span className='symbol'>&gt;</span>Appointment</li>
                        <li><span className='symbol'>&gt;</span>Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    
    )
}

export default Footer;
