import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Welcome extends PureComponent {
  render () {
    return (
      <div className="container-fluid">
              <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselIndicators" data-slide-to={0} className="active" />
                  <li data-target="#carouselIndicators" data-slide-to={1} />
                  <li data-target="#carouselIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <img className="d-block img-fluid" src="img/slide1.jpg" alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block img-fluid" src="img/slide2.jpg" alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block img-fluid" src="img/slide3.jpg" alt="Third slide" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <div className="row">
                <div className="col-md-12 welcome-msg">
                  <i><h1>welcome to more recipes!</h1></i>
                </div>
                <h3 id="latest-h3">Latest Recipes</h3>
                <div className="col-md-12 latest-recipes">
                  <div className="row">
                    <div className="col-md-4 recipe-display"> 
                      <img src="img/chicken.jpg" />
                      <div id="recipe-votes"><li><i className="fa fa-thumbs-o-up" aria-hidden="true"> 200</i> </li><li><i className="fa fa-thumbs-o-down" aria-hidden="true"> 505</i></li> </div>
                      <div id="recipe-title"> <a href="recipe.html"><h2>Juicy Roasted Chicken</h2> </a></div>
                    </div>
                    <div className="col-md-4 recipe-display">
                      <img src="img/dish.jpg" />
                      <div id="recipe-votes"><li><i className="fa fa-thumbs-o-up" aria-hidden="true"> 200</i> </li><li><i className="fa fa-thumbs-o-down" aria-hidden="true"> 50</i></li> </div>
                      <div id="recipe-title"><h2>Awesome cake recipe</h2></div>
                    </div>
                    <div className="col-md-4 recipe-display">
                      <img src="img/cake.jpg" />
                      <div id="recipe-votes"><li><i className="fa fa-thumbs-o-up" aria-hidden="true"> 200</i> </li><li><i className="fa fa-thumbs-o-down" aria-hidden="true"> 50</i></li> </div>
                      <div id="recipe-title"><h2>Awesome cake recipe</h2></div>
                    </div>
                    <div className="col-md-4 recipe-display">
                      <img src="img/dish.jpg" />
                      <div id="recipe-votes"><li><i className="fa fa-thumbs-o-up" aria-hidden="true"> 200</i> </li><li><i className="fa fa-thumbs-o-down" aria-hidden="true"> 50</i></li> </div>
                      <div id="recipe-title"><h2>Awesome cake recipe</h2></div>
                    </div>
                    <div className="col-md-4 recipe-display">
                      <img src="img/cake.jpg" />
                      <div id="recipe-votes"><li><i className="fa fa-thumbs-o-up" aria-hidden="true"> 200</i> </li><li><i className="fa fa-thumbs-o-down" aria-hidden="true"> 50</i></li> </div>
                      <div id="recipe-title"><h2>Awesome cake recipe</h2></div>
                    </div>
                    <div className="col-md-4 recipe-display">
                      <img src="img/chicken.jpg" />
                      <div id="recipe-votes"><li><i className="fa fa-thumbs-o-up" aria-hidden="true"> 200</i> </li><li><i className="fa fa-thumbs-o-down" aria-hidden="true"> 50</i></li> </div>
                      <div id="recipe-title"><h2>Awesome cake recipe</h2></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    );
  }
}