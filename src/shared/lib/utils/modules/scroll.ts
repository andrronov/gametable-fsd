export const setScrollLock = (value: boolean) => {
  const doc = document.documentElement;
  const attribute = "data-lock-scroll";

  if (value && !doc.hasAttribute(attribute)) {
    doc.setAttribute(attribute, "true");
  } else {
    doc.removeAttribute(attribute);
  }
};
