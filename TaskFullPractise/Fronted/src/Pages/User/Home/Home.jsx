import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHeart, FaShoppingBasket } from 'react-icons/fa';
import { useContext } from 'react';
import { favoriteContext } from '../../../Context/FavoritesContext';

function Home() {
    const [requirement, setRequirements] = useState([]);
    let {favorites,setFavorites}=useContext(favoriteContext)
    
    function handleAddFavorite(requirement) {
        let findFavorite = favorites.find(favorite => favorite.id == requirement.id)
        if (findFavorite) {
          alert("Bu mehsul artiq favoritesde movducddur")
        } else {
          setFavorites([...favorites, requirement])
        }
    
      }

    function GetData() {
        axios
            .get('http://localhost:3001/requirements')
            .then((res) => {
                setRequirements(res.data || []);
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
                setRequirements([]);
            });
    }
    async function handleDelete(id) {
        await axios.delete(`http://localhost:3001/requirements/${id}`);
        GetData();
    }

    useEffect(() => {
        GetData();
    }, []);

    return (
        <>
            <div className="requirements">
                <h1>Requirements to be Immigrants</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="cards-container">
                    {requirement.length > 0 ? (
                        requirement.map((req) => (
                            <div className="card" >
                                <img src={req.image} alt={req.title} />
                                <div className="card-info">
                                    <span className="country">{req.country}</span>
                                    <h2>{req.title}</h2>
                                    <p>{req.description}</p>
                                    <button onClick={()=>handleAddFavorite(requirement)} style={{ backgroundColor: 'white', border: "none" ,marginRight:"10px"}}> <FaHeart /></button>
                                    <button style={{ backgroundColor: 'white', border: "none" }}><FaShoppingBasket /></button>
                                </div>
                                <button onClick={() => handleDelete(req._id)} className='card-btn'>delete</button>
                            </div>
                        ))
                    ) : (
                        <p>No requirements available.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;
