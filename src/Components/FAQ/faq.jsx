import './faq.css';

const FAQ = () => {
    return (
        <div className='faq-section'>
            <div className='faq-answer'>
                <h4>Get Your Answer</h4>
            </div>
            <div className='faq-header'>
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className='faq-container'>
                <div className='faq-container1'>
                    <div className='faq-img1'>
                        <img src='/faqpic1.png' alt='' />
                    </div>
                    <div className='faq-img2'>
                        <img src='/faqpic2.png' alt='' />
                    </div>
                    <div className='faq-img3'>
                        <img src='/faqpic3.png' alt='' />
                    </div>
                </div>
                <div className='faq-container2'>
                    <div className='faq-qstn1'>
                        <h4>Why choose our medical for your family?</h4>
                    </div>
                    <div className='faq-qstn2'>
                        <h4>Why we are different from others?</h4>
                    </div>
                    <div className='faq-qstn3'>
                        <h4>Trusted & experience senior care & love</h4>
                    </div>
                    <div className='faq-qstn4'>
                        <h4>How to get appointment for emergency <br />cases?</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;