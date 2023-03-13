import React from "react";
import '../Stylesheets/Card.css';

function Card(props){
    return(
        <section>
            <div className="card-cont">
                <img src={require(`../img/${props.img1}.svg`)} alt="" className="hero" />
                <div className="acheuno">
                    <h1>Order Sumary</h1>
                </div>
                <div className="parrafo">
                    <p>{props.parr1}</p>
                </div>
                <div className="cosas">
                    <img src={require(`../img/${props.img2}.svg`)} alt="" />
                    <div className="p2">
                        <p>{props.parr2}</p>
                        <p>{props.parr3}</p>
                    </div>
                    <a href="#">{props.aaa}</a>
                </div>
                <button className="b1" type="button">Proced to payment</button>
                <button className="b2" type="button">Cancel order</button>
            </div>
        </section>
    )
}

export default Card;