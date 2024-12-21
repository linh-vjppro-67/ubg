import { defaultImage, TImage } from '@/types/common';
import { safeParse } from '@/utils/safeParse';
import axios from 'axios';
import QueryString from 'qs';
import { API_STRAPI_URL } from 'src/consts';
import { QUERY_KEYS, URLS } from '@/services/urls';
import { useQuery } from '@tanstack/react-query';

export type SecondaryFeature = {
  name: string;
  summary: string;
  description: string;
  image: TImage;
  icon?: any;
};

export type HomeSecondaryFeatures = {
  title: string;
  description: string;
  features: SecondaryFeature[];
};

export const getHomeSecondaryFeatures = async () => {
  const query = QueryString.stringify(
    {
      populate: ['features.image'],
    },
    {
      encodeValuesOnly: true,
    },
  );

  let data: any;
  const defaultData: HomeSecondaryFeatures = {
    title: '',
    description: '',
    features: [],
  };

  try {
    data = (
      await axios.get(
        `${API_STRAPI_URL}${URLS.HOME_SECONDARY_FEATURES}?${query}`,
      )
    )?.data?.data;
  } catch (error) {
    return defaultData;
  }

  const safeData = safeParse<HomeSecondaryFeatures>(data, defaultData);
  safeData.features = safeData.features.map((item) => ({
    ...item,
    image: safeParse<TImage>(item.image, defaultImage, true),
  }));
  return safeData;
};

export const useHomeSecondaryFeatures = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_SECONDARY_FEATURES],
    queryFn: getHomeSecondaryFeatures,
  });
};
