import React from 'react';
import HomeCarousel from '../utils/homeCarousel';
import HomeCard from '../utils/homeCard';

class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeCarousel />
                <div className="card-div row no-gutters">
                    <HomeCard l1={"Students Development schemes"} l11={"Explore various, schemes and special scholarship run by AICTE to promote technical education"} l2={"Staff Development schemes"} l22={"Learn about the various staff development schemes and programmes."} l3={"Institutional Development schemes"} l33={"Read more about the institutional development schemes run by AICTE"} l4={"Research & Innovation Development schemes"} l44={"Learn about the schemes that promote research in technical education in India"} l5={"General Schemes"} l55={"Learn about schemes that promote co-ordinated development in India."} title={"Schemes"} desc={"Learn more about the various student and staff development by AICTE"} imgSrc={"https://www.aicte-india.org/sites/default/files/banners/schemes%20%281%29.jpg"} button={"/schemes"} />
                    <HomeCard l1={"Smart India Hackathon 2018"} l11={"Persistent Systems is proud to propose the 2nd edition of this initiative - Smart India Hackathon 2018."} l2={"Startup Contest 2017"} l22={"AICTE’s Student Start-up Policy was launched by the then Hon’ble President of India Shri Pranab Mukherjee...."} l3={"Launch of SWAYAM by Hon'ble President"} l33={"SWAYAM MOOCs platform is World’s Largest Online Free E-Learning Platform Portal designed to achieve the three cardinal principles of Education..."} l4={"AICTE-CII India Innovation Initiative (i3)"} l44={"..."} l5={"Clean & Green Campus"} l55={"To recognize the contribution of AICTE approved academic institutions in implementing Swachh Bharat Mission..."} title={"Initiatives"} desc={"Read about the initiatives undertaken by AICTE to promote technical education"} imgSrc={"https://www.aicte-india.org/sites/default/files/banners/initiatives.jpg"} button={"/initiatives"} />
                    
                </div>
            </div>
        );
    }
}

export default Home;