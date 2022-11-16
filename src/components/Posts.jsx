import { Divider, Row } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import PostItem from './PostItem';

export function Posts() {
    const posts = useSelector(state => state.posts.posts);
    return (
        <div>
            <div id='main'>
                <Divider>All Blogs</Divider>
                <Row justify="space-evenly" align="top">
                    {
                        posts.map((post) => <PostItem key={post.id} post={post}></PostItem>)
                    }
                </Row>
            </div>
        </div>
    )
}