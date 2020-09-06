import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const AdminCustomerListBlock = styled.div`
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
const AdminCustomerItemBlock = styled.div`
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
const InfoBlock = styled(AdminCustomerListBlock)`
  font-size: 1.25rem;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdminCustomerItem = ({ adminCustomer, onRemoveClick }) => {
  const { customerId, point, age, gender, phoneNum, createdAt } = adminCustomer;
  return (
    <AdminCustomerItemBlock>
      <h2>
        #{customerId} {phoneNum}
      </h2>
      <div className="infos">
        <span>
          나이: <b>{age}</b>
        </span>
        <span>
          성별: <b>{gender}</b>
        </span>
        <span>
          포인트: <b>{point}</b>
        </span>
      </div>
      <div className="infos">
        <span>
          등록일: <b>{new Date(createdAt).toLocaleDateString()}</b>
        </span>
      </div>
      <ButtonWithMarginTop fullWidth onClick={() => onRemoveClick(customerId)}>
        삭제
      </ButtonWithMarginTop>
    </AdminCustomerItemBlock>
  );
};

const AdminCustomersList = ({ loading, error, adminCustomers, onRemove }) => {
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
  const onRemoveClick = (customerId) => {
    onRemove(customerId);
  };
  return (
    <AdminCustomerListBlock>
      {!loading &&
        adminCustomers?.map((adminCustomer) => (
          <AdminCustomerItem
            adminCustomer={adminCustomer}
            key={adminCustomer.customerId}
            onRemoveClick={onRemoveClick}
          />
        ))}
    </AdminCustomerListBlock>
  );
};

export default AdminCustomersList;
