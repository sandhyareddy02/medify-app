import './overlay.css';

const Overlay = () => {
    return (
        <div className="overlay-section">
            <div className='overlay-container1'>
                <div className='overlay-pic1'>
                    <img src='/overlay1.png' alt='' />
                </div>
                <div className='overlay-pic2'>
                    <img src='/overlay2.png' alt='' />
                </div>
                <div className='overlay-pic3'>
                    <img src='/overlay3.png' alt='' />
                </div>
            </div>
            <div className='overlay-container2'>
                <div className='overlay-helping'>
                    <h5>HELPING PATIENTS FROM AROUND THE GLOBE!!</h5>
                </div>
                <div className='overlay-patient'>
                    <h1>
                        <span style={{ color: '#1B3C74', fontSize: '68px', fontWeight:'600' }}>Patient </span>
                        <span style={{ color: '#2AA7FF', fontSize: '68px', fontWeight:'600' }}>Caring</span>
                    </h1>
                </div>
                <div className='overlay-para'>
                    <p>Our goal is to deliver quality of care in a courteous, respectful, and <br />compassionate manner. We hope you will allow us to care for you and <br />strive to be the first and best choice for healthcare.</p>
                </div>
                <div className='overlay-points'>
                    <div className='overlay-point1'>
                        <div><img src='/tick.png' alt='' /></div>
                        <div><h5>Stay Updated About Your Health</h5></div>
                    </div>
                    <div className='overlay-point2'>
                        <div><img src='/tick.png' alt='' /></div>
                        <div><h5>Check Your Results Online</h5></div>
                    </div>
                    <div className='overlay-point3'>
                        <div><img src='/tick.png' alt='' /></div>
                        <div><h5>Manage Your Appointments</h5></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overlay;