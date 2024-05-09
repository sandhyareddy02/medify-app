import './family.css';

const Family = () => {
    return (
        <div className='family-section'>
            <div className='family-section1'>
                <h5>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</h5>
                <h1>Our Families</h1>
                <p>We will work with you to develop individualised care plans, <br />including management of chronic diseases. if we cannot assist,<br /> we can provide referrals or advice about the type of practitioner <br />you require. WE treat all enquiries sensitively and in the strictest<br />confidence.</p>
            </div>
            <div className='family-section2'>
                <div className='family-container1'>
                    <div className='family-col11'>
                        <img src='/five.png' alt='' />
                        <h2>5000+</h2>
                        <p>Happy Patients</p>
                    </div>
                    <div className='family-col12'>
                        <img src='/one.png' alt='' />
                        <h2>1000+</h2>
                        <p>Laboratories</p>
                    </div>
                </div>
                <div className='family-container2'>
                    <div className='family-col21'>
                        <img src='/two.png' alt='' />
                        <h2>200+</h2>
                        <p>Hospitals</p>
                    </div>
                    <div className='family-col22'>
                        <img src='/seven.png' alt='' />
                        <h2>700+</h2>
                        <p>Expert Doctors</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Family;