import React from "react";
import SearchCard from "../utils/searchCard";
import axios from 'axios';

class Scheme extends React.Component {
    state = {
        datas: [],
    }
    constructor(props) {
        super(props);
        axios.get('http://localhost:1234/api/aicte/schemes')
            .then(res => {
                console.log(res.data);
                this.setState({ datas: res.data });
            })
    }

    render() {
        return (
            <div className="scheme-wrap">
                {/* <SearchCard title={"Students Development schemes"} desc={"Explore various, schemes and special scholarship run by AICTE to promote technical education"} imgSrc={"https://www.aicte-india.org/sites/default/files/Poster.jpg"} />
                <SearchCard title={"Staff Development schemes"} desc={"Learn about the various staff development schemes and programmes"} imgSrc={"https://www.aicte-india.org/sites/default/files/Scheme%20page.jpg"} />
                <SearchCard title={"Institutional Development schemes"} desc={"Read more about the institutional development schemes run by AICTE"} imgSrc={"https://www.aicte-india.org/sites/default/files/Institutional%20Development%20schemes.jpg"} />
                <SearchCard title={"Research & Innovation Development schemes"} desc={"Learn about the schemes that promote research in technical education in India"} imgSrc={"https://www.aicte-india.org/sites/default/files/Research%20%26%20Innovation%20Development%20schemes.jpg"} />
                <SearchCard title={"General Schemes"} desc={"Learn about schemes that promote co-ordinated development in India."} imgSrc={"https://www.aicte-india.org/sites/default/files/Institutional%20Development%20schemes_0.jpg"} /> */}

                {
                    this.state.datas.map(
                        (data) => <SearchCard title={data.textContent} desc={data.link} imgSrc={data.imgSrc} />
                    )
                }

            </div>
        )
    }
}

export default Scheme;