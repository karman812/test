import React, {useEffect} from 'react';
import {setDataThunkCreator} from "../../redux/reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import Journal from "./Journal";

let JournalContainer = (props) => {

    useEffect(() => {
        props.setDataThunkCreator()
    }, []);
    return (
        <Journal articlesData={props.state.data}/>
    )
}
let mapStateToProps = (state) => {
    return {
        state: state.page
    }
}
export default compose(connect(mapStateToProps, {setDataThunkCreator}))(JournalContainer);