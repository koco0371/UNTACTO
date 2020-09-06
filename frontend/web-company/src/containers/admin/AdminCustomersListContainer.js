import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminCustomersList from '../../components/admin/AdminCustomersList';
import { listAdminCustomers } from '../../modules/adminCustomers';
import { adminDeleteCustomer } from '../../lib/api/admin';
import { withRouter } from 'react-router-dom';

const AdminCustomersListContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { adminCustomers, error, loading } = useSelector(
    ({ adminCustomers, loading }) => ({
      adminCustomers: adminCustomers.adminCustomers,
      error: adminCustomers.error,
      loading: loading['adminCustomers/LIST_ADMIN_CUSTOMERS'],
    }),
  );
  useEffect(() => {
    dispatch(listAdminCustomers());
  }, [dispatch]);

  const onRemove = async (customerId) => {
    try {
      await adminDeleteCustomer(customerId);
      history.push('/admin/customer');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AdminCustomersList
      loading={loading}
      error={error}
      adminCustomers={adminCustomers}
      onRemove={onRemove}
    />
  );
};

export default withRouter(AdminCustomersListContainer);
