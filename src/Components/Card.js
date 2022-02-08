import { Button, Card as MuiCard, CardActions, CardContent, Typography } from '@material-ui/core';
import React from 'react';


export default function PostCard({ mode, onEdit, post }) {
    return (
        <div style={{ width: '275px', margin: '10px 0' }}>
            <MuiCard style={{ minWidth: '275px' }}>
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
                    {mode === "show" && <Button onClick={() => onEdit(post.id)}>
                        Edit
                    </Button>}
                </CardActions>
            </MuiCard>
        </div>
    )
}
