import React from 'react';
import {Col, Row} from "react-bootstrap";
import companylogo from '../../assets/logo.png'
import userLogo from '../../assets/User.png'
import vpsLogo from '../../assets/vps.png'
import domensLogo from '../../assets/icon_domens.png'
import supportLogo from '../../assets/support.png'
import styles from './NavbarStyle.module.css'

let Navbar = () => {
    return (
        <Col xs='2' className={styles.nav}>
            <Row>
                <Col xs='12'>
                    <img src={companylogo} className={styles.logo}/>
                </Col>
                <Col xs='12' className={styles.userCol}>
                    <img src={userLogo} className={styles.user}/>
                    <span className={styles.userText}>Аккаунт</span>
                </Col>
                <Col xs='12' className={styles.vpsCol}>
                    <img src={vpsLogo} className={styles.vps}/>
                    <span className={styles.vpsText}>VPS</span>
                </Col>
                <Col xs='12' className={styles.domensCol}>
                    <img src={domensLogo} className={styles.domens}/>
                    <span className={styles.domensText}>ДОМЕНЫ</span>
                </Col>
                <Col xs='12' className={styles.supportCol}>
                    <img src={supportLogo} className={styles.support}/>
                    <span className={styles.supportText}>БОРТОВОЙ ЖУРНАЛ</span>
                </Col>

            </Row>


        </Col>
    )
}

export default Navbar