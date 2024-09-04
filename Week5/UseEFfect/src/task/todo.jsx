import { useEffect, useState } from "react";
import axios from "axios";

function Artworks() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios.get("https://api.artic.edu/api/v1/artworks/search?q=cats")
      .then((response) => {
        console.log(response.data); // Inspect the API response
        setArtworks(response.data.data); // Assuming 'data' contains the array of artworks
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div>
      {artworks.map((artwork) => (
        <div key={artwork.id}>
          <h2>{artwork.title}</h2>
          <p>{artwork.artist_title}</p>
          <img 
            src={artwork.data}
            alt={artwork.title} 
            style={{ width: '300px', height: 'auto' }} 
          />
        </div>
      ))}
    </div>
  );
}

export default Artworks;
