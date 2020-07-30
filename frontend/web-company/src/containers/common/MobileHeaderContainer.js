import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MobileHeader from '../../components/common/MobileHeader';
import { logout } from '../../modules/user';

const MobileHeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return <MobileHeader user={user} onLogout={onLogout} />;
};

export default MobileHeaderContainer;
