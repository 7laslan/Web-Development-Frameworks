import React from "react";
import styles from './SearchV.module.css';
import SearchR from './SearchR';

export default function SearchV(props) {
    return(
        <div>
            <div className={ styles.presentationModeGrid}>
                {
                    props.items.map(item => <SearchR key={item.id} {...item} />)
                }
            </div>
        </div>
    )
}