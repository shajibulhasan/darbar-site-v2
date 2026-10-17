import { Link } from 'react-router-dom';

export default function PageHead({ crumb, title, lead }) {
  return (
    <section className="page-head">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">হোম</Link></li>
            <li className="breadcrumb-item"><Link to="/#committees">কমিটি সমূহ</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{crumb}</li>
          </ol>
        </nav>
        <h1>{title}</h1>
        {lead && <p className="lead-line">{lead}</p>}
      </div>
    </section>
  );
}
