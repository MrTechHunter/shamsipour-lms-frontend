import { useLocation, useNavigate } from 'react-router';

export const useAddQueryToUrl = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const addQueryToUrl = async (query: any, mode?: string) => {
    const { search, pathname } = location;
    const queryString = await new URLSearchParams(search);
    if (typeof query === 'number') {
      if (mode === 'record') {
        queryString.set('ps', query.toString());
        queryString.delete('p');
      } else {
        queryString.set('p', query.toString());
      }
      navigate(`${pathname}?${queryString.toString()}`);
    } else {
      if (mode === 'remove') {
        queryString.delete(query);
      } else {
        if (Object.keys(query).length > 0) {
          for (const i in query) {
            const key = i === 'page' ? 'p' : i === 'pageSize' ? 'ps' : i;
            if (query[i] !== '') {
              queryString.set(key, query[i]);
            } else {
              queryString.delete(key);
            }
          }
        }
        queryString.delete('p');
        queryString.delete('ps');
      }
      navigate(`${pathname}?${queryString.toString()}`);
    }
  };

  return { addQueryToUrl };
};
