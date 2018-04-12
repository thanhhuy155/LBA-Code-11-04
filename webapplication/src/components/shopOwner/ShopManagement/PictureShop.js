import React, { Component } from 'react';
import LoadedImage from './LoadedImage'
export default class PictureShop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageArray: ['https://s3-ap-southeast-1.amazonaws.com/capstone2/18-04-10-06-53-56Doraemon_r.png']
        }
    }

    render() {
        let { imageArray } = this.state;
        return (
            <div>
                <div className="imgPreview">
                    <img src={imageArray.length !== 0 ? imageArray[0]: ''} class="img-responsive" alt="Image" />
                </div>
                <div style={{ marginTop: 10 }}>
                    <div class="row">

                        {
                            imageArray.map((item, index) => {
                                return( 
                                    <img src={item} class="img-responsive" alt="Image" style = {{width: 40, height: 40}}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
};

