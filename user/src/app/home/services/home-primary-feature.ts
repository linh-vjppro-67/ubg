import { defaultImage, TImage } from '@/types/common';
import { safeParse } from '@/utils/safeParse';
import axios from 'axios';
import QueryString from 'qs';
import { API_STRAPI_URL } from 'src/consts';
import { QUERY_KEYS, URLS } from '@/services/urls';
import { useQuery } from '@tanstack/react-query';

export type PrimaryFeature = {
  title: string;
  description: string;
  image: TImage;
};

export type HomePrimaryFeatures = {
  title: string;
  description: string;
  features: PrimaryFeature[];
  backgroundImage: TImage;
};

export const getHomePrimaryFeatures = async () => {
  const query = QueryString.stringify(
    {
      populate: ['features.image', 'backgroundImage'],
    },
    {
      encodeValuesOnly: true,
    },
  );

  let data: any;
  const defaultData: HomePrimaryFeatures = {
    title: '',
    description: '',
    features: [],
    backgroundImage: defaultImage,
  };

  try {
    data = (
      await axios.get(`${API_STRAPI_URL}${URLS.HOME_PRIMARY_FEATURES}?${query}`)
    ).data?.data;
  } catch (error) {
    return defaultData;
  }

  const safeData = safeParse<HomePrimaryFeatures>(data, defaultData);
  safeData.backgroundImage = safeParse<TImage>(
    safeData.backgroundImage,
    defaultImage,
    true,
  );
  safeData.features = safeData.features.map((item) => ({
    ...item,
    image: safeParse<TImage>(item.image, defaultImage, true),
  }));
  return safeData;
};

export const useHomePrimaryFeatures = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_PRIMARY_FEATURES],
    queryFn: getHomePrimaryFeatures,
  });
};
