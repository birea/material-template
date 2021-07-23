import React from 'react';
import Carousel from 'react-elastic-carousel';

class ElasticCarousel extends React.Component {
    constructor(props) {
        super(props)
        this.breakPoints = [
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
            { width: 850, itemsToShow: 4 },
            { width: 1150, itemsToShow: 5, itemsToScroll: 2 },
            { width: 1450, itemsToShow: 6 },
            { width: 1750, itemsToShow: 8 },
        ]
    }
    render() {
        return (
            <Carousel breakPoints={this.breakPoints}>
                <img src="https://th.bing.com/th/id/OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK?w=329&h=185&c=7&o=5&dpr=1.25&pid=1.7" alt="" style={{ width: '200px', height: '200px' }} />
                <img src="https://th.bing.com/th/id/OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK?w=329&h=185&c=7&o=5&dpr=1.25&pid=1.7" alt="" style={{ width: '200px', height: '200px' }} />
                <img src="https://th.bing.com/th/id/OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK?w=329&h=185&c=7&o=5&dpr=1.25&pid=1.7" alt="" style={{ width: '200px', height: '200px' }} />
                <img src="https://th.bing.com/th/id/OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK?w=329&h=185&c=7&o=5&dpr=1.25&pid=1.7" alt="" style={{ width: '200px', height: '200px' }} />
                <img src="https://th.bing.com/th/id/OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK?w=329&h=185&c=7&o=5&dpr=1.25&pid=1.7" alt="" style={{ width: '200px', height: '200px' }} />
                <img src="https://th.bing.com/th/id/OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK?w=329&h=185&c=7&o=5&dpr=1.25&pid=1.7" alt="" style={{ width: '200px', height: '200px' }} />
                <img src="https://th.bing.com/th/id/OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK?w=329&h=185&c=7&o=5&dpr=1.25&pid=1.7" alt="" style={{ width: '200px', height: '200px' }} />
                <img src="https://th.bing.com/th/id/OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK?w=329&h=185&c=7&o=5&dpr=1.25&pid=1.7" alt="" style={{ width: '200px', height: '200px' }} />
            </Carousel>
        )
    }
}

export default ElasticCarousel;