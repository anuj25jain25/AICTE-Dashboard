import React from "react";
import {Link} from 'react-router-dom';

class HomeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            desc: props.desc,
            imgSrc: props.imgSrc,
            button: props.button,
            l1:props.l1,
            l11:props.l11,
            l2:props.l2,
            l22:props.l22,
            l3:props.l3,
            l33:props.l33,
            l4:props.l4,
            l44:props.l44,
            l5:props.l5,
            l55:props.l55,
        };
    }
    render() {
        return (
            <div className="card col-12 col-sm m-sm-2">
                <Link to={this.state.button}>
                <div className="view">
                    <img src={this.state.imgSrc} className="img-fluid" alt="placeholder image with fruits" />
                </div>
                <div className="card-body">
                    <h4 className="pink-text"> {this.state.title}</h4>
                    <p className="card-text">{this.state.desc}</p>

                    <ul className="card-list p-0">
                        <li className="card-list-item card-text">{this.state.l1}
                        <br />
                        <div className="desc">{this.state.l11}</div>
                        </li>
                        <li className="card-list-item card-text">{this.state.l2}
                        <br />
                        <div className="desc">{this.state.l22}</div>
                        </li>
                        <li className="card-list-item card-text">{this.state.l3}
                        <br />
                        <div className="desc">{this.state.l33}</div>
                        </li>
                        <li className="card-list-item card-text">{this.state.l4}
                        <br />
                        <div className="desc">{this.state.l44}</div>
                        </li>
                        <li className="card-list-item card-text">{this.state.l5}
                        <br />
                        <div className="desc">{this.state.l55}</div>
                        </li>
                    </ul>

                </div>
                </Link>
            </div>
        );
    }
}

export default HomeCard;