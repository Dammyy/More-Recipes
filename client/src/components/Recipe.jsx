import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Recipe extends PureComponent {
  render () {
    const { id, i, title, details, toggleModal, deleteRecipe } = this.props;
    return ( 
        <div className="col-md-4 recipe-display"> 
               <img src="img/chicken.jpg" />
                      <div id="recipe-votes"><li><i className="fa fa-thumbs-o-up" aria-hidden="true"> 200</i> </li><li><i className="fa fa-thumbs-o-down" aria-hidden="true"> 505</i></li> </div>
                      <div id="recipe-title"> <a href="recipe.html"><h2>{title}</h2> </a></div>
                       
                       <button className="btn btn-success" role="button" onClick={() => toggleModal(i)}>View</button>
                       <button className="btn btn-danger" role="button" onClick={() => deleteRecipe(id)}>Delete</button>
                    </div>
    );
  }
}