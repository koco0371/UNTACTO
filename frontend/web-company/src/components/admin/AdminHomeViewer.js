import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const AdminHomeListBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;
  height: 600px;
  margin-top: 2rem;
  background: ${palette.gray[7]};
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
const AdminHomeItemBlock = styled.div`
  height: 100%;
  width: calc(100% - 2rem);
  background: white;
  margin: 1rem;
  padding: 3rem;
  font-size: 2rem;
  margin-bottom: 0;
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    margin-right: 2rem;
  }
`;

const AdminHomeViewer = () => {
  return (
    <AdminHomeListBlock>
      <Link to={'/admin/survey'}>
        <AdminHomeItemBlock>
          <i className="fas fa-poll fa-2x icon"></i>
          <span>설문 목록</span>
        </AdminHomeItemBlock>
      </Link>
      <Link to={'/admin/user'}>
        <AdminHomeItemBlock>
          <i className="far fa-building fa-2x icon"></i>
          <span>회사 목록</span>
        </AdminHomeItemBlock>
      </Link>
      <Link to={'/admin/customer'}>
        <AdminHomeItemBlock>
          <i className="fas fa-user-friends fa-2x icon"></i>
          <span>설문응답자 목록</span>
        </AdminHomeItemBlock>
      </Link>
      <Link to={'/admin/kiosk'}>
        <AdminHomeItemBlock>
          <i className="fas fa-window-restore fa-2x icon"></i>
          <span>키오스크 목록</span>
        </AdminHomeItemBlock>
      </Link>
    </AdminHomeListBlock>
  );
};

export default AdminHomeViewer;
