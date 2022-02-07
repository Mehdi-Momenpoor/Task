import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getPostsApi } from '../../Posts';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';

export default function Post() {

    //* state
    const [post, setPost] = useState([]);


    //* async function
    const getPosts = async () => {
        const posts = await getPostsApi(axios);
        if (posts.statusCode === 200) {
            setPost(posts.data)
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
        }
    )

    return (
        <div style={{ width: '275px', margin: '10px 0' }}>
            <Card style={{ minWidth: '275px' }}>
                <CardContent>
                    <Typography
                        style={{ fontSize: 14, }}
                        color="textSecondary"
                        gutterBottom
                    >
                        Word of the Day
                    </Typography>

                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button color='primary' size="small">Edit</Button>
                </CardActions>
            </Card>
        </div>

    )
}
