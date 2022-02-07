import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../State/GlobalReducer';
import { SubmitEditPostsApi } from '../../Api/Posts'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function AddPosts({ statement,posts }) {

    const dispatch = useDispatch();
    const history = useHistory();

    function handleChange(e) {

        dispatch({ type: ACTIONS.ON_STATEMENT, payload: { name: e.target.name, value: e.target.value } });
    }

    async function SubmitEditPost() {
        const result = await SubmitEditPostsApi(statement, axios)
        console.log(result);
        if (result.statusCode === 200) {
            history.push("/");

            const copyPosts = [...posts];

            const postIndex = copyPosts.findIndex(post => post.id === statement.id);

            if (postIndex !== -1) {
                copyPosts.splice(postIndex, 1, statement);
                dispatch({ type: ACTIONS.ON_POSTS, payload: copyPosts })
                
            }

        }
    }

    function handleSubmit() {
        SubmitEditPost();

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

            <Button onClick={handleSubmit} color='primary'>submit</Button>
            <Button color='secondary'>cancel</Button>
        </form>
    )
}
