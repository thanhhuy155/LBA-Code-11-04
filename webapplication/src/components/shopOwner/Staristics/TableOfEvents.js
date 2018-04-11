import React, { Component, Fragment } from 'react';
import EventItem from './EventItem'
export default class TableOfEvents extends Component {
    render() {
        return (

            <Fragment>

                <div class="panel panel-default">
                    <div class="panel-heading">
                        <label>Sort for:  </label> &nbsp;
                        <select>
                            <option value="volvo">All</option>
                            <option value="saab">Events are in Progress</option>
                            <option value="opel">Events were closed</option>
                        </select>
                    </div>

                    <div class="panel-body table-responsive" style={{ maxHeight: 300 }}>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Name of Event</th>
                                    <th>Created Date</th>
                                    <th>Started Date</th>
                                    <th>End Date</th>
                                    <th>Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <EventItem />
                                <EventItem />
                                <EventItem />
                                <EventItem />
                                <EventItem />
                                <EventItem />
                                <EventItem />
                                <EventItem />
                                <EventItem />
                                <EventItem />
                            </tbody>
                        </table>
                    </div>
                </div>



            </Fragment >

        )
    }
};
