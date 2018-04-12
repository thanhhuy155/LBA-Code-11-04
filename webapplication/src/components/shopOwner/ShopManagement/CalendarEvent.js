import React, { Component } from 'react';
import moment from 'moment';
import ModalEventDetail from './ModalEventDetail'
import BigCalendar from 'react-big-calendar'
import {Link, Redirect} from 'react-router-dom'
BigCalendar.momentLocalizer(moment);

export default class MyCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [
                {
                    title: 'Khuyến mãi giá sốc',
                    allDay: true,
                    start: '2018/04/06',
                    end: '2018/04/09'
                },

            ],
            SentEvent:null,
            isOpen:false
        }
    }

    _openModalEventDetail = (SentEvent) =>{
        this.setState ({SentEvent:SentEvent,isOpen:true})
    }

    _turnOffModalEventDetail = () =>{
        this.setState ({isOpen:false})
    }

    render() {
        return (
            <div style={{ height: 500 }}>
                <ModalEventDetail 
                    SentEvent= {this.state.SentEvent} 
                    isOpen= {this.state.isOpen} 
                    turnOffModal={this._turnOffModalEventDetail}
                    />
                <BigCalendar
                    defaultDate = {new Date()}
                    events={this.state.events}
                    step={60}
                    onSelectEvent = {(event,e)=>{
                        this._openModalEventDetail (event)
                    }}
                />
            </div>
            
        )

    }
}
