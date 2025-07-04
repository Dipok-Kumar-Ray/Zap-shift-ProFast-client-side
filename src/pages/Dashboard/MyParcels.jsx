import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyParcels = () => {
  // 🔹 Step 1: সব hooks component-এর উপরে রাখতে হবে
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  // 🔹 Step 2: useQuery must be at top-level, use `enabled` to guard
  const { data: parcels = [], isLoading } = useQuery({
    queryKey: ['my-parcels', user?.email],
    enabled: !!user?.email, //  only run query when user.email exists
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  // 🔹 Step 3: render conditionally — UI only!
  if (loading || !user) {
    return <p>Loading user info...</p>;
  }

  if (isLoading) {
    return <p>Loading parcels...</p>;
  }

  return (
    <div>
      <h2>My Parcels: {parcels.length}</h2>
      <ul>
        {parcels.map((parcel) => (
          <li key={parcel._id}>{parcel.parcelName}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyParcels;
