const FontSpacing = (window) => {
  // Mobile
  // Hero
  let heroTop = "20px";
  let heroBottom = "28px";

  // H1
  let h1Top = "11px";
  let h1Bottom = "13px";

  // H2
  let h2Top = "14px";
  let h2Bottom = "10px";

  // H3
  let h3Top = "11px";
  let h3Bottom = "13px";

  // H4
  let h4Top = "9px";
  let h4Bottom = "7px";

  // H5
  let h5Top = "6px";
  let h5Bottom = "10px";

  // text
  let textTop = "5px";
  let textBottom = "11px";

  // link
  let linkTop = "5px";
  let linkBottom = "3px";

  // legend
  let legendTop = "7px";
  let legendBottom = "9px";

  // menu
  let menuTop = "7px";
  let menuBottom = "9px";

  switch (true) {
    // This need to be over 767px
    // otherwise it never gets read
    case window.width > 1359:
      // Hero
      heroTop = "32px";
      heroBottom = "32px";

      // H1
      h1Top = "18px";
      h1Bottom = "14px";

      // H2
      h2Top = "16px";
      h2Bottom = "16px";

      // H3
      h3Top = "11px";
      h3Bottom = "13px";

      // H4
      h4Top = "7px";
      h4Bottom = "9px";

      // H5
      h5Top = "9px";
      h5Bottom = "7px";

      // text
      textTop = "8px";
      textBottom = "16px";

      // link
      linkTop = "8px";
      linkBottom = "8px";

      // legend
      legendTop = "10px";
      legendBottom = "6px";

      // menu
      menuTop = "6px";
      menuBottom = "10px";
      break;

    case window.width > 767:
      // Hero
      heroTop = "21px";
      heroBottom = "27px";

      // H1
      h1Top = "16px";
      h1Bottom = "16px";

      // H2
      h2Top = "15px";
      h2Bottom = "9px";

      // H3
      h3Top = "13px";
      h3Bottom = "11px";

      // H4
      h4Top = "7px";
      h4Bottom = "9px";

      // H5
      h5Top = "10px";
      h5Bottom = "6px";

      // text
      textTop = "8px";
      textBottom = "16px";

      // link
      linkTop = "8px";
      linkBottom = "8px";

      // legend
      legendTop = "10px";
      legendBottom = "6px";

      // menu
      menuTop = "6px";
      menuBottom = "10px";
      break;

    default:
      break;
  }

  return {
    hero: {
      top: heroTop,
      bottom: heroBottom,
    },
    h1: {
      top: h1Top,
      bottom: h1Bottom,
    },
    h2: {
      top: h2Top,
      bottom: h2Bottom,
    },
    h3: {
      top: h3Top,
      bottom: h3Bottom,
    },
    h4: {
      top: h4Top,
      bottom: h4Bottom,
    },
    h5: {
      top: h5Top,
      bottom: h5Bottom,
    },
    text: {
      top: textTop,
      bottom: textBottom,
    },
    link: {
      top: linkTop,
      bottom: linkBottom,
    },
    legend: {
      top: legendTop,
      bottom: legendBottom,
    },
    menu: {
      top: menuTop,
      bottom: menuBottom,
    },
  };
};

export default FontSpacing;
