import { FeedUrls } from "../../const";
import "./index.scss";

function Feed({ onSelect }) {
  return (
    <div className="feed__body">
      {Object.keys(FeedUrls).map((feedKey) => (
        <button key={feedKey} onClick={() => onSelect(feedKey)}>
          {FeedUrls[feedKey].title}
        </button>
      ))}
    </div>
  );
}

export default Feed;
