import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import _ from "lodash";

export const Pokemon = ({ pokemon }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        sx={{ height: "auto", objectFit: "cover", width: "100%" }}
        image={pokemon.sprites.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {_.capitalize(pokemon.name)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pokemon.name} is a {pokemon.types[0].type.name} type pokemon.
        </Typography>
      </CardContent>
    </Card>
  );
};
