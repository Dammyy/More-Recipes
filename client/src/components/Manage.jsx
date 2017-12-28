import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Welcome extends PureComponent {
  render () {
    return (
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-9 catalog-left">
                  <div id="catalog-search-form">
                    <form className="form-inline">
                      <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> 
                  </div>
                  <h3 id="latest-h3">My Recipes</h3>
                  <div className="col-md-12 latest-recipes">
                    <div className="add-recipe">
                      <a href="add-recipe.html">Add recipe</a>
                    </div>
                    <div id="recipes-manage">
                      <div id="recipes-name"><i className="fa fa-circle" aria-hidden="true" /> Juicy Roasted Chicken</div>
                      <div id="action-options">
                        <li><a href="#">Edit</a></li>
                        <li><a style={{color: 'red'}} href="#">Delete</a></li>
                      </div>	
                    </div>
                    <div id="recipes-manage">
                      <div id="recipes-name"><i className="fa fa-circle" aria-hidden="true" /> Not so juicy Roasted Chicken</div>
                      <div id="action-options">
                        <li><a href="#">Edit</a></li>
                        <li><a style={{color: 'red'}} href="#">Delete</a></li>
                      </div>		
                    </div>
                  </div>
                </div>
                <div className="col-md-3 catalog-right">
                  <h3 id="latest-h3">Popular Recipes</h3>
                  <div id="popular">
                    <div id="popular-title"><a href="#"> Awesome chicken </a></div>
                    <div id="popular-votes"><li><i className="fa fa-thumbs-o-up" aria-hidden="true"> 200</i> </li><li><i className="fa fa-thumbs-o-down" aria-hidden="true"> 50</i></li> </div>
                  </div>
                  <div id="popular">
                    <div id="popular-title"><a href="#"> Grilled turkey </a></div>
                    <div id="popular-votes"><li><i className="fa fa-thumbs-o-up" aria-hidden="true"> 200</i> </li><li><i className="fa fa-thumbs-o-down" aria-hidden="true"> 50</i></li> </div>
                  </div>
                  <div id="popular">
                    <div id="popular-title"><a href="#"> Awesome chicken </a></div>
                    <div id="popular-votes"><li><i className="fa fa-thumbs-o-up" aria-hidden="true"> 200</i> </li><li><i className="fa fa-thumbs-o-down" aria-hidden="true"> 50</i></li> </div>
                  </div>
                </div>
              </div>
            </div>
    );
  }
}