import React from 'react';
import { Button, TextField, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { ACTIONS } from '../../State/GlobalReducer';
import { SubmitEditPostsApi } from '../../Api/Posts'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: '10px',
        padding: '10px 20px'
    },
    margin: {
        marginLeft: 5
    }

}));

export default function AddPosts({ statement, posts }) {


    //* hook
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    //* async function 
    async function submitEditPost() {
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

    //* function 
    function handleSubmit() {
        if (statement.id) {
            //* it's edit mode */
            submitEditPost();
        }
        else {
            //* it's add mode */
            // code here...
        }
    }

    function handleChange(e) {
        dispatch({ type: ACTIONS.ON_STATEMENT, payload: { name: e.target.name, value: e.target.value } });
    }


    return (
        <div className={classes.root}>
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
                    className={classes.margin}
                />

                <Button onClick={handleSubmit} color='primary'>submit</Button>
                <Button color='secondary'>cancel</Button>
            </form>
        </div>
    )
}
