import { Component } from "react";
import { Alert, Carousel, Col, Container, Row, Spinner } from "react-bootstrap";

const string = "Game of Thrones";
const string2 = "Guardians of the galaxy";
const searchKeyWord = string.toLowerCase().replace(/ /g, "%20");
const searchApi = "http://www.omdbapi.com/?apikey=c326b3e7&s=";

class MyGallery extends Component {
  state = {
    movies: [],
    error: false,
    errorMsg: "",
    isLoading: true
  };

  fetchGallery = async () => {
    try {
      const response = await fetch(searchApi + searchKeyWord);

      if (response.ok) {
        const data = await response.json();
        // console.log("FETCH RESULT: ", data.Search);
        this.setState({ movies: data.Search, isLoading: false });
        // console.log(this.setState);
      } else {
        this.setState({ error: true, isLoading: false });
      }
    } catch (error) {
      this.setState({ error: true, errorMsg: error.message, isLoading: false });
    }
  };

  componentDidMount = () => {
    console.log("COMPONENT DID MOUNT");
    this.fetchGallery();
  };

  render() {
    console.log("RENDER");
    return (
      <>
        <Container>
          <h3 className="mb-3">Trending Now</h3>
        </Container>
        <Container>
          {this.state.isLoading && !this.state.error && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Container>

        {this.state.error && !this.state.isLoading && (
          <Alert variant="danger">{this.state.errorMsg ? this.state.errorMsg : "Errore nel reperire i dati"}</Alert>
        )}
        <Carousel id="carousel" className="mb-5">
          <Carousel.Item>
            <Row className="row-cols-2 row-cols-md-3 row-cols-lg-6 gx-1 gy-2">
              {this.state.movies.slice(0, 6).map((movie) => (
                <Col>
                  <img src={movie.Poster} alt="" />
                </Col>
              ))}
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="row-cols-2 row-cols-md-3 row-cols-lg-6 gx-1 gy-2">
              {this.state.movies.slice(0, 6).map((movie) => (
                <Col>
                  <img src={movie.Poster} alt="" />
                </Col>
              ))}
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="row-cols-2 row-cols-md-3 row-cols-lg-6 gx-1 gy-2">
              {this.state.movies.slice(0, 6).map((movie) => (
                <Col>
                  <img src={movie.Poster} alt="" />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default MyGallery;
