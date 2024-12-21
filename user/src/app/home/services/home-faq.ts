import { safeParse } from '@/utils/safeParse';
import axios from 'axios';
import QueryString from 'qs';
import { API_STRAPI_URL } from 'src/consts';
import { QUERY_KEYS, URLS } from '@/services/urls';
import { useQuery } from '@tanstack/react-query';

export type FAQ = {
  question: string;
  answer: string;
};

export type HomeFAQ = {
  title: string;
  description: string;
  faqs: FAQ[];
};

export const getHomeFAQ = async () => {
  const query = QueryString.stringify(
    {
      populate: ['faqs'],
    },
    {
      encodeValuesOnly: true,
    },
  );

  let data: any;
  const defaultData: HomeFAQ = {
    title: '',
    description: '',
    faqs: [],
  };

  try {
    data = (await axios.get(`${API_STRAPI_URL}${URLS.HOME_FAQ}?${query}`)).data
      ?.data;
  } catch (error) {
    return defaultData;
  }

  const safeData = safeParse<HomeFAQ>(data, defaultData);

  return safeData;
};

export const useHomeFAQ = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_FAQ],
    queryFn: getHomeFAQ,
  });
};
