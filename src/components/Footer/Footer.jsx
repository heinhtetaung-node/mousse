import React from 'react'
import Foot from './Footer.module.css'

const Footer = () => {
    
    const goToFaceBook = e => {
        e.preventDefault()
        window.location.href='https://www.facebook.com/MousseMyanmar'
    }
    return (
        <div className={Foot.container}>
            <div className={Foot.footer_container}>
                <div className={Foot.left}>
                    <h2>Mousse'</h2>
                    <p>လူကြီးမင်းရဲ့ ရိုးရှင်းတဲ့ဟန်ပန်....
                        လိုက်ဖက်တဲ့ Fashion Look အတွက် 
                        ပိုပြီးထူးခြားစေမယ့်...
                        ခန္ဓာကိုယ် အချိုးအစားအစုံ ဝတ်လို့ရတဲ့ sizeလေးတွေမို့
                        ​သေးသေးလေးကနေ ဝဝလုံးလုံးလေးတွေအတွက်ပါ အတွေးများနေဖို့ မလိုတော့ဘူးနော်...
                        ပြည်တွင်းဖြစ်ကိုအားပေးပါ 100% Cotton 
                        အသစ် အသစ်တွေ သူများနဲ့မတူပဲ ဘဝ ကို အထာကျကျ ဖြတ်သန်း ချင်တဲ့ ညီကိုတို့ အတွက် သက်ဆိုင်သူလေးတွေကို မန်းရှင်းပီးပူဆာ လိုက်တော့နော့ ........
                    </p>
                    <div className={Foot.social_container}>
                        <div className={Foot.social_icon} style={{'backgroundColor' : '#3B5999', 'cursor': 'pointer'}} onClick={goToFaceBook}>
                            <i className="fab fa-facebook"></i>
                        </div>
                        <div className={Foot.social_icon} style={{'backgroundColor' : '#E4405F'}}>
                            <i className="fab fa-youtube"></i>
                        </div>
                        <div className={Foot.social_icon} style={{'backgroundColor' : '#55ACEE'}}>   
                            <i className="fab fa-tiktok"></i>
                        </div>
                    </div>
                </div>
                <div className={Foot.right}>
                    <h2>Contact</h2>
                    <div className={Foot.contact_item}>
                        <i className="fas fa-map-marker-alt" style={{'marginRight' : '10px'}}></i>
                        <span>​No. 1097, Byamaso Lane, 4th Quarter, South Okkalapa Yangon, Myanmar.</span> 
                    </div>
                    <div className={Foot.contact_item}>
                        <i className="fas fa-phone-alt" style={{'marginRight' : '10px'}}></i>
                        <span>09 512 3045</span>
                    </div>
                    <div className={Foot.contact_item}>
                        <i className="fas fa-envelope" style={{'marginRight' : '10px'}}></i>
                        <span>wineshweyiaung@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer