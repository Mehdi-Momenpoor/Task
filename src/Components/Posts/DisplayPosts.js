import React from 'react';
import AddPosts from './AddPosts';
import Post from './Post';


export default function DisplayPosts() {
    return (
        <>
            <div style={{ marginBottom: '10px', padding: '10px 20px' }}>
                <AddPosts />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <Post />
            </div>
        </>
    )
}