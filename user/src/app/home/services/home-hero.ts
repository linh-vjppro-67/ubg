import { defaultImage, TImage } from '@/types/common';
import { safeParse } from '@/utils/safeParse';
import axios from 'axios';
import { API_STRAPI_URL } from 'src/consts';
import { QUERY_KEYS, URLS } from '@/services/urls';
import QueryString from 'qs';
import { useQuery } from '@tanstack/react-query';

export type HomeHero = {
  title: string;
  subTitle: string;
  partnersLabel: string;
  partnersLogo: TImage[];
};

export const getHomeHero = async () => {
  const query = QueryString.stringify(
    {
      populate: ['partnersLogo'],
    },
    {
      encodeValuesOnly: true,
    },
  );

  let data: any;
  const defaultData: HomeHero = {
    title: '',
    subTitle: '',
    partnersLabel: '',
    partnersLogo: [],
  };

  try {
    data = (await axios.get(`${API_STRAPI_URL}${URLS.HOME_HERO}?${query}`)).data
      ?.data;
  } catch (error) {
    return defaultData;
  }

  const safeData = safeParse<HomeHero>(data, defaultData);
  safeData.partnersLogo = safeData.partnersLogo.map((item) =>
    safeParse<TImage>(item, defaultImage, true),
  );
  return safeData;
};

export const useHomeHero = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_HERO],
    queryFn: getHomeHero,
  });
};
