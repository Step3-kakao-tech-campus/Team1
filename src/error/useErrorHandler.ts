import { convertPath } from 'apis/convertURI';
import useLogin from 'hooks/useLogin';
import react from 'react';
import { useNavigate } from 'react-router-dom';

const useErrorHandler = () => {
  const navigate = useNavigate();
  const commonErrorHandler = (error: any) => {
    const code = error.response.status;
    const errorMessage = error.response.data.message;
    console.log(error);
    const { logout } = useLogin();

    switch (code) {
      case 401:
        alert('로그인이 만료되었습니다');
        logout();
        navigate(convertPath('/'));
        break;
      case 404:
        // 상황별로 다름
        alert(`다시 시도하세요`);
        navigate(convertPath('/'));
        break;
      case 408:
        alert('timeout. 다시 시도하세요');
        break;
      case 422:
        // validation
        alert(`입력값이 올바르지 않습니다`);
        break;
      default:
        if (500 <= code) {
          alert('서버 오류');
        } else {
          // 403
          alert(`잘못된 접근입니다`);
          navigate(convertPath('/'));
        }
        break;
    }
  };

  return { commonErrorHandler };
};

export default useErrorHandler;
