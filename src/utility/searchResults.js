// TODO(#36): Needs to be fixed. Unsure how to integrate Lume 'search' plugin with JSX
// More info can be found here: https://lume.land/docs/core/searching/#searching-pages
// This file is a placeholder for the search functionality. This does not work at all.

// Import Lume's site API, assuming Lume exposes such functionality.
import site from "../../_config.ts";

// Function to perform the search and return results.
function getBlogSearchResults() {
  const searchResults = site.searcher.pages({ type: "blog" });
  return searchResults.map((page) => ({
    url: page.data.url,
    title: page.data.title,
    summary: page.data.description,
  }));
}

// Export the search results.
export const blogSearchResults = getBlogSearchResults();
