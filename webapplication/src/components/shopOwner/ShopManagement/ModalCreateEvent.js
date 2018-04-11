import React, { Component } from 'react';
import {checkOnlyLength, checkEndDate, checkStartDate} from '../../../constraints/InputValidation'

export default class ModalCreateEvent extends Component {
    constructor (props)
    {
        super (props)
        this.state ={
            txtStartDate: '',
            txtCloseDate: '',
            txtDescription: '',
            imageArray: [],
            formError:{
                txtStartDate: '',
                txtCloseDate: '',
                txtDescription: '',
            }
        }
    }

    handleChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
        })
    }

    _handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    _handleSubmit = (e) => {
        alert ('ds')
        const { txtStartDate,txtCloseDate,txtDescription} = this.state
        this.setState({
            formError:
                {
                    ...this.state.formError,
                    txtStartDate: checkStartDate (txtStartDate),
                    txtCloseDate: checkEndDate (txtStartDate, txtCloseDate),
                    txtDescription: checkOnlyLength (txtDescription),
                }
        },
            () => {
                var formError = Object.values(this.state.formError)
                let isOkay = false
                for (let i = 0; i < formError.length; i++) {
                    if (formError[i] === '')
                        isOkay = true
                    else {
                        isOkay = false
                        break
                    }
                }
                if (isOkay) {
                    console.log(JSON.stringify (this.state))
                }
            }
        )
    }
    render() {
        return (
            <div class="modal fade" id="modal-CreateEvent">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header" style= {{backgroundColor:'lightGreen'}}>
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            <center><h4 class="modal-title"><strong>Create a Event</strong></h4></center>
                        </div>
                        <div class="modal-body">
                            <form onSubmit = {this._handleSubmit}>
                                <div class="form-group">
                                    <label for="">Start Date: </label>
                                    <input 
                                        type="date" 
                                        class="form-control" 
                                        placeholder="Input field"
                                        value = {this.state.txtStartDate}
                                        onChange = {this.handleChange}
                                        name = "txtStartDate"
                                        />
                                    <p class={'text-danger'}>{this.state.formError.txtStartDate}</p>
                                </div>

                                <div class="form-group">
                                    <label for="">Close Date: </label>
                                    <input 
                                        type="date" 
                                        class="form-control" 
                                        placeholder="Input field" 
                                        value= {this.state.txtCloseDate}
                                        onChange = {this.handleChange}
                                        name= "txtCloseDate"
                                        />
                                    <p class={'text-danger'}>{this.state.formError.txtCloseDate}</p>
                                </div>

                                <div class="form-group">
                                    <label for="">Description: </label>
                                    <textarea 
                                        class="form-control" 
                                        rows="3" 
                                        placeholder="Input field" 
                                        value = {this.state.txtDescription}
                                        onChange = {this.handleChange}
                                        name = "txtDescription"
                                        />
                                    <p class={'text-danger'}>{this.state.formError.txtDescription}</p>
                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlFile1">Choose Images</label>
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                </div>
                            </form>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button onClick = {()=> this._handleSubmit()} type="button" class="btn btn-primary">Create</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
};
