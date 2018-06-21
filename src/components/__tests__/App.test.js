import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentsBox from 'components/CommentsBox';
import CommentList from "components/CommentList";

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
})

it("shows a comment box", () => {
    expect(wrapped.find(CommentsBox).length).toEqual(1);
});

it("shows a comment list", () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
})