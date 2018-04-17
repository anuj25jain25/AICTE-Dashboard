import React from "react";
import { Carousel, CarouselCaption, CarouselInner, CarouselItem, CarouselControl } from 'mdbreact';

class ProfileCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.state = {
            activeItem: 1,
            maxLength: 4
        };
    }

    next() {
        const nextItem = this.state.activeItem + 1;
        if (nextItem > this.state.maxLength) {
            this.setState({ activeItem: 1 });
        } else {
            this.setState({ activeItem: nextItem });
        }
    }

    prev() {
        const prevItem = this.state.activeItem - 1;
        if (prevItem < 1) {
            this.setState({ activeItem: this.state.maxLength });
        } else {
            this.setState({ activeItem: prevItem });
        }
    }

    goToIndex(item) {
        if (this.state.activeItem !== item) {
            this.setState({
                activeItem: item
            });
        }
    }

    render() {
        return (
            <Carousel
                activeItem={this.state.activeItem}
                next={this.next}
                className="z-depth-1 cust-mask">
                <CarouselInner>
                    <CarouselItem itemId="1">
                        <div className="view hm-black-light">
                            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="First slide" />
                            <div className="mask"></div>
                        </div>
                    </CarouselItem>
                    <CarouselItem itemId="2">
                        <div className="view hm-black-strong">
                            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="First slide" />
                            <div className="mask"></div>
                        </div>
                    </CarouselItem>
                    <CarouselItem itemId="3">
                        <div className="view hm-black-slight">
                            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="First slide" />
                            <div className="mask"></div>
                        </div>
                    </CarouselItem>
                    <CarouselItem itemId="4">
                        <div className="view hm-black-light">
                            <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg" alt="Mattonit's item" />
                            <div className="mask"></div>
                        </div>
                    </CarouselItem>
                </CarouselInner>
                <CarouselControl direction="prev" role="button" onClick={() => { this.prev(); }} />
                <CarouselControl direction="next" role="button" onClick={() => { this.next(); }} />
            </Carousel>
        )
    }
}

export default ProfileCarousel;