import {
  Paper,
  Snackbar,
  Typography,
  Box,
  Stack,
  Grid,
  CircularProgress,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavBar, Pokemon, Search } from "../components";
import { fetchPokemonsRequest } from "../store";

export const HomePage = () => {
  const dispatch = useDispatch();
  const pokemonState = useSelector((store) => store.pokemon);
  const [searchQuery, setSearchQuery] = useState("");
  const [limit, setLimit] = useState(100);
  let filterPokemons = [];
  const [geolocation, setGeolocation] = useState({
    status: false,
    message: "",
    lat: null,
    lng: null,
  });
  useEffect(() => {
    if (!navigator.geolocation) {
      setGeolocation({
        ...geolocation,
        message: "Geolocation is not supported by your browser",
        status: true,
      });
    } else {
      setGeolocation({ ...geolocation, message: "Locating", status: true });
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeolocation({
            ...geolocation,
            status: false,
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          setGeolocation({
            ...geolocation,
            message: "Unable to retrieve your location",
            status: true,
          });
        }
      );
    }
  }, []);

  useEffect(() => {
    dispatch(fetchPokemonsRequest(limit));
  }, [limit]);

  const onChangeLimitHandler = (limit) => {
    setLimit(limit);
  };

  const handleOnChange = (e) => {
    setSearchQuery(e.target.value);
  };

  filterPokemons = pokemonState?.pokemons?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <Snackbar
        open={geolocation.status}
        autoHideDuration={3000}
        onClose={() => setGeolocation({ ...geolocation, status: false })}
        message={geolocation.message}
      />
      <Paper variant="outlined">
        <Typography variant="h5" textAlign="center" p=".5rem">
          You are from {geolocation.lat}/{geolocation.lng}
        </Typography>
      </Paper>
      <Stack alignItems="center" spacing={2} mb={4}>
        <Box
          component="img"
          src="pokemon.png"
          sx={{
            maxWidth: {
              xs: "350px",
              sm: "600px",
              md: "900px",
              lg: "1000px",
            },
            height: "auto",
            objectFit: "cover",
          }}
        />
        <Stack
          direction="row"
          spacing={2}
          sx={{ width: { xs: "80%", lg: "40%" } }}
        >
          <Box flexGrow={1}>
            <Search handleOnChange={handleOnChange} />
          </Box>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth size="small">
              <InputLabel>Limit</InputLabel>
              <Select
                value={limit}
                label="Limit"
                onChange={(e) => onChangeLimitHandler(e.target.value)}
              >
                <MenuItem value={100}>100</MenuItem>
                <MenuItem value={200}>200</MenuItem>
                <MenuItem value={300}>300</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>
      </Stack>
      {pokemonState.loading ? (
        <Box textAlign="center">
          <CircularProgress />
        </Box>
      ) : (
        <Grid container columnSpacing={2} rowSpacing={2}>
          {filterPokemons.map((pokemon) => (
            <Grid item key={pokemon.id} xs={12} sm={6} lg={3}>
              <Pokemon pokemon={pokemon} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};
