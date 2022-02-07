import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../State/GlobalReducer';

export default function AddPosts({ statement }) {

    // const [statement, setStatement] = useState({
    //     title: bodyStatement,
    //     body: bodyStatement
    // });
    const dispatch = useDispatch();

    function handleChange(e) {
        // setStatement({ [e.target.name]: e.target.value })

        dispatch({ type: ACTIONS.ON_STATEMENT, payload: { name: e.target.name, value: e.target.value } });
    }



    return (
        <form>
            <TextField
                value={statement.title}
                onChange={handleChange}
                placeholder='title'
                name="title"

            />

            <TextField
                value={statement.body}
                onChange={handleChange}
                multiline
                maxRows={4}
                placeholder='body'
                name="body"
                style={{ marginLeft: 5 }}
            />

            <Button color='primary'>submit</Button>
            <Button color='secondary'>cancel</Button>
        </form>
    )
}
