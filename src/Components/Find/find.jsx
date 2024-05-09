import './find.css';

const Finds = () => {
    return (
        <div className='find-section'>
            <div className='find-header'>
                <h1>Find By Specialisation</h1>
            </div>
            <div className='find-columns'>
                <div className='find-column1'>
                    <img src='/dentistry.png' alt='' className='dentistry-icon' />
                    <h4>Dentistry</h4>
                </div>
                <div className='find-column2'>
                    <img src='/care.png' alt='' className='care-icon' />
                    <h4>Primary Care</h4>
                </div>
                <div className='find-column3'>
                    <img src='/heart.png' alt='' className='heart-icon' />
                    <h4>Cardiology</h4>
                </div>
                <div className='find-column4'>
                    <img src='/mri.png' alt='' className='mri-icon' />
                    <h4>MRI Resonance</h4>
                </div>
                <div className='find-column5'>
                    <img src='/test.png' alt='' className='test-icon' />
                    <h4>Blood Test</h4>
                </div>
                <div className='find-column6'>
                    <img src='/plus.png' alt='' className='plus-icon' />
                    <h4>Piscologist</h4>
                </div>
                <div className='find-column7'>
                    <img src='/lab.png' alt='' className='lab-icon' />
                    <h4>Laboratory</h4>
                </div>
                <div className='find-column8'>
                    <img src='/xray.png' alt='' className='xray-icon' />
                    <h4>X-Ray</h4>
                </div>
            </div>
            <button className='find-button'>View All</button>
        </div>
    )
}

export default Finds;