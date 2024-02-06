export function url(page) {
  return (
    page.src.path + ".html" // this seems to be necessary even with the new get date from folders functionality
  );
}
