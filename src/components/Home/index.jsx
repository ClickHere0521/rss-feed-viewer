import { useEffect, useState } from "react";
import { BsBookmarkCheckFill } from "react-icons/bs";

import useFetchFeeds from "../../service/parser";
import Feed from "../Feed";
import Headline from "../Headline";
import Viewer from "../Viewer";
import "./index.scss";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedItem, setSelectedItem] = useState();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [feed, error, isLoading] = useFetchFeeds(selectedCategory);

  useEffect(() => {
    const bookmarkState = JSON.parse(window.localStorage.getItem("bookmark"));
    if (bookmarkState) {
      setIsBookmarked(true);
      setSelectedCategory(bookmarkState?.selectedCategory);
      setSelectedItem(bookmarkState?.selectedItem);
    }
  }, []);

  const handleBookmark = () => {
    if (!isBookmarked) {
      console.log(selectedCategory, selectedItem);
      window.localStorage.setItem(
        "bookmark",
        JSON.stringify({
          selectedCategory,
          selectedItem,
        })
      );
    } else {
      window.localStorage.removeItem("bookmark");
    }
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="home__body">
      {selectedCategory && selectedItem !== undefined ? (
        <BsBookmarkCheckFill
          className={`home__bookmark home__bookmark_${
            isBookmarked ? "checked" : "unchecked"
          }`}
          onClick={handleBookmark}
        />
      ) : null}
      <Feed
        onSelect={(category) => {
          setSelectedCategory(category);
          setSelectedItem(0);
        }}
      />
      {isLoading ? (
        <div className="home__loader" />
      ) : error ? (
        <div className="home__error">
          Error occured while fetching the data.
        </div>
      ) : (
        <div className="home__feed">
          <Headline
            items={feed?.item}
            selectedItem={selectedItem}
            onItemSelect={(guid) => setSelectedItem(guid)}
          />
          <Viewer item={feed?.item?.[selectedItem]} />
        </div>
      )}
    </div>
  );
}

export default Home;
