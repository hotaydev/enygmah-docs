import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface ICommunityStatsContext {
    githubStarCount: number;
    githubStarCountText: string;
    loading: boolean;
    refetch: () => Promise<void>;
}

export const CommunityStatsContext = createContext<
    ICommunityStatsContext | undefined
>(undefined);

export const CommunityStatsProvider: FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [githubStarCount, setGithubStarCount] = useState(0);

  const fetchGithubCount = useCallback(async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://api.github.com/repos/hotaydev/enygmah",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const json = await response.json();
      setGithubStarCount(json.watchers ?? 0);
    } catch (error) {
      console.log(error);
      
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGithubCount();
  }, [fetchGithubCount]);

  const githubStarCountText = useMemo(() => {
    return convertStatToText(githubStarCount);
  }, [githubStarCount]);

  const value = {
    githubStarCount,
    githubStarCountText,
    loading,
    refetch: fetchGithubCount,
  };

  return (
    <CommunityStatsContext.Provider value={value}>
      {children}
    </CommunityStatsContext.Provider>
  );
};

export const useCommunityStatsContext = () => {
  const context = useContext(CommunityStatsContext);
  if (context === undefined) {
    throw new Error(
      "useGithubProvider must be used within a GithubProvider",
    );
  }
  return context;
};

export const convertStatToText = (num: number) => {
  const hasIntlSupport =
        typeof Intl == "object" &&
        Intl &&
        typeof Intl.NumberFormat == "function";

  if (!hasIntlSupport) {
    return `${(num / 1000).toFixed(1)}k`;
  }

  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    maximumSignificantDigits: 3,
  });
  return formatter.format(num);
};
