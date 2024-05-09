import './fooinfo.css';

const FooInfo = () => {
    return (
        <div className='foo-section'>
            <div className='foo-section1'>
                <div className='foo-images'>
                    <div className='foo-img1'>
                        <img src='/screen.png' alt='' />
                    </div>
                    <div className='foo-img2'>
                        <img src='/black.png' alt='' />
                    </div>
                    <div className='foo-img3'>
                        <img src='/screen.png' alt='' />
                    </div>
                    <div className='foo-img4'>
                        <img src='/black.png' alt='' />
                    </div>
                </div>
            </div>
            <div className='foo-section2'>
                <div className='foo-header'>
                    <h1 style={{ color: '#1B3C74', fontSize: '54px', fontWeight: '600', fontFamily: 'Poppins' }}>Download the<br/>
                        <span style={{ color: '#2AA7FF', fontSize: '54px', fontWeight: '600', fontFamily: 'Poppins', letterSpacing: '0.2px' }}>Medify </span>
                        <span style={{ color: '#1B3C74', fontSize: '54px', fontWeight: '600', fontFamily: 'Poppins', letterSpacing: '0.2px' }}>App</span>
                    </h1>
                </div>
                <div className='foo-arrow'>
                    <img src='/arrow.png' alt='' />
                </div>
                <div className='foo-para'>
                    <p>Get the link to download the app</p>
                </div>
                <div className='foo-details'>
                    <div className='foo-phone'>
                        <div className="prefix">+91</div>
                        <input type='text' class="phone-number" placeholder='Enter the phone number'></input>
                        <button>Send SMS</button>
                    </div>
                </div>
                <div className='foo-app'>
                    <div className='foo-google'>
                        <img src='/googleplay.png' alt='' />
                    </div>
                    <div className='foo-apple'>
                        <img src='/applestore.png' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooInfo;
