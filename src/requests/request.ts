import api from 'src/utils/axios';

export default async (url: string, config: Record<string, unknown>) => {
  try {
    const { data, status } = await api.get<Record<string, unknown>>(
      url,
      config,
    );

    if (!data) {
      throw new Error('No data returned! Status:' + status);
    }

    return data;
  } catch (error) {
    console.error((error as Error).message);
  }
};
