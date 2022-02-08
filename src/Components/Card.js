import React from 'react';
import { Button, Card as MuiCard, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '275px',
        margin: '10px 0',
    },

    cardWidth: {
        minWidth: '275px'
    },
    fontSize :{
        fontSize: 14,
    },

}));


export default function PostCard({ mode, onEdit, post }) {

    const classes = useStyles();

    return (
        <div className={classes.root} >
            <MuiCard className={classes.cardWidth} >
                <CardContent>
                    <Typography
                        className={classes.fontSize}
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
