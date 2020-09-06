import React from 'react';
import styled from 'styled-components';

const AdminListTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 4rem;
  bottom: 0;
  right: 0;
  margin: 2rem;
`;

const AdminListTemplate = ({ children }) => {
  return <AdminListTemplateBlock>{children}</AdminListTemplateBlock>;
};

export default AdminListTemplate;
