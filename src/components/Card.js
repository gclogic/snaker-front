import React, { Component } from "react";

class Card extends Component {

    render() {
        return (
            <div id={this.props.id} className="col-md-3 mt-3">
                <div className="card">
                    <div className="card-header">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="card-body">
                        <img src={this.props.imageUrl} alt={this.props.description} width="100%" />
                    </div>
                    <div className="card-footer p-3">
                        <span className="rounded-pill bg-dark text-light p-2">{this.props.description}</span>
                    </div>
                </div>
            </div>
        );
    }
}



export default Card;