import React, { PureComponent } from 'react';

export default class Modal extends PureComponent {
  render () {
    const { id, title, details, year, picture } = this.props.recipe;
    return(
      <div className="modal fade" id="recipe-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">{`${title} (${year})`}</h4>
            </div>
            <div className="modal-body">
              <div>
                <img src="img/chicken.jpg" className="img-responsive img-big" />
              </div>
              <hr />
              <p>{details}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}