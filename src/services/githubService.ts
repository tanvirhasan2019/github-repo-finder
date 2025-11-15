export interface Repository {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
}

export interface SearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Repository[];
}

export const searchRepositories = async (
  query: string,
  page: number = 1,
  perPage: number = 10
): Promise<SearchResponse> => {
  const url = `https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=${perPage}`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || `Error: ${response.status}`);
  }

  return response.json();
};
