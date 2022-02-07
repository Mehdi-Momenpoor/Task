import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';

export default function AddPosts() {

    const [statement, setStatement] = useState({
        title: '',
        body: ''
    });

    function handleChange(e) {
        setStatement({ [e.target.name]: e.target.value })
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
