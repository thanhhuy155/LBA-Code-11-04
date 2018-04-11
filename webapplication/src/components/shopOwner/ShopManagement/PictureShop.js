import React, { Component } from 'react';

export default class PictureShop extends Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: 'http://giaiphaptinhhoa.com/wp-content/uploads/2012/11/Blue.jpg' };
    }

    _handleSubmit(e) {
        e.preventDefault();
        console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        try {
            reader.readAsDataURL(file)
        } catch (e){
            console.log (e)
        }
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        

    }
    render() {
        let { imagePreviewUrl } = this.state;
        return (
            <div>
                <div className="imgPreview">
                    <img src={imagePreviewUrl} class="img-responsive" alt="Image"/>
                </div>
                <form onSubmit={(e) => this._handleSubmit(e)}>
                    <input className="fileInput"
                        type="file"
                        onChange={(e) => this._handleImageChange(e)} />
                </form>
            </div>
        )
    }
};

