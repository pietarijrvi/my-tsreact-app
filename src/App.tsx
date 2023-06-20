import { useEffect, useState } from "react";
import {
  Container,
  ImageList,
  ImageListItem,
  Card,
  ImageListItemBar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import Navbar from "./components/Navbar";
import "./App.css";

type Game = {
  id: number;
  rating: number;
  name: string;
  background_image: string;
};

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState({});

  /*useEffect(() => {
    fetch(
      ""
    )
      .then((response) => response.json())
      .then((res) => setGames(res.results))
      .catch((err) => setError(err));
  }, []);
  */
  return (
    <>
      <Container>
        <Navbar />
        <Box
          flexDirection={"column"}
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <Typography variant="h1">Testing testing</Typography>
          <Typography sx={{ mt: 2 }} variant="h5">
            Testing testing
          </Typography>
          <ImageList gap={12} sx={{ mb: 4 }} cols={3} rowHeight={164}>
            {games.map((game) => (
              <Card>
                <ImageListItem>
                  <img
                    src={game.background_image}
                    srcSet={game.background_image}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={game.name}
                    subtitle={game.rating}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${game.name}`}
                      ></IconButton>
                    }
                  />
                </ImageListItem>
              </Card>
            ))}
          </ImageList>
        </Box>
      </Container>
    </>
  );
}

export default App;
