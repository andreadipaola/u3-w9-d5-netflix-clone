import { Component } from "react";
import { Alert, Carousel, Col, Container, Row, Spinner } from "react-bootstrap";

// const string = "Game of Thrones";
// const string2 = "Guardians of the galaxy";

class MyGallery extends Component {
  state = {
    movies: [],
    error: false,
    errorMsg: "",
    isLoading: true
  };

  fetchGallery = async (string) => {
    const searchApi = "http://www.omdbapi.com/?apikey=c326b3e7&s=";
    const searchKeyWord = string.toLowerCase().replace(/ /g, "%20");
    try {
      const response = await fetch(searchApi + searchKeyWord);

      if (response.ok) {
        const data = await response.json();
        this.setState({ movies: data.Search, isLoading: false });
      } else {
        this.setState({ error: true, isLoading: false });
      }
    } catch (error) {
      this.setState({ error: true, errorMsg: error.message, isLoading: false });
    }
  };

  componentDidMount = () => {
    this.fetchGallery(this.props.title);
  };

  render() {
    return (
      <>
        <Container>
          <h3 className="mb-3">{this.props.title}</h3>
          {/* <h3 className="mb-3">titolo</h3> */}
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
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 gx-1 gy-2">
              {this.state.movies.slice(0, 6).map((movie) => (
                <Col>
                  <img className="img-fluid" src={movie.Poster} alt="" />
                </Col>
              ))}
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 gx-1 gy-2">
              {this.state.movies.slice(0, 6).map((movie) => (
                <Col>
                  <img className="img-fluid" src={movie.Poster} alt="" />
                </Col>
              ))}
            </Row>
          </Carousel.Item>

          <Carousel.Item>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 gx-1 gy-2">
              {this.state.movies.slice(0, 6).map((movie) => (
                <Col>
                  <img className="img-fluid" src={movie.Poster} alt="" />
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
