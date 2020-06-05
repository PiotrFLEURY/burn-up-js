import React from 'react';
import { connect } from 'react-redux';
import { removeFromHistory } from '../state/actions'

const History = ({ dispatch, values }) => {

    const listItems = values.map((current) =>
        <li className="list-group-item" key={current}>{current} - <button className="btn btn-danger" onClick={
            e => { dispatch(removeFromHistory(current)) }
        }>Delete</button></li>
    );


    return (
        <div className="container">
            <ul className="list-group">{listItems}</ul>
        </div>
    );
}

const mapStateToProps = state => ({
    values: state.values.history
})

export default connect(mapStateToProps)(History)