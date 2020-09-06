import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const AdminUserListBlock = styled.div`
  background: ${palette.gray[2]};
  padding-top: 1rem;
  padding-bottom: 1rem;
  .infos {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    span + span {
      margin-left: 1rem;
    }
  }
`;
const AdminUserItemBlock = styled.div`
  background: white;
  margin: 1rem;
  padding: 3rem;
  &:first-child {
    margin-top: 0;
  }
  & + & {
    margin-top: 1rem;
    border-top: 1px solid ${palette.gray[2]};
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;
const ButtonWithMarginTop = styled(Button)`
  margin-top: 1rem;
`;
const InfoBlock = styled(AdminUserListBlock)`
  font-size: 1.25rem;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdminUserItem = ({ adminUser, onRemoveClick }) => {
  const { userId, email, userName, createdAt } = adminUser;
  return (
    <AdminUserItemBlock>
      <h2>
        #{userId} {userName}
      </h2>
      <div className="infos">
        <span>
          메일: <b>{email}</b>
        </span>
      </div>
      <div className="infos">
        <span>
          등록일: <b>{new Date(createdAt).toLocaleDateString()}</b>
        </span>
      </div>
      <ButtonWithMarginTop fullWidth onClick={() => onRemoveClick(userId)}>
        삭제
      </ButtonWithMarginTop>
    </AdminUserItemBlock>
  );
};

const AdminUsersList = ({ loading, error, adminUsers, onRemove }) => {
  if (error) {
    if (error.response.status === 403) {
      return <InfoBlock>접근권한이 없습니다</InfoBlock>;
    } else {
      return <InfoBlock>에러가 발생했습니다</InfoBlock>;
    }
  }
  if (loading) {
    return <InfoBlock>loading...</InfoBlock>;
  }
  const onRemoveClick = (userId) => {
    onRemove(userId);
  };
  return (
    <AdminUserListBlock>
      {!loading &&
        adminUsers?.map((adminUser) => (
          <AdminUserItem
            adminUser={adminUser}
            key={adminUser.userId}
            onRemoveClick={onRemoveClick}
          />
        ))}
    </AdminUserListBlock>
  );
};

export default AdminUsersList;
