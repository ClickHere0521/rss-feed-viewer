import axios from "axios";
import { useEffect, useState } from "react";
import { parseString } from "xml2js";

import { CorsProxy, FeedUrls } from "../const";

const useFetchFeeds = (category) => {
  const [feed, setFeed] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = FeedUrls[category]?.url;

    if (url) {
      setIsLoading(true);
      axios
        .get(`${CorsProxy}${url}`)
        .then((res) =>
          parseString(res.data, (err, res) => {
            if (err) {
              setError(err);
            } else {
              setFeed(res.rss.channel[0]);
            }
          })
        )
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    }
  }, [category]);

  return [feed, error, isLoading];
};

export default useFetchFeeds;
