import React from 'react';
import { Input, Button, Form, Comment, Avatar } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ProfileLink } from '../../components';

class AddComment extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  addComment = event => {
    const { addNewComment, slug } = this.props;
    const { value } = this.state;
    event.preventDefault();
    addNewComment(slug, value);
    this.setState({ value: '' });
  };

  onChangeValue = ({ target }) => {
    this.setState({ value: target.value });
  };

  render() {
    const { value } = this.state;
    const { currentUser, isAuthorizedUser, inProgress } = this.props;
    if (!isAuthorizedUser) {
      return null;
    }
    return (
      <div>
        <Comment
          avatar={
            <ProfileLink username={currentUser.username}>
              <Avatar src={currentUser.image} alt="Han Solo" />
            </ProfileLink>
          }
          content={
            <div>
              <Form.Item>
                <Input.TextArea rows={4} onChange={this.onChangeValue} value={value} />
              </Form.Item>
              <Form.Item>
                <Button
                  htmlType="submit"
                  type="primary"
                  loading={inProgress}
                  onClick={this.addComment}
                >
                  Добавить комментарий
                </Button>
              </Form.Item>
            </div>
          }
        />
      </div>
    );
  }
}

AddComment.defaultProps = {
  slug: '',
  isAuthorizedUser: false,
};

AddComment.propTypes = {
  addNewComment: PropTypes.func.isRequired,
  slug: PropTypes.string,
  currentUser: PropTypes.instanceOf(Object).isRequired,
  isAuthorizedUser: PropTypes.bool,
};

const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  background: #eee;
  padding: 10px 15px;
  margin-bottom: 20px;

  .comment__author-img {
    border-radius: 50%;
    margin-right: 15px;
  }
  .comment__form {
    display: flex;
    align-items: baseline;
    width: 100%;
  }
`;

export default AddComment;
