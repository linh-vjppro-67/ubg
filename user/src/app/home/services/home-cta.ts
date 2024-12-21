import { QUERY_KEYS, URLS } from '@/services/urls';
import { defaultImage, TImage } from '@/types/common';
import { safeParse } from '@/utils/safeParse';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import QueryString from 'qs';
import { API_STRAPI_URL } from 'src/consts';

export type HomeCTA = {
  title: string;
  description: string;
  CTAButtonText: string;
  backgroundImage: TImage;
};

export const getHomeCTA = async () => {
  const query = QueryString.stringify(
    {
      populate: ['backgroundImage'],
    },
    {
      encodeValuesOnly: true,
    },
  );

  let data: any;
  const defaultData: HomeCTA = {
    title: '',
    description: '',
    backgroundImage: defaultImage,
    CTAButtonText: '',
  };

  try {
    data = (await axios.get(`${API_STRAPI_URL}${URLS.HOME_CTA}?${query}`)).data
      ?.data;
  } catch (error) {
    return defaultData;
  }

  const safeData = safeParse<HomeCTA>(data, defaultData);
  safeData.backgroundImage = safeParse<TImage>(
    data.backgroundImage,
    defaultImage,
    true,
  );
  return safeData;
};

export const useHomeCTA = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_CTA],
    queryFn: getHomeCTA,
  });
};
