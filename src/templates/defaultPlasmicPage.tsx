import React from "react";
import Helmet from "react-helmet";
import {
  cdnComponent,
  cdnRootProvider,
  InitOptions,
  ComponentRenderData,
} from "@cdnapp/loader-gatsby";
import { graphql, PageProps } from "gatsby";
import { initcdnLoaderWithRegistrations } from "../cdn-init";

export const query = graphql`
  query ($path: String) {
    cdnComponents(componentNames: [$path])
    cdnOptions
  }
`;

interface cdnGatsbyPageProps extends PageProps {
  data: {
    cdnOptions: InitOptions
    cdnComponents: ComponentRenderData
  }
}

const cdnGatsbyPage = ({ data, location }: cdnGatsbyPageProps) => {
  const {
    cdnComponents,
    cdnOptions,
  } = data;
  const pageMeta = cdnComponents.entryCompMetas[0];
  const pageMetadata = pageMeta.pageMetadata;
  return (
    <cdnRootProvider
      loader={initcdnLoaderWithRegistrations(cdnOptions)}
      prefetchedData={cdnComponents}
      pageParams={pageMeta.params}
      pageQuery={Object.fromEntries(new URLSearchParams(location.search))}
      Head={Helmet}
    >
      <Helmet>
        {pageMetadata?.title && <title>{pageMetadata.title}</title>}
        {pageMetadata?.title && <meta property="og:title" content={pageMetadata.title} /> }
        {pageMetadata?.description && <meta property="og:description" content={pageMetadata.description} />}
        {pageMetadata?.openGraphImageUrl && <meta property="og:image" content={pageMetadata.openGraphImageUrl} />}
      </Helmet>
      <cdnComponent component={pageMeta.displayName} />
    </cdnRootProvider>
  );
};

export default cdnGatsbyPage;
