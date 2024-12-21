import { safeParse } from '@/utils/safeParse';
import axios from 'axios';
import QueryString from 'qs';
import { API_STRAPI_URL } from 'src/consts';
import { QUERY_KEYS, URLS } from '@/services/urls';
import { useQuery } from '@tanstack/react-query';

export type Pricing = {
  title: string;
  description: string;
  features: string[];
  value: string;
};

export type HomePricing = {
  title: string;
  description: string;
  prices: Pricing[];
};

export const getHomePricing = async () => {
  const query = QueryString.stringify(
    {
      populate: ['prices'],
    },
    {
      encodeValuesOnly: true,
    },
  );

  let data: any;
  const defaultData: HomePricing = {
    title: '',
    description: '',
    prices: [],
  };

  try {
    data = (await axios.get(`${API_STRAPI_URL}${URLS.HOME_PRICING}?${query}`))
      .data?.data;
  } catch (error) {
    return defaultData;
  }

  const safeData = safeParse<HomePricing>(data, defaultData);

  return safeData;
};

export const useHomePricing = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_PRICING],
    queryFn: getHomePricing,
  });
};
