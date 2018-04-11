import React, { Component, Fragment } from 'react';
import { checkLengthInput, checkOnlyNumber, checkTimeFormat, checkOnlyLength} from '../../../constraints/InputValidation'
export default class FormInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            txtNameOfShop: '',
            txtTypeOfShop: 'Fashion Store',
            txtPhoneNumber: '',
            txtOpenTime: '',
            txtCloseTime: '',
            txtStreet: '',
            txtDistrict: '',
            txtMinPrice: '',
            txtMaxPrice: '',
            txtDescription: '',
            ckMon: true,
            ckTue: true,
            ckWed: true,
            ckThu: true,
            ckFri: true,
            ckSat: true,
            ckSun: true,
            formError: {
                txtNameOfShop: '',
                txtTypeOfShop: '',
                txtPhoneNumber: '',
                txtOpenTime: '',
                txtCloseTime: '',
                txtStreet: '',
                txtDistrict: '',
                txtMinPrice: '',
                txtMaxPrice: '',
                txtDescription: '',
                txtOpenDate: '',
            },
            file: '',
            imagePreviewUrl: ''
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
        e.preventDefault();
        const { txtNameOfShop,txtTypeOfShop,txtPhoneNumber,txtOpenTime,txtCloseTime,txtStreet,
            txtDistrict,txtMinPrice,txtMaxPrice,txtDescription,ckMon,ckTue,ckWed,ckThu,ckFri,ckSat,ckSun,
        } = this.state
        this.setState({
            formError:
                {
                    ...this.state.formError,
                    txtOpenDate: ckMon===ckTue===ckWed===ckThu===ckFri===ckSat===ckSun===false?'Choose at least a date':'' ,
                    txtNameOfShop: checkOnlyLength(txtNameOfShop,1),
                    txtPhoneNumber: checkOnlyNumber(txtPhoneNumber,null,null),
                    txtOpenTime: checkTimeFormat(txtOpenTime,1),
                    txtCloseTime:checkTimeFormat(txtCloseTime,1),
                    txtStreet :checkOnlyLength(txtStreet,1),
                    txtDistrict:checkOnlyLength (txtStreet,1),
                    txtMinPrice: checkOnlyNumber(txtMinPrice,0,1000000000),
                    txtMaxPrice:checkOnlyNumber(txtMaxPrice,this.state.txtMinPrice,1000000000),
                    txtDescription: checkLengthInput(txtDescription,8),
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
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }
        return (
            <Fragment>
                <form onSubmit={this._handleSubmit}>
                    <div class="row">

                        <div class="col-xs-12 col-sm-12 col-md-6">
                            <div class="form-group">
                                <label for="">Name Of Shop: </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Input field"
                                    onChange={this.handleChange}
                                    name='txtNameOfShop'
                                    value= {this.state.txtNameOfShop}
                                />
                                <p class={'text-danger'}>{this.state.formError.txtNameOfShop}</p>
                            </div>

                            <div class="form-group">
                                <label for="">Select Type of Shop: </label>
                                <select onChange={this.handleChange} name={'txtTypeOfShop'} id="input${1/(\w+)/\u\1/g}" class="form-control" required="required">
                                    <option selected={true} value="Fashion Store">Fashion Store</option>
                                    <option value="Restaurant or Coffeshop">Restaurant or Coffeshop</option>
                                    <option value="Entertainment">Entertainment</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="">Phone Number Of Shop: </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Input field"
                                    onChange={this.handleChange}
                                    name='txtPhoneNumber'
                                    value= {this.state.txtPhoneNumber}
                                />
                                <p class={'text-danger'}>{this.state.formError.txtPhoneNumber}</p>
                            </div>

                            <div class="form-group">
                                <label for="">Open Time: </label>
                                <input
                                    type="time"
                                    class="form-control"
                                    placeholder="Input field"
                                    onChange={this.handleChange}
                                    name='txtOpenTime'
                                    value= {this.state.txtOpenTime}
                                />
                                <p class={'text-danger'}>{this.state.formError.txtOpenTime}</p>
                            </div>

                            <div class="form-group">
                                <label for="">Close Time: </label>
                                <input
                                    type="time"
                                    class="form-control"
                                    placeholder="Input field"
                                    onChange={this.handleChange}
                                    name='txtCloseTime'
                                    value= {this.state.txtCloseTime}
                                />
                                <p class={'text-danger'}>{this.state.formError.txtCloseTime}</p>
                            </div>

                            <div class="form-group">
                                <label for="">Open Date: </label>
                                <br></br>
                                <label class="form-check-label">Mon: </label>&nbsp;
                                <input name={'ckMon'} onChange={this.handleChange} checked={this.state.ckMon} type="checkbox" class="form-check-input" id="exampleCheck1" />;&nbsp;
                                <label class="form-check-label">Tue: </label>&nbsp;
                                <input name={'ckTue'} onChange={this.handleChange} checked={this.state.ckTue} type="checkbox" class="form-check-input" id="exampleCheck1" />;&nbsp;
                                <label class="form-check-label">Wed: </label>&nbsp;
                                <input name={'ckWed'} onChange={this.handleChange} checked={this.state.ckWed} type="checkbox" class="form-check-input" id="exampleCheck1" />;&nbsp;
                                <label class="form-check-label">Thu: </label>&nbsp;
                                <input name={'ckThu'} onChange={this.handleChange} checked={this.state.ckThu} type="checkbox" class="form-check-input" id="exampleCheck1" />;&nbsp;
                                <label class="form-check-label">Fri: </label>&nbsp;
                                <input name={'ckFri'} onChange={this.handleChange} checked={this.state.ckFri} type="checkbox" class="form-check-input" id="exampleCheck1" />;&nbsp;
                                <label class="form-check-label">Sat: </label>&nbsp;
                                <input name={'ckSat'} onChange={this.handleChange} checked={this.state.ckSat} type="checkbox" class="form-check-input" id="exampleCheck1" />;&nbsp;
                                <label class="form-check-label">Sun: </label>&nbsp;
                                <input name={'ckSun'} onChange={this.handleChange} checked={this.state.ckSun} type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <p class={'text-danger'}>{this.state.formError.txtOpenDate}</p>
                            </div>

                            <div class="form-group">
                                <label for="">Street: </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Input field"
                                    onChange={this.handleChange}
                                    name='txtStreet'
                                    value = {this.state.txtStreet}
                                />
                                <p class={'text-danger'}>{this.state.formError.txtStreet}</p>
                            </div>

                            <div class="form-group">
                                <label for="">District: </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Input field"
                                    onChange={this.handleChange}
                                    name='txtDistrict'
                                />
                                <p class={'text-danger'}>{this.state.formError.txtDistrict}</p>
                            </div>

                            <div class="form-group">
                                <label for="">Min Price: </label>
                                <input
                                    type="number"
                                    class="form-control"
                                    placeholder="Input field"
                                    onChange={this.handleChange}
                                    name='txtMinPrice'
                                    value = {this.state.txtMinPrice}
                                />
                                <p class={'text-danger'}>{this.state.formError.txtMinPrice}</p>
                            </div>

                            <div class="form-group">
                                <label for="">Max Price: </label>
                                <input
                                    type="number"
                                    class="form-control"
                                    placeholder="Input field"
                                    onChange={this.handleChange}
                                    name='txtMaxPrice'
                                    value= {this.state.txtMaxPrice}
                                />
                                <p class={'text-danger'}>{this.state.formError.txtMaxPrice}</p>
                            </div>

                            <div class="form-group">
                                <label for="">Description: </label>
                                <textarea
                                    type="text"
                                    class="form-control"
                                    placeholder="Input field"
                                    onChange={this.handleChange}
                                    name='txtDescription'
                                    value= {this.state.txtDescription}
                                />
                                <p class={'text-danger'}>{this.state.formError.txtDescription}</p>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-12 col-md-6">
                            <div class="form-group">
                                <label for="">Image of Shop: </label>
                                <input className="fileInput"
                                    type="file"
                                    onChange={(e) => this._handleImageChange(e)} />
                                <p class={'text-danger'}>{this.state.formError.txtNameOfShop}</p>
                                <div style={{}}>
                                    {$imagePreview}
                                </div>
                            </div>
                        </div>

                    </div>







                    <button type="submit" class="btn btn-primary">Create</button>
                </form>
            </Fragment>
        )
    }
};
