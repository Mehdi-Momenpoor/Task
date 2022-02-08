import React from 'react';
import { useSelector } from 'react-redux';
import PostCard from '../Card';
import AddPosts from './AddPosts';


export default function EditPost() {
    const state = useSelector((state) => state);
    return (
        <div>
            <AddPosts statement={state.statement} posts={state.posts} />
            <PostCard mode={"edit"} post={state.selectedPost} />
        </div>
    )
}
