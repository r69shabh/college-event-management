import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent, allowedRoles) => {
  return (props) => {
    const [userRole, setUserRole] = useState(null);
    const router = useRouter();

    useEffect(() => {
      // Fetch user role from API or context
      const fetchUserRole = async () => {
        try {
          const response = await fetch('/api/user-role', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          const data = await response.json();
          setUserRole(data.role);
        } catch (error) {
          console.error('Failed to fetch user role:', error);
          router.push('/login');
        }
      };

      fetchUserRole();
    }, []);

    if (!userRole) {
      return <div>Loading...</div>;
    }

    if (!allowedRoles.includes(userRole)) {
      return <div>Access Denied</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;