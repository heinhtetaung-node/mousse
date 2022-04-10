import React from 'react'
import Foot from './Footer.module.css'

const Footer = () => {
    return (
        <div className={Foot.container}>
            <div className={Foot.footer_container}>
                <div className={Foot.left}>
                    <h2>LAMA.</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.</p>
                    <div className={Foot.social_container}>
                        <div className={Foot.social_icon} style={{'background-color' : '#3B5999'}}>
                            <i class="fab fa-facebook"></i>
                        </div>
                        <div className={Foot.social_icon} style={{'background-color' : '#E4405F'}}>
                            <i class="fab fa-youtube"></i>
                        </div>
                        <div className={Foot.social_icon} style={{'background-color' : '#55ACEE'}}>   
                            <i class="fab fa-tiktok"></i>
                        </div>
                    </div>
                </div>
                <div className={Foot.right}>
                    <h2>Contact</h2>
                    <div className={Foot.contact_item}>
                        <i class="fas fa-map-marker-alt" style={{'marginRight' : '10px'}}></i>
                        <span>622 Dixie Path , South Tobinchester 98336</span> 
                    </div>
                    <div className={Foot.contact_item}>
                        <i class="fas fa-phone-alt" style={{'marginRight' : '10px'}}></i>
                        <span>+1 234 56 78</span>
                    </div>
                    <div className={Foot.contact_item}>
                        <i class="fas fa-envelope" style={{'marginRight' : '10px'}}></i>
                        <span>contact@lama.dev</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer