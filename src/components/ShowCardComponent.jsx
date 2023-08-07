import Badge from 'react-bootstrap/Badge';

const ShowCardComponent = ({ show }) => {
    return (
        <div className="mycard" >
            <div>
                <img src={show.show.image?show.show.image.medium:'./no-image.jpg'} width="210px" height="295px"/>
            </div>
            <div className="cardContent px-3 py-3" >
                <h5 className="">
                 {show.show.name}
                </h5>
                <strong >Genre : </strong>{show.show.genres?show.show.genres.map((gen,idx) =>  <Badge bg="info pb-2 mx-1" key={idx}>{gen}</Badge>):' - '}<br/>
                <strong >Language : </strong>{show.show.language||' - '}<br/>
                <strong >Rating : </strong>{show.show.rating.average||' - '} <br/>

            </div>
        </div>
    )
}

export default ShowCardComponent ;