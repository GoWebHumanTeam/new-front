import './Introduction.css';
import AboutUs from '../../components/AboutUs';
import { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/';
import { increment0 } from '../../slices/droneSlices/droneSlice0';
import { increment1 } from '../../slices/droneSlices/droneSlice1';
import { increment2 } from '../../slices/droneSlices/droneSlice2';
import { increment3 } from '../../slices/droneSlices/droneSlice3';
import { setIsSearch } from '../../slices/searchSlice';
import aboutUs_gcu from '../../imgs/aboutUs_gcu.jpg';
import aboutUs_delivery from '../../imgs/aboutUs_delivery.jpg';
import drone_img_1 from '../../imgs/drone_img_1.jpg';
import drone_img_2 from '../../imgs/drone_img_2.jpg';
import drone_img_3 from '../../imgs/drone_img_3.jpg';
import drone_img_4 from '../../imgs/drone_img_4.jpg';

function Introduction() {
    const dispatch = useDispatch();
    const [isHovering, setIshovering_arr] = useState([false,false,false,false]);
    const [selectedId, setSelectedId] = useState('0');

    const setIshovering = (bool, id) => {
        isHovering[id] = bool;
        setIshovering_arr([...isHovering]);
    }

    const handleMouseOver = (id) => {
        setIshovering(true, id);
    };

    const handleMouseOut = (id) => {
        setIshovering(false, id);
    };

    const handleMouseClick = (id) => {
        setSelectedId(id);
    }

    function ShowDroneInfo () {
        if(isSearch) {
            setSelectedId(searchContext[5]);
            dispatch(setIsSearch(false));
        }
        var key = 'drone'.concat(selectedId);

        const name = useSelector((state)=>state[key].name);
        const clickNum = useSelector((state) => state[key].clickNum);
        const maxWeight = useSelector((state) => state[key].maxWeight);
        const maxSpeed = useSelector((state) => state[key].maxSpeed);
        const feature = useSelector((state) => state[key].feature);
        const img = useSelector((state) => state[key].img);
        
        return (
        <p style={{display: 'flex'}}>
            <img className='white_img_drone' src={img} alt="drone_img" />
            <table >
                <tr> 
                    <td className="td-style"><h1>name</h1></td>
                    <td className="td-style"><h1>{name}</h1></td>
                </tr>
                <tr>
                    <td className="td-style"><h1>clickNum</h1></td>
                    <td className="td-style"><h1>{clickNum}</h1></td>
                </tr>
                <tr>
                    <td  className="td-style"><h1>max weight</h1></td>
                    <td  className="td-style"><h1>{maxWeight}kg</h1></td>
                </tr>
                <tr>
                    <td className="td-style"><h1>max speed</h1></td>
                    <td className="td-style"><h1>{maxSpeed}m/s</h1></td>
                </tr>
                <tr>
                    <td className="td-style"><h1>feature</h1></td>
                    <td  className="td-style"><h1>{feature}</h1></td>
                </tr>
            </table>
        </p>
        
        );
    }

    const DIVIDER_HEIGHT = 100;
    const outerDivRef = useRef();

    useEffect(() => {
        const wheelHandler = (e) => {
            e.preventDefault();
            const { deltaY } = e;
            const { scrollTop } = outerDivRef.current; 
            const pageHeight = window.innerHeight;    

            if (deltaY > 0) {
                if ( scrollTop >= 0 && scrollTop < pageHeight ) {
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: "smooth",
                    });
                } else {
                    outerDivRef.current.scrollTo({
                        top: pageHeight + DIVIDER_HEIGHT,
                        left: 0,
                        behavior: "smooth",
                    });
                } 
            } else {
                if (scrollTop >= 0 && scrollTop < pageHeight *2) {
                    outerDivRef.current.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                    });
                } else {
                    outerDivRef.current.scrollTo({
                        top: pageHeight,
                        left: 0,
                        behavior: "smooth",
                    });
                }
            }
        };

        const outerDivRefCurrent = outerDivRef.current;
        outerDivRefCurrent.addEventListener("wheel", wheelHandler);

        return () => {
            outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
        };
    }, []);

    const searchRef = useRef();
    const isSearch = useSelector((state) => state.search.isSearch);
    const searchContext = useSelector((state) => state.search.input);

    useEffect(() => {
        if (isSearch) {
            searchRef.current?.scrollIntoView({behavior: 'smooth'});
            
        }        
    }, []);

    return (
        <div ref={outerDivRef} className="outer">
            <div className="inner about-us">
                <p style={{marginTop: '50px', color:"white"}}>About Gachon Express</p>
                <p style={{fontSize: '25px'}}><h1> About Us</h1></p>
                <p><AboutUs /></p>
                
                <p className='about-us-imgs-container'>
                    <p className="about-us-imgs">
                        <img src={aboutUs_gcu} alt="gcu img" />
                        <img src={aboutUs_delivery} alt="gcu delivery" />
                    </p>
                </p>

            </div>
            <div  ref={searchRef} />
            <div className="inner about-drone">
                <p style={{marginTop: '-70px', color:"white"}}>About Gachon Express</p>
                <p style={{marginTop: '0px', fontSize: '25px'}}><h1> About Drones</h1></p>
                <br/>
                <br/>
                <p>
                {isHovering[0] ? 
                    <img className="drone_img_mouse_enter" src={drone_img_1} alt="drone_img_1" 
                        onMouseEnter={() => handleMouseOver(0)}
                        onMouseLeave={() => handleMouseOut(0)}
                        onClick={() => {handleMouseClick('0'); dispatch(increment0());}}/>
                   : <img className="drone_img_mouse_leave" src={drone_img_1} alt="drone_img_1" 
                        onMouseEnter={() => handleMouseOver(0)}
                        onMouseLeave={() => handleMouseOut(0)}
                        onClick={() => {handleMouseClick('0'); dispatch(increment0());}}/>}
                        
                {isHovering[1] ? 
                    <img className="drone_img_mouse_enter" src={drone_img_2} alt="drone_img_2" 
                        onMouseEnter={() => handleMouseOver(1)}
                        onMouseLeave={() => handleMouseOut(1)}
                        onClick={() => {handleMouseClick('1'); dispatch(increment1());}}/>
                    : <img className="drone_img_mouse_leave" src={drone_img_2} alt="drone_img_2" 
                        onMouseEnter={() => handleMouseOver(1)}
                        onMouseLeave={() => handleMouseOut(1)}
                        onClick={() => {handleMouseClick('1'); dispatch(increment1());}}/>}
                
                {isHovering[2] ? 
                    <img className="drone_img_mouse_enter" src={drone_img_3} alt="drone_img_3" 
                        onMouseEnter={() => handleMouseOver(2)}
                        onMouseLeave={() => handleMouseOut(2)}
                        onClick={() => {handleMouseClick('2'); dispatch(increment2());}}/>
                    : <img className="drone_img_mouse_leave" src={drone_img_3} alt="drone_img_3" 
                        onMouseEnter={() => handleMouseOver(2)}
                        onMouseLeave={() => handleMouseOut(2)}
                        onClick={() => {handleMouseClick('2'); dispatch(increment2());}}/>}
                            
                {isHovering[3] ? 
                    <img className="drone_img_mouse_enter" src={drone_img_4} alt="drone_img_4" 
                        onMouseEnter={() => handleMouseOver(3)}
                        onMouseLeave={() => handleMouseOut(3)}
                        onClick={() => {handleMouseClick('3'); dispatch(increment3());}}/>
                    : <img className="drone_img_mouse_leave" src={drone_img_4} alt="drone_img_4" 
                        onMouseEnter={() => handleMouseOver(3)}
                        onMouseLeave={() => handleMouseOut(3)}
                        onClick={() => {handleMouseClick('3'); dispatch(increment3());}}/>} 
                </p>
                <div className="white_img"> 
                    <div className='white_img_txt'>
                        <ShowDroneInfo/>
                    </div>
                </div>                    
            </div>  
        </div>
        
    );
}

export default Introduction;