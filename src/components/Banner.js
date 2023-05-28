import './Banner.css'
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import banner_logo from '../imgs/gachon_express_logo_cropped.jpg';
import SearchIcon from '@mui/icons-material/Search';
import { inputSearchContents, setIsSearch } from '../slices/searchSlice';


function Banner() {
    const isOrder = useSelector((state) => state.order.isOrder);
    const [text, setText] = useState('Please enter drone ID');
    const [valid, setValid] = useState(false);
    const dispatch = useDispatch();

    const searchInputValidCheck = (test) => {
        const id = parseInt(test[5]);

        if( test.length === 6 && test.includes("drone") && ( 0<= id && id <= 3) ) {
            setValid(true);
        }
    }
            
    const handleOnSearchInit = (e) => {
        setText("");
        setValid(false);
    }

    const handleOnSearchContents = (e) => {
        setText(e.target.value);
        searchInputValidCheck(e.target.value);
        dispatch(inputSearchContents(e.target.value));
    }

    const handleOnSearchBtnClick = (e) => {
        dispatch(setIsSearch(true));
        setText('');
    }
    
    return (
        <div className="banner">
                <Link to="/home">
                    <img className="banner_logo" src= {banner_logo} alt="banner_logo" />
                </Link>

            <div className="banner_search">
                <input className="banner_searchInput" type="text" onClick = {handleOnSearchInit} onChange={handleOnSearchContents} value={text}/>
                {valid?
                (<Link to="/introduction"><SearchIcon className="banner_searchIcon" onClick={handleOnSearchBtnClick}/></Link>) :
                (<Link to="/noResult"><SearchIcon className="banner_searchIcon" onClick={handleOnSearchBtnClick}/></Link>)}
            </div>
            
            <div className="banner_nav">
                <div className="banner_option">
                    <span className='banner_option_line_1'> Hello. GCU. </span>


                    {/* <Link to="http://localhost:3000/orderlist">
                        <button className='banner_button-small'> orders </button>
                    </Link> */}

                    {isOrder ? 
                    (<Link to="/result"><button className='banner_button-small'> Orders </button></Link>) :
                    (<Link to="/noResult"><button className='banner_button-small'> Orders </button></Link>) }    


                    {/* {isOrder ? 
                    (<Link to="/result"><button className='banner_button-small'> Orders </button></Link>) :
                    (<Link to="/noResult"><button className='banner_button-small'> Orders </button></Link>) }     */}

                </div>

                <div className="banner_option">
                    <Link to="/service">
                        <button className='banner_button-big'> Application for Service </button>
                    </Link>
                </div>

                <div className="banner_option">
                    <Link to="/introduction">
                        <button className='banner_button-big'> About Us </button>
                    </Link>
                </div>
            </div>
            
        </div>
    );
}

export default Banner;