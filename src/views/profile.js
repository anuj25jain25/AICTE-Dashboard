import React from "react";
import ProfileCarousel from '../utils/profileCarousel';

class Profile extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <ProfileCarousel/>
                    <div className="row no-gutters admin-panel">
                        <div className="col-3 text-center pt-5"><h2 className="text-light">User Name !</h2></div>
                        <div className="col-6 text-center"><div className="admin-p-img"></div></div>
                        <div className="col-3 text-center pt-5"><h2 className="text-light">Contact !</h2></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;