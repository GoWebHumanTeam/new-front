import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputDroneId, setIsOrder } from '../../slices/orderSlice';
import './Reservation.css';
import {Link, useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import campusmap from '../../imgs/campusmap.jpg';
import background from '../../imgs/background.jpg';
import InputAdornment from '@mui/material/InputAdornment';
import axios from 'axios';

const place = [
    {label:'AI공학관'}, {label:'가천관'}, {label:'공과대학1'}, {label:'공과대학2'}, {label:'교육대학원'}, {label:'바이오나노대학'},
    {label:'바이오나노연구원'}, {label:'비전타워'}, {label:'산학협력관1'}, {label:'산학협력관2'},
    {label:'예술·체육대학'}, {label:'중앙도서관'}, {label:'학생회관'}, {label:'학생생활관'}
];

function Reservation(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [senderName, setSenderName] = useState('');
    const [senderTel, setSenderTel] = useState('');
    const [addressName, setAddressName] = useState('');
    const [addressTel, setAddressTel] = useState('');
    const [startingPoint, setStartingPoint] = useState('');
    const [destination, setDestination] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [weight, setWeight] = useState('');
    const [quantity, setQuantity] = useState('');
    const [selectedDrone, setSelectedDrone] = useState('');
    const [isClicked, setIsClicked] = useState('');

    const handleOnSenderName = (e) => {
        setSenderName(e.target.value);
    }

    const handleOnSenderTel = (e) => {
        setSenderTel(e.target.value);
    }

    const handleOnAddressName = (e) => {
        setAddressName(e.target.value);
    }

    const handleOnAddressTel = (e) => {
        setAddressTel(e.target.value);
    }

    const handleOnStartingPoint = (e) => {
        setStartingPoint(e.target.value);
    }

    const handleOnDestination = (e) => {
        setDestination(e.target.value);
    }

    const handleOnPostDescription = (e) => {
        setPostDescription(e.target.value);
    }

    const handleOnWeight = (e) => {
        setWeight(e.target.value);
    }

    const handleOnQuantity = (e) => {
        setQuantity(e.target.value);
    }

    const droneSelect = (id) => {
        dispatch(inputDroneId(id));
        setIsClicked(!isClicked);
    }

    // Cliced 넣기..
    
    function ShowOrderInfo() {
        const droneID = useSelector((state) => state.order.droneId);
        var key = 'drone'.concat(String(droneID.payload));
        const selectedDrone = useSelector((state) => state[key]);
        return (
            isClicked &&
            <div className='place'>
                <h2>Selected Drone</h2>
                <br/>
                <h4>Name: {selectedDrone.name}</h4>
                <h4>Price: {selectedDrone.price}</h4>
                <img className="drone-img" src={selectedDrone.img} alt={key}/>
            </div>  
        );
    }

    const orderCheck = async (e) => {
        e.preventDefault();

        await axios
            .post("/api/reservation" , {
                senderName:senderName,
                senderTel:senderTel,
                addressName: addressName,
                addressTel: addressTel,
                startingPoint: startingPoint,
                destination: destination,
                postDescription: postDescription,
                weight : weight,
                quantity: quantity
            }) 
            .then(()=>{
                navigate('/result');
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    return(   
        <div className="res_background">
             <div className="image-container">
                <img className="reservation-image" src={background} alt="background"/> 
                
            <div className="res_sender">
            <h1>Reservation</h1>
            <br/><br/>
                <TextField
                    required
                    label="Sender Name"
                    onChange={handleOnSenderName}
                /> 

                <TextField
                    required
                    label="Sender Tel"
                    onChange={handleOnSenderTel}
                />   
                
                <TextField
                    required
                    label="Addressee Name"
                    onChange={handleOnAddressName}
                />  
            
                <TextField
                    required
                    label="Addressee Tel"
                    onChange={handleOnAddressTel}
                />    
                
                <div className="place">
                <img className="map-image" src={campusmap} alt="campusmap"/>    
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Starting point"
                    defaultValue="AI공학관"
                    helperText="Please select starting point"
                    onChange={handleOnStartingPoint}
                >
                    {place.map((option)=>(
                    <MenuItem key={option.label} value={option.label}>
                        {option.label}
                    </MenuItem>
                    ))}
                </TextField>
              

                <TextField
                    id="outlined-select-currency"
                    select
                    label="Destination"
                    defaultValue="가천관"
                    helperText="Please select destination"
                    onChange={handleOnDestination}
                >
                    {place.map((option)=>(
                    <MenuItem key={option.label} value={option.label}>
                        {option.label}
                    </MenuItem>
                    ))}
                </TextField>
                </div>
                
                <TextField
                    required
                    label="Post Description"
                    onChange={handleOnPostDescription}
                /> 

                <TextField
                    required
                    label="Weight"
                    onChange={handleOnWeight}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                    }}
                /> 
               
               <TextField
                    required label="Quantity"
                    onChange={handleOnQuantity}
                />
                <div class="select-button-container">

                <button className='drone-select-button' onClick={() => droneSelect('0')}>0g~400g </button>
                <button className='drone-select-button' onClick={() => droneSelect('1')}>400g~6.2kg </button>
                <button className='drone-select-button' onClick={() => droneSelect('2')}>6.2kg~24.5kg </button>
                <button className='drone-select-button' onClick={() => droneSelect('3')}>24.5kg~79kg </button>
                </div>
                <br />

                <ShowOrderInfo />

                <br />
                <br />
                <div class="button-container">
                    <Link to="/result">
                        <button className='apply_button' onClick={orderCheck}> Apply </button>
                    </Link>
                </div>

            </div>
            </div>
        </div>
    )
}

export default Reservation;