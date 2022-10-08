import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Container, Form, InputGroup, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import MovieCard from "./MovieCard";

const BASE_URL = process.env.REACT_APP_API_URL;


const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [key, setKey] = useState("");
    const searchMovies = async (title) => {
        const res = await axios.get(`${BASE_URL}&s=${title}`);
        setMovies(res.data.Search);
        console.log(res.data);
    };

    useEffect(() => {
        searchMovies("avengers");
    }, []);

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <InputGroup className="mb-3 mt-3">
                            <Form.Control
                                placeholder="Search for movies"
                                aria-label="Search for movies"
                                aria-describedby="basic-addon2"
                                type="text"
                                size="lg"
                                value={key}
                                onChange={(event) => setKey(event.target.value)}
                            />
                            <Button
                                onClick={() => searchMovies(key)}
                                variant="outline-primary"
                                id="button-addon2"
                            >
                                <BsSearch />
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="g-3">
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <Col sm="12" md="4" lg="3">
                                <MovieCard key={key} movie={movie} />
                            </Col>
                        ))
                    ) : (
                        <p>Loading</p>
                    )}
                </Row>
            </Container>
        </div>
    )
}

export default MovieList