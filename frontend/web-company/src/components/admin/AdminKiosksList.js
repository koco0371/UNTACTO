import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const AdminKioskListBlock = styled.div`
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
const AdminKioskItemBlock = styled.div`
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
const InfoBlock = styled(AdminKioskListBlock)`
  font-size: 1.25rem;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdminKioskItem = ({ adminKiosk }) => {
  const { kioskId, location } = adminKiosk;
  return (
    <AdminKioskItemBlock>
      <h2>
        #{kioskId} {location}
      </h2>
    </AdminKioskItemBlock>
  );
};

const AdminKiosksList = ({ loading, error, adminKiosks }) => {
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
  return (
    <AdminKioskListBlock>
      {!loading &&
        adminKiosks?.map((adminKiosk) => (
          <AdminKioskItem adminKiosk={adminKiosk} key={adminKiosk.kioskId} />
        ))}
    </AdminKioskListBlock>
  );
};

export default AdminKiosksList;
