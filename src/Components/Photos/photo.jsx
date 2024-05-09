import './photo.css';

const Photos = () => {
    return (
        <div className='photos-section'>
            <div className='photos-container'>
                <img src='/pic1.png' alt='' />
                <img src='/pic2.png' alt='' />
                <img src='/pic3.png' alt='' />
            </div>
            <div className='photos-dots'>
                <img src='/slide1.png' alt='' className='slide1'/>
                <img src='/slide2.png' alt='' className='slide2'/>
                <img src='/slide1.png' alt='' className='slide3'/>
            </div>
        </div>
    )
}

export default Photos;
