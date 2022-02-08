import React from 'react';
import { useSelector } from 'react-redux';
import AddPosts from './AddPosts';
import Post from './Post';


export default function DisplayPosts() {
    const state = useSelector((state) => state);

    return (
        <>
            <AddPosts statement={state.statement} posts={state.posts} />

            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <Post />
            </div>
        </>
    )
}