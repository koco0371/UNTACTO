import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminKiosksList from '../../components/admin/AdminKiosksList';
import { listAdminKiosks } from '../../modules/adminKiosks';

const AdminKiosksListContainer = () => {
  const dispatch = useDispatch();
  const { adminKiosks, error, loading } = useSelector(
    ({ adminKiosks, loading }) => ({
      adminKiosks: adminKiosks.adminKiosks,
      error: adminKiosks.error,
      loading: loading['adminKiosks/LIST_ADMIN_KIOSKS'],
    }),
  );
  useEffect(() => {
    dispatch(listAdminKiosks());
  }, [dispatch]);
  return (
    <AdminKiosksList
      loading={loading}
      error={error}
      adminKiosks={adminKiosks}
    />
  );
};

export default AdminKiosksListContainer;
