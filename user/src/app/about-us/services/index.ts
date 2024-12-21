import { QUERY_KEYS, URLS } from '@/services/urls';
import { defaultImage, TImage } from '@/types/common';
import { safeParse } from '@/utils/safeParse';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import QueryString from 'qs';
import { API_STRAPI_URL } from 'src/consts';

export type AboutUsCommitmentItem = {
  title: string;
  icon: TImage;
};

export type AboutUsMissionItem = {
  title: string;
  description: string;
  index: number;
};

export type AboutUsValueItem = {
  title: string;
  description: string;
  icon: TImage;
};

export type AboutUsCommitmentSection = {
  items: AboutUsCommitmentItem[];
};

export type AboutUsDevelopmentSection = {
  title: string;
  images: TImage[];
};

export type AboutUsMissionSection = {
  title: string;
  items: AboutUsMissionItem[];
};

export type AboutUsValueSection = {
  title: string;
  image: TImage;
  items: AboutUsValueItem[];
};

export type AboutUs = {
  title: string;
  description: string;
  commitmentSection: AboutUsCommitmentSection;
  developmentSection: AboutUsDevelopmentSection;
  missionSection: AboutUsMissionSection;
  valueSection: AboutUsValueSection;
};

export const getAboutUs = async () => {
  const query = QueryString.stringify(
    {
      populate: [
        'commitmentSection.items.icon',
        'developmentSection.images',
        'missionSection.items',
        'valueSection.image',
        'valueSection.items.icon',
      ],
    },
    { encodeValuesOnly: true }
  );

  let data: any;
  const defaultData: AboutUs = {
    title: '',
    description: '',
    commitmentSection: { items: [] },
    developmentSection: { title: '', images: [] },
    missionSection: { title: '', items: [] },
    valueSection: { title: '', image: defaultImage, items: [] },
  };

  try {
    data = (await axios.get(`${API_STRAPI_URL}${URLS.ABOUT_US}?${query}`)).data
      ?.data;
  } catch (error) {
    return defaultData;
  }
  const safeData = safeParse<AboutUs>(data, defaultData);
  safeData.commitmentSection.items = safeData.commitmentSection.items.map((item) => ({
    ...item,
    icon: safeParse<TImage>(item.icon, defaultImage, true),
  }));

  safeData.developmentSection.images = safeData.developmentSection.images.map((image) =>
    safeParse<TImage>(image, defaultImage,true)
  );

  safeData.valueSection.image = safeParse<TImage>(safeData.valueSection.image, defaultImage,true);
  safeData.valueSection.items = safeData.valueSection.items.map((item) =>
  {
    return {
      ...item,
      icon: safeParse<TImage>(item.icon, defaultImage, true),
    }
  }
  );
  return safeData;
};

export const useAboutUs = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.ABOUT_US],
    queryFn: getAboutUs,
  });
};
