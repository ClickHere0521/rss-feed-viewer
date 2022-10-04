import "./index.scss";

function Viewer({ item }) {
  return (
    <div
      className="viewer__body"
      dangerouslySetInnerHTML={{ __html: item?.['content:encoded']?.[0] || item?.description?.[0] || '' }}
    />
  );
}

export default Viewer;
