import React, { Component,Fragment} from 'react';
import StatisticsCard from './StatisticsCard'
export default class General extends Component {
    constructor (props)
    {
        super (props)
        this.state = {
            CardItems : [
                {Color: '#CDDC39', Title:'Number of Shop', Content: '5 Shops', Icon:''},
                {Color: '#4CAF50', Title:'Number of Shop Progressing', Content: '4 Shops', Icon:''},
                {Color: '#F44336', Title:'Number of Shop Locked', Content: '1 Shops', Icon:''},
            ]
        }
    }

    render() {
        return (
            <Fragment>
                {this.state.CardItems.map ((item,index)=>{
                    return <StatisticsCard item= {item} key= {index}/>
                })}
            </Fragment>
        )
    }
};
