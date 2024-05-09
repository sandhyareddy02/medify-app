import './headerSection.css';
import Logo from '../Logo/logo.jsx';
import List from '../List/list.jsx';
import Button from '../Button/button.jsx';
import HeaderSearch from './headerSearch.jsx';

const HeaderSection = () => {
    return (
        <div className='header-section'>
            <p className='header-section-main-para'> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
            <div className='header-container'>
                <Logo />
                <div className='header-container-sub'>
                    <List />
                    <Button>My Bookings</Button>
                </div>
            </div>
            <div className='header-section-container'>
                <div className='header-section-container-sub'>
                    <p style={{ fontSize: '38px', fontWeight: '500' }}>Skip the travel! Find Online</p>
                    <p>
                        <span style={{ color: 'black', fontSize: '68px', fontWeight:'600' }}>Medical </span>
                        <span style={{ color: 'blue', fontSize: '68px', fontWeight:'600' }}>Centers</span>
                    </p>
                    <p style={{ whiteSpace: 'pre-wrap', fontSize:'24px' }}>Connect instantly with a 24X7 specialist or choose to <br />video visit a particular doctor.</p>
                    <button>Find Centers</button>
                </div>
                <div className='header-section-container-img'>
                    <img src="/mask.png" alt='mask img' className='mask-img' />
                </div>  
            </div>
            <div className='header-search'>
                <HeaderSearch />
            </div>
        </div>
    )
}

export default HeaderSection;
