export default function List({ totalCount = 0, edges = {} }) {
  if (totalCount === 0) {
    return (<div>暂无文章</div>);
  }
  return (
    <div>
      <ul>
        {edges.map(({ node: { title, url } }) => (
          <li key={url}>{title}</li>
        ))}
      </ul>
    </div>);
}
