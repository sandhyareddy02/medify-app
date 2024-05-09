import './medical.css';

const Medical = () => {
    return (
        <div className='medical-section'>
            <div className='medical-header'>
                <h1>Our Medical Specialist</h1>
            </div>
            <div className='medical-container'>
                <div className='doc1'>
                    <img src='/doc1.png' alt='' />
                    <h4>y Hull</h4>
                    <h6>ne</h6>
                </div>
                <div className='doc2'>
                    <img src='/doc2.png' alt='' />
                    <h4>Dr. Ahmad Khan</h4>
                    <h6>Neurologist</h6>
                </div>
                <div className='doc3'>
                    <img src='/doc3.png' alt='' />
                    <h4>Dr. Heena Sachdeva</h4>
                    <h6>Orthopadics</h6>
                </div>
                <div className='doc4'>
                    <img src='/doc4.png' alt='' />
                    <h4>Dr. Ankur Sharma</h4>
                    <h6>Medicine</h6>
                </div>
                <div className='doc5'>
                    <img src='/doc5.png' alt='' />
                    <h4>Dr.</h4>
                </div>
            </div>
            <div className='doc-dots'>
                <img src='/slide1.png' alt='' className='slide1'/>
                <img src='/slide2.png' alt='' className='slide2'/>
                <img src='/slide1.png' alt='' className='slide3'/>
            </div>
        </div>
    )
}

export default Medical;