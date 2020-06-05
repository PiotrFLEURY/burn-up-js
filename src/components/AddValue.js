import React from 'react'
import { connect } from 'react-redux'
import { addValue } from '../state/actions'

const AddValue = ({ dispatch }) => {
    let input

    return (
        <div className="container">
            <br />
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addValue(parseInt(input.value)))
                    input.value = ''
                }}
            >
                <div className="form-group">
                    <input type="number" className="form-control" placeholder="Add your sprint score here" ref={node => (input = node)} />
                </div>
            </form >
        </div>
    )
}

export default connect()(AddValue)