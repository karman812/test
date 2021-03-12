import React from 'react';
import JournalItem from "./JournaItems/JournalItem";
import {Col, Row} from "react-bootstrap";
import styles from './JournalStyle.module.css'
import notice from '../../assets/notice.png'

let Journal = (props) => {
    console.log(props)
    let Articles = props.articlesData.map((el, i) => {
        return (
            <JournalItem title={el.children[2].value} body={el.children[4].value} key={i}/>
        )
    })
    console.log(Articles)
    return (
        <Col xs='10' className={styles.articles}>
            <Row>
                <Col xs='12' className={styles.mainCol}>
                    <Row className={styles.headerRow}>
                        <Col xs='auto' className={styles.moneyCol}>
                            100.000 Р
                        </Col>
                        <Col xs='auto' className={styles.noticeCol}>
                            <img src={notice} alt=""/>
                        </Col>
                        <Col xs='auto' className={styles.userNameCol}>
                            vikavishny
                        </Col>
                        <Col xs='auto' className={styles.logoutCol}>
                            Выйти
                        </Col>
                    </Row>
                    <Row className={styles.articlesRow}>

                        <Col xs='12' className={styles.pageNameCol}>
                            <span className={styles.pageName}>Бортовой журнал</span>
                        </Col>
                        <Col className={styles.mainPageNameCol}>
                            <span className={styles.mainPageName}>Бортовой журнал</span>
                        </Col>
                        {Articles}
                    </Row>
                </Col>
            </Row>

        </Col>
    )
}

export default Journal