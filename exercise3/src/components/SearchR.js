import React from "react";
import styles from './SearchR.module.css';

export default function SearchR(props){
    return(
        <div className={ styles.product }>
            <div>
                <div><img src={'/images/${props.images}'}/></div>
                <div> { props.product }</div>
                <div>{ props.maker }</div>
                <div>{ props.rating }</div>
                <div>${ props.price }</div>
            </div>
        </div>
    )
}