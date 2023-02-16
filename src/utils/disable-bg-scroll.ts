let scrollPosition: number;

export const disableBgScroll = (control: boolean) => {
  const body = document.querySelector("body");

  if (body) {
    if (body.style.position === "static") {
      scrollPosition = window.pageYOffset;
    }

    const hiddenOrUnset = !control ? "hidden" : "unset";

    body.style.overflow = hiddenOrUnset;

    if (body.style.position === "fixed") {
      body.style.top = `-${scrollPosition}px`;
    }

    window.scrollTo(0, scrollPosition);
  }
};
