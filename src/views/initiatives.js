import React from "react";
import SearchCard from "../utils/searchCard";

class Initiatives extends React.Component{
    render(){
        return(
            <div className="scheme-wrap">
                <SearchCard title={"Education for Girls"} desc={"The Department of School Education and Literacy has supported the Ministry of Women and Child Development for roll out of “Beti Bachao Beti Padhao” Abhiyan in 100 districts of the country to enhance the sex ratio and the status of the girl child. An award is being instituted from the “Beti Bachao Beti Padhao” Abhiyan for School Management Committees which achieve 100% transition of girls at different levels of education."} imgSrc={"https://www.aicte-india.org/sites/default/files/Poster.jpg"}/>
                <SearchCard title={"Persons with Special Needs"} desc={"Scholarship for Differently-abled children AICTE has decided to award 1000 scholarships per annum to differently abled students to pursue technical education based on merit in the qualifying examination to pursue technical education.  The scholarship amount would be Rs. 30000 or tuition fees or actual whichever is less and Rs. 2000 / month for  ten months as contingency allowance."} imgSrc={"https://www.aicte-india.org/sites/default/files/Scheme%20page.jpg"} />
                <SearchCard title={"Initiatives for the North East"} desc={"Special Scholarship Scheme for students of North East Region. The UGC has launched a special scholarship Scheme for students of North East Region from the academic session 2014-15. The Scheme envisages grant of 10,000 scholarships to students from North East Region whose parental income is below Rs. 4.5 lakh per annum and would be provided scholarship ranging from Rs. 3,500 to 5,000 per month for studying at under graduate level in Colleges/Universities of the country."} imgSrc={"https://www.aicte-india.org/sites/default/files/Institutional%20Development%20schemes.jpg"} />
                <SearchCard title={"ICT enabled enhancement of learning opportunities"} desc={"ICT enabled enhancement of learning opportunities to accelerate outreach, improve quality and promote equity by facilitating access to the best educational resources for learners/ teachers."} imgSrc={"https://www.aicte-india.org/sites/default/files/Research%20%26%20Innovation%20Development%20schemes.jpg"} />
                <SearchCard title={"Augmenting Research"} desc={"The UGC has launched a new scheme, Dr. S. Radhakrishnan Post Doctoral Fellows in Social Sciences including Languages. Under the scheme 300 fellowships would be awarded at the rate of Rs. 25,000 per month + HRA etc. for a period of 3 years to the selected Fellows."} imgSrc={"https://www.aicte-india.org/sites/default/files/Institutional%20Development%20schemes_0.jpg"} />
                
            </div>
        )
    }
}

export default Initiatives;