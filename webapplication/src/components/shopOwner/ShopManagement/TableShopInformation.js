import React, { Component, Fragment } from 'react';
import ModalChangeInformation from './ModalChangeInformation'
import ModalPayment from './ModalPayment'
export default class TableShopInformation extends Component {
    render() {
        return (
            <Fragment>
                <h5><strong>Information of Shop</strong></h5>

                <button type="button" class="btn btn-sm btn-primary" data-toggle="modal" href='#modal-ChangeInformation'>Change Information</button> &nbsp;
                    <button type="button" class="btn btn-sm btn-warning" data-toggle="modal" href='#modal-payment'>Payment</button>
                <br />
                <table class="table">
                    <tbody>
                        <tr>
                            <td class="col-xd-2 col-md-4"><strong>Name of Shop:</strong></td>
                            <td class="col-xd-2 col-md-8">The Blue</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-4"><strong>Average of Star Number:</strong></td>
                            <td class="col-xd-2 col-md-8">3.5 Stars</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-4"><strong>Number of Views (This month):</strong></td>
                            <td class="col-xd-2 col-md-8">35 Views</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-2"><strong>Type of Shop:</strong></td>
                            <td class="col-xd-2 col-md-10">Personal</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-2"><strong>Phone Number of Shop:</strong></td>
                            <td class="col-xd-2 col-md-10">Something</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-2"><strong>Open Time:</strong></td>
                            <td class="col-xd-2 col-md-10">Something</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-2"><strong>Close Time:</strong></td>
                            <td class="col-xd-2 col-md-10">Something</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-2"><strong>Open Day:</strong></td>
                            <td class="col-xd-2 col-md-10">Every day</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-2"><strong>Street:</strong></td>
                            <td class="col-xd-2 col-md-10">115 Đống Đa</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-2"><strong>Distict:</strong></td>
                            <td class="col-xd-2 col-md-10">Phường Thanh Bình, Quận Hải Châu, TP. Đà Nẵng</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-2"><strong>Price min:</strong></td>
                            <td class="col-xd-2 col-md-10">Something</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-2"><strong>Price max:</strong></td>
                            <td class="col-xd-2 col-md-10">5000</td>
                        </tr>

                        <tr>
                            <td class="col-xd-2 col-md-2"><strong>Description:</strong></td>
                            <td class="col-xd-2 col-md-10">10000</td>
                        </tr>
                    </tbody>
                </table>
                <ModalChangeInformation />
                <ModalPayment />
            </Fragment>
        )
    }
};
