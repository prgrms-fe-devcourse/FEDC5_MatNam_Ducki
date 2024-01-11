import { useQuery } from '@tanstack/react-query';

import { searchAll } from '@/services/Search/search';

const searchKeys = {
  all: (query: string) => ['searchAll', query] as const,
};

export const useSearchAll = (query: string) => {
  return useQuery({
    queryKey: searchKeys.all(query),
    queryFn: () => searchAll(query),
    enabled: false,
  });
};
