import React from 'react';
import CommentList from 'components/CommentList';
import CommentsBox from 'components/CommentsBox.js';

export default () => {
    return (
        <div>
            <CommentsBox/>
            <CommentList/>
        </div>
    )
}