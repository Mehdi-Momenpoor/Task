import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { editPostsApi, getPostsApi } from '../../Api/Posts';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Link, useHistory } from "react-router-dom";


export default function Post() {
    const history = useHistory();

    //* state
    const [posts, setPosts] = useState([]);

    console.log(posts);
    //* async function
    const getPosts = async () => {
        const posts = await getPostsApi(axios);
        if (posts.statusCode === 200) {
            setPosts(posts.data)
        }
        else {
            alert('error !')
        }
    }
    const editPost = async (id) => {
        const post = await editPostsApi(id, axios);
        if (post.statusCode === 200) {
            history.push(`/posts/${id}`)
        }
        else {
            alert('error !')
        }
    }


    //* useEffect
    useEffect(
        () => {
            const fn = async () => {
                await getPosts();
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
                <Card style={{ minWidth: '275px' }}>
                    <CardContent>
                        <Typography
                            style={{ fontSize: 14, }}
                            color="textSecondary"
                            gutterBottom
                        >
                            {post.title}
                        </Typography>

                        <Typography variant="body2" component="p">
                            {post.body}
                        </Typography>
                    </CardContent>

                    <CardActions>
                        {/* <Button color='primary' size="small">Edit</Button> */}
                        <Button onClick={() => handleEdit(post.id)}
                        // to={`/posts/${post.id}`}
                        >
                            Edit
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    )
}
