import { getImg } from "../../utils";
import background from "../../assets/images/background.jpg";
import "./index.scss";

function Headline({ items, selectedItem, onItemSelect }) {
  return (
    <div className="headline__body">
      {items?.map((item, index) => (
        <article
          className={`headline__profile ${
            selectedItem === index ? "headline__selected" : ""
          }`}
          key={item.title}
          onClick={() => onItemSelect(index)}
        >
          <div
            className="headline__picture"
            dangerouslySetInnerHTML={{
              __html:
                getImg(
                  item?.["content:encoded"]?.[0] || item?.description?.[0] || ""
                ) || `<img src=${background}/>`,
            }}
          />
          <span className="headline__title">{item.title}</span>
          <span className="headline__author">{`by ${item["dc:creator"]}`}</span>
        </article>
      ))}
    </div>
  );
}

export default Headline;
