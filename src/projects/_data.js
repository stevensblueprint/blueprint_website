export function url(page) {
  return (
    page.src.path + ".html" // without this, markdown folders are compiled to jsx but not given extension
  );
}
