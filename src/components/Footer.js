import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

import logo from "../imgs/logo_remover_ver.png"
function Footer() {
    return (
        <div className="Footer">
            <div className='col_1'>
                <p className="bold-text">| SITE</p>
                <br />
                <p>Privacy Policy</p>
                <br />
                <p>Cookie Policy</p>
                <br />
                <p>Terms of use</p>
                <br />
                <p>Accessibility Statement</p>
            </div>
            <div className='col_2'>
                <p className="bold-text">| CONTACT US</p>
                <br />
                <p>TEL        031-1234-1122       FAX       031-1233-1231</p>
                <br />
                <p>E-MAIL     gachonexpress@gachonexprees.com</p>
                <br />
                <p>HEAD       경기도 성남시 수정구 성남대로 1342 6층</p>
            </div>
            <div className='col_3'>
                <img className = "logo" src= {logo} alt="logo" />
                <br />
                <p><InstagramIcon className='Icon'/> <FacebookIcon className='Icon'/> <YouTubeIcon className='Icon'/></p>
            </div>

            
            
        </div>
    )
}

export default Footer