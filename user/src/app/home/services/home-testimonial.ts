import { defaultImage, TImage } from '@/types/common';
import { safeParse } from '@/utils/safeParse';
import axios from 'axios';
import QueryString from 'qs';
import { API_STRAPI_URL } from 'src/consts';
import { QUERY_KEYS, URLS } from '@/services/urls';
import { useQuery } from '@tanstack/react-query';

export type Testimonial = {
  content: string;
  name: string;
  position: string;
  avatar: TImage;
};

export type THomeTestimonials = {
  title: string;
  description: string;
  testimonials: Testimonial[];
};

export const getHomeTestimonials = async () => {
  const query = QueryString.stringify(
    {
      populate: ['testimonials.avatar'],
    },
    {
      encodeValuesOnly: true,
    },
  );

  let data: any;
  const defaultData: THomeTestimonials = {
    title: '',
    description: '',
    testimonials: [],
  };

  try {
    data = (
      await axios.get(`${API_STRAPI_URL}${URLS.HOME_TESTMONIALS}?${query}`)
    ).data?.data;
  } catch (error) {
    return defaultData;
  }

  const safeData = safeParse<THomeTestimonials>(data, defaultData);
  safeData.testimonials = safeData.testimonials.map((item) => ({
    ...item,
    avatar: safeParse<TImage>(item.avatar, defaultImage, true),
  }));

  return safeData;
};

export const useHomeTestimonials = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.HOME_TESTMONIALS],
    queryFn: getHomeTestimonials,
  });
};
