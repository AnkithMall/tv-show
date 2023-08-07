import { useParams } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import {Badge} from 'react-bootstrap';
import DOMPurify from 'dompurify';
import ModalComponent from "../formcomponents/ModalComponent";

const ShowComponent = () => {

    const showList = JSON.parse(sessionStorage.getItem("showList")) || [];

    const { name } = useParams();

    const show = showList.find((show) => show.show.name === name);


    return (
        <div className="showPage">
            <Container>
                <Row className="text-center">
                    <Col  className="fs-3 m-5">
                        <img src={show.show.image ? show.show.image.medium : './no-image.jpg'} />
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col md={12} className="fs-3">
                        {show.show.name}
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col md={12} className="fs-5">
                        <strong>Rating : </strong>  {show.show.rating.average || ' - '} <br />
                        <strong>Language : </strong>  {show.show.language || ' - '} <br />
                        <strong >Genre : </strong>{show.show.genres ? show.show.genres.map((gen, idx) => <Badge bg="info pb-2 mx-1" key={idx}>{gen}</Badge>) : ' - '}<br />
                        <strong >Premier : </strong>{show.show.premiered||' - '}<br/>
                        <strong >Average Runtime : </strong>{show.show.averageRuntime||' - '} min<br/>

                    </Col>
                </Row>
                <Row className="text-center">
                    <Col md={12}>
                        <h3>Summary</h3>
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(show.show.summary) }} />
                    </Col>
                </Row>
                <Row className="mb-5 py-5">
                    <Col md={12} className="text-center">
                        {/* <Button variant="primary">Primary</Button> */}
                        <ModalComponent title={show.show.name} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ShowComponent;