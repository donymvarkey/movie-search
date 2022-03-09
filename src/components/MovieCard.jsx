import React from "react";
import { Card, Badge } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <>
      <Card className="border-0">
        <Card.Img
          style={{ height: "400px", objectFit: "cover" }}
          variant="top"
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
        />

        <Card.Body>
          <Badge>{movie.Type}</Badge>
          <Badge bg="light text-dark">{movie.Year}</Badge>
          <Card.Title>{movie.Title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default MovieCard;
