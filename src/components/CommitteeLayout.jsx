import PageHead from './PageHead.jsx';
import CommitteeLinks from './CommitteeLinks.jsx';
import usePageTitle from './usePageTitle.js';

export default function CommitteeLayout({ title, crumb, lead, aside, children }) {
  usePageTitle(title);
  return (
    <>
      <PageHead crumb={crumb} title={title} lead={lead} />
      <section className="page-body">
        <div className="container">
          <div className="row gy-4 gx-lg-5">
            <article className="col-lg-8">{children}</article>
            <aside className="col-lg-4">
              {aside}
              <CommitteeLinks />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
