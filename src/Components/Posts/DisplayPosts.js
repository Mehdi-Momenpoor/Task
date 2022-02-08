import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import AddPosts from './AddPosts';
import Post from './Post';

const useStyles = makeStyles(theme => ({
    postContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }

}));


export default function DisplayPosts() {

    const classes = useStyles();
    const state = useSelector((state) => state);

    return (
        <>
            <AddPosts statement={state.statement} posts={state.posts} />

            <div className={classes.postContainer}>
                <Post />
            </div>
        </>
    )
}