import React, { useContext } from 'react'
import { favoriteContext } from '../../../Context/FavoritesContext'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Wishlist() {
    let { favorites, setFavorites } = useContext(favoriteContext);

    function handleDeleteFav(id) {
        const updatedFavorites = favorites.filter(favorite => favorite.id !== id);
        setFavorites(updatedFavorites);
    }
    return (
        <>
         {favorites.length === 0 ? (
        <h2> Boşdur</h2>
      ) : (
        <div className="container d-flex flex-wrap gap-3">
          {favorites.map((favorite) => (
            <Card style={{ width: '18rem' }} key={favorite.id}>
              <Card.Img variant="top" src={favorite.image} />
              <Card.Body>
                <Card.Title>{favorite.title}</Card.Title>
                <Card.Title>{favorite.description}</Card.Title>
                <Card.Text>{favorite.country}</Card.Text>
                <Button onClick={() => handleDeleteFav(favorite.id)} variant="danger">
                  Delete
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}

        </>
    )
}

export default Wishlist
