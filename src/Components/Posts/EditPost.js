import React from 'react';
import { useSelector } from 'react-redux';
import PostCard from '../Card';
import AddPosts from './AddPosts';


export default function EditPost() {
    const state = useSelector((state) => state);
    return (
        <div>
            <div style={{ marginBottom: '10px', padding: '10px 20px' }}>
                <AddPosts statement={state.statement} posts={state.posts} />
            </div>

            <div style={{ width: '275px', margin: '10px 0' }}>
                <PostCard mode={"edit"} post={state.selectedPost} />
            </div>

        </div>
    )
}
