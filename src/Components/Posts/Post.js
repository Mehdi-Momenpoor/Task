import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { editPostsApi, getPostsApi } from '../../Api/Posts';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from '../../State/GlobalReducer';
import PostCard from '../Card';


export default function Post() {
    const history = useHistory();

    //* state
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state)

    //* async function
    const getPosts = async () => {
        const posts = await getPostsApi(axios);
        if (posts.statusCode === 200) {
            dispatch({ type: ACTIONS.ON_POSTS, payload: posts.data })
        }
        else {
            alert('error !')
        }
    }
    const editPost = async (id) => {
        const post = await editPostsApi(id, axios);
        if (post.statusCode === 200) {

            history.push(`/edit`)
            dispatch({ type: ACTIONS.EDIT_TARGET_POST, payload: { postData: post.data } })
        }
        else {
            alert('error !')
        }
    }


    //* useEffect
    useEffect(
        () => {
            const fn = async () => {
                if (posts?.length === 0) {

                    await getPosts();
                }
            }
            fn()
        }, []
    )

    //* function

    function handleEdit(id) {
        editPost(id)
    }



    return (

        posts.map(post =>
            <div key={post.id} style={{ width: '275px', margin: '10px 0' }}>
                <PostCard mode={"show"} onEdit={handleEdit} post={post} />
            </div>
        )
    )
}
