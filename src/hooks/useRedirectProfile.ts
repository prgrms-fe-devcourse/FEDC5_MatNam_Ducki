import { useNavigate } from 'react-router-dom';

import { useCheckAuthUser } from '@/hooks/useAuth';

export const useRedirectToProfile = () => {
  const navigate = useNavigate();
  const { data: authUser } = useCheckAuthUser({ isEnabled: false });

  const redirectToProfile = (id?: string) => {
    if (id && id !== authUser?._id) {
      navigate(`/profile/${id}`);
    }
  };

  return redirectToProfile;
};
