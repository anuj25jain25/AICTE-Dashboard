import React from "react";

class SearchCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            desc: props.desc,
            imgSrc: props.imgSrc
        };
    }
    render() {
        return (
            <div className="row search-card">
                <div className="col-4 col-sm-3 p-0 align-self-center">
                    <img src={this.state.imgSrc} className="avatar rounded-circle z-depth-1-half" />
                    </div>
                    <div className="col-8 col-sm-9">
                        <a>
                            <h4 className="font-weight-bold">{this.state.title}</h4>
                        </a>
                        <div className="mt-2">
                            {/* <ul className="list-unstyled">
                                <li className="comment-date">
                                    <i className="fa fa-clock-o"></i> temp</li>
                            </ul> */}
                        </div>
                        <br /><br /><br />
                        <p className="grey-text"><a href={this.state.desc} target='_blank'>Read More ...</a></p>
                    </div>
                </div>
                );
            }
}

export default SearchCard;