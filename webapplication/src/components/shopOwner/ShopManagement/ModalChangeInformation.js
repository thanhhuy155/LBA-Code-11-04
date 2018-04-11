import React, { Component } from 'react';

export default class ModalChangeInformation extends Component {
  render() {
    return (
      <div class="modal fade" id="modal-ChangeInformation">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header" style= {{backgroundColor:'lightBlue'}}>
                      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      <center><h4 class="modal-title"><strong>Change Infortion</strong></h4></center>
                  </div>
                  <div class="modal-body">
                      
                      <form action="" method="POST" role="form" >
                          <div class="form-group">
                              <label for=""><strong>Name of Shop: </strong></label>
                              <input type="text" class="form-control" id="" placeholder="Input field"/>
                          </div>

                          <div class="form-group">
                              <label for=""><strong>Type of Shop: </strong></label>
                              <input type="text" class="form-control" id="" placeholder="Input field"/>
                          </div>

                          <div class="form-group">
                              <label for=""><strong>Phone Number of Shop: </strong></label>
                              <input type="text" class="form-control" id="" placeholder="Input field"/>
                          </div>

                          <div class="form-group">
                              <label for=""><strong>Open Time: </strong></label>
                              <input type="time" class="form-control" id="" placeholder="Input field"/>
                          </div>

                          <div class="form-group">
                              <label for=""><strong>Close Time: </strong></label>
                              <input type="time" class="form-control" id="" placeholder="Input field"/>
                          </div>

                          <div class="form-group">
                              <label for=""><strong>Street: </strong></label>
                              <input type="text" class="form-control" id="" placeholder="Input field"/>
                          </div>

                          <div class="form-group">
                              <label for=""><strong>Distict: </strong></label>
                              <input type="text" class="form-control" id="" placeholder="Input field"/>
                          </div>

                          <div class="form-group">
                              <label for=""><strong>Price min: </strong></label>
                              <input type="text" class="form-control" id="" placeholder="Input field"/>
                          </div>

                          <div class="form-group">
                              <label for=""><strong>Price max: </strong></label>
                              <input type="text" class="form-control" id="" placeholder="Input field"/>
                          </div>

                          <div class="form-group">
                              <label for=""><strong>Description max: </strong></label>
                              <textarea rows={3} class="form-control" id="" placeholder="Input field"/>
                          </div>

                      </form>
                      
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
              </div>
          </div>
      </div>
      
    )
  }
};
