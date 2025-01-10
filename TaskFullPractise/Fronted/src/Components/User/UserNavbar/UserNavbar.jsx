import React from 'react'
import { FaHeart, FaShoppingBasket } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
function UserNavbar() {
    const navigate = useNavigate();
    const handleNavigateToFavorites = () => {
        navigate("/Wishlist"); 
      };
    return (
        <>
            <header className="header">
                <div className="header-elements">
                    <div className="tagline">
                        <p>We believe we help people for happier lives</p>
                    </div>
                    <div className="logo">
                        <img src="https://preview.colorlib.com/theme/immigration/img/logo.png" alt="" />
                    </div>
                    <div className="contact">
                        <span className="phone-icon">📞</span>
                        <a href="tel:+88012312658439">+880 123 12 658 439</a>
                       <button onClick={handleNavigateToFavorites} style={{backgroundColor:'white' ,border:"none"}}> <FaHeart /></button>
                        <button style={{backgroundColor:'white' ,border:"none"}}><FaShoppingBasket /></button>

                    </div>
                </div>
            </header>
            <main>
                <section id='hero'>
                    <div className="hero">
                        <div className="hero-context">
                            <h6>Process Visa without within hours</h6>
                            <h1>
                                Immigrations &amp; 
                                 <br />

                                Visa Consultation
                            </h1>
                        <a className='book-btn' href="">Book Consultancy</a>
                        </div>
                        <img className='hero-img' src="https://preview.colorlib.com/theme/immigration/img/header-img.png" alt="" />
                    </div>
                </section>
            </main>
        </>
    )
}

export default UserNavbar
