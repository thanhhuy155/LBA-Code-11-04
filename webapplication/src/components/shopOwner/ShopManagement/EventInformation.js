import React, { Component, Fragment } from 'react';
import ModalCreateEvent from './ModalCreateEvent'
export default class EventInformation extends Component {
    render() {
        return (
            <Fragment>


                <div>

                    <table class="table">
                            <tbody>
                                <tr>
                                    <td class="col-xd-2 col-scol-md-2"><strong>Name of Events:</strong></td>
                                    <td class="col-xd-2 col-md-2">8</td>
                                </tr>

                                <tr>
                                    <td class="col-xd-2 col-md-2"><strong>Number of Operated Events:</strong></td>
                                    <td class="col-xd-2 col-md-2">2</td>
                                </tr>

                                <tr>
                                    <td class="col-xd-2 col-md-2"><strong>Number of Closed Events:</strong></td>
                                    <td class="col-xd-2 col-md-2">4</td>
                                </tr>

                                <tr>
                                    <td class="col-xd-2 col-md-2"><strong>Number of Future Events:</strong></td>
                                    <td class="col-xd-2 col-md-2">0</td>
                                </tr>
                            </tbody>

                        </table>

                </div>


                <div class="row">
                    <button type="button" class="btn btn-success" data-toggle="modal" href='#modal-CreateEvent'>Create Event</button>
                    <ModalCreateEvent />
                </div>

            </Fragment>

        )
    }
};
