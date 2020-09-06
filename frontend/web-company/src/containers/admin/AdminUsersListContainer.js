import React, { useEffect } from 'react';
import AdminUsersList from '../../components/admin/AdminUsersList';
import { useDispatch, useSelector } from 'react-redux';
import { listAdminUsers } from '../../modules/adminUsers';
import { adminDeleteUser } from '../../lib/api/admin';
import { withRouter } from 'react-router-dom';

const AdminUsersListContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { adminUsers, error, loading } = useSelector(
    ({ adminUsers, loading }) => ({
      adminUsers: adminUsers.adminUsers,
      error: adminUsers.error,
      loading: loading['adminUsers/LIST_ADMIN_USERS'],
    }),
  );
  useEffect(() => {
    dispatch(listAdminUsers());
  }, [dispatch]);
  const onRemove = async (userId) => {
    try {
      await adminDeleteUser(userId);
      history.push('/admin/user');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AdminUsersList
      loading={loading}
      error={error}
      adminUsers={adminUsers}
      onRemove={onRemove}
    />
  );
};

export default withRouter(AdminUsersListContainer);
