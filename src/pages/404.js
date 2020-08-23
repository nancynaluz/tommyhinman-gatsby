import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const browser = typeof window !== "undefined" && window;

const NotFoundPage = () => {
  return (
    browser && (
      <Layout>
        <SEO title="404: Not found" />
        <h3>Not Found!</h3>
        <p>You hit a route that doesn&#39;t exist!</p>
      </Layout>
    )
  );
}

export default NotFoundPage
