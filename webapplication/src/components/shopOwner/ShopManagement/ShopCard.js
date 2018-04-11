import React, { Component } from 'react';

export default class ShopCard extends Component {
    render() {
        return (
            <div class="col-xs-6 col-sm-4 col-md-4">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <center><h3 class="panel-title">The Blue</h3></center>
                    </div>
                    <div class="panel-body">
                        
                        <img src="http://giaiphaptinhhoa.com/wp-content/uploads/2012/11/Blue.jpg" class="img-responsive" alt="Image"/>
                        
                      </div>

                    <div class="panel-footer">
                        112 Đống Đa, Phường Thạch Than, Quận Đống Đa, Đà Nẵng
                      </div>
                </div>
            </div>
        )
    }
};
