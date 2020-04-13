import React from 'react';
import { Input, Button } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ProfileName } from '../../components';

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
    const { currentUser } = this.props;
    return (
      <Wrapper>
        <ProfileName username={currentUser.username}>
          <img
            className="comment__author-img"
            src={currentUser.image}
            alt={currentUser.username}
            width="30"
            height="30"
          />
        </ProfileName>
        <form onSubmit={this.addComment} className="comment__form">
          <Input.TextArea rows={1} onChange={this.onChangeValue} value={value} />
          <Button htmlType="submit">отправить</Button>
        </form>
      </Wrapper>
    );
  }
}

AddComment.defaultProps = {
  slug: '',
};

AddComment.propTypes = {
  addNewComment: PropTypes.func.isRequired,
  slug: PropTypes.string,
  currentUser: PropTypes.instanceOf(Object).isRequired,
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
