import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getPostsApi } from '../../Api/Posts';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";


export default function Post() {

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


    //* useEffect
    useEffect(
        () => {
            const fn = async () => {
                await getPosts();
            }
            fn()
        }, []
    )

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
                        <Link to={`/posts/${post.id}`}>Edit</Link>
                    </CardActions>
                </Card>
            </div>
        )
    )
}
