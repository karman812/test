import React, {useEffect, useState} from 'react';
import ReactHtmlParser from 'react-html-parser';
import {Col,Row} from "react-bootstrap";
import styles from '../JournalStyle.module.css'
import scrollDown from '../../../assets/scrollDown.png'
import scrollUp from '../../../assets/scrollUp.png'

let JournalItem = (props) =>{
    let [isClicked, setIsClicked] = useState(false)
    let onUserClick = () =>{
        if(isClicked){
            setIsClicked(false)
        }else {
            setIsClicked(true)
        }
    }
    return(
            <Col xs='12' className={isClicked ? styles.articleColActive : styles.articleCol}>
                <Row  onClick={onUserClick}>
                    <Col xs='10'>
                        {props.title}
                    </Col>
                    <Col xs='2' className={styles.scrollCol}><img src={isClicked ? scrollUp : scrollDown} alt=""/></Col>
                </Row>
                <Row>{isClicked
                    ? <Col xs='12' className={styles.articleItemCol}>
                        {ReactHtmlParser(props.body)}
                    </Col>
                    : null
                }

                </Row>
            </Col>
    )
}

export default JournalItem
