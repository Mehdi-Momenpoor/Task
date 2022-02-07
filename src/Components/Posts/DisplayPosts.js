import React from 'react';
import { useSelector } from 'react-redux';
import AddPosts from './AddPosts';
import Post from './Post';


export default function DisplayPosts() {
    const state = useSelector((state) => state);

    return (
        <>
            <div style={{ marginBottom: '10px', padding: '10px 20px' }}>
                <AddPosts  statement={state.statement} posts={state.posts} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <Post />
            </div>
        </>
    )
}