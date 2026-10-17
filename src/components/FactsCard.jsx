export default function FactsCard({ rows }) {
  return (
    <div className="side-card">
      <h3>এক নজরে</h3>
      <dl className="facts">
        {rows.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
