import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowCardComponent from "../ShowCardComponent";

const ShowListComponent = () => {
    const navigate = useNavigate();
    const [showList, setShowList] = useState([]);
    // const showList = [
    //     { name: "Show 1", data: { /* ... */ } },
    //     { name: "Show 2", data: { /* ... */ } },
    //     // ...
    // ];
    useEffect(() => {
        const fetchShows = async () => {
            try {
                const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
                const data = await response.json();
                setShowList(data);

                sessionStorage.setItem("showList", JSON.stringify(data));
            } catch (error) {
                console.error("Error fetching shows:", error);
            }
        };

        fetchShows();
    }, []);


    const handleShowClick = (name) => {
        navigate(`/show/${name}`);
    };

    return (
        <div className="showcards">
            {showList.map((show, idx) => (
                <div onClick={(e)=>navigate(`/show/${show.show.name}`)} key={idx}>
                    <ShowCardComponent key={idx} show={show} />
                </div>
            ))}
        </div>
    )
}

export default ShowListComponent;