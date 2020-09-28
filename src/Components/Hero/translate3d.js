export function translation(sizeRef, window) {
  // Lefts

  const transLeft8 = (x, y) =>
    `translate3d(${
      -(sizeRef[1] * 0.0003) * x - sizeRef[1] * 0.5 + (window.width * 7.5) / 16
    }px,${-y / 8}px,0)`;

  const transLeft7 = (x, y) =>
    `translate3d(${
      -(sizeRef[1] * 0.0003) * x - sizeRef[1] * 0.5 + (window.width * 6.5) / 16
    }px,${-y / 8}px,0)`;

  const transLeft6 = (x, y) =>
    `translate3d(${
      -(sizeRef[1] * 0.0003) * x - sizeRef[1] * 0.5 + (window.width * 5.5) / 16
    }px,${-y / 8}px,0)`;

  const transLeft5 = (x, y) =>
    `translate3d(${
      -(sizeRef[1] * 0.0003) * x - sizeRef[1] * 0.5 + (window.width * 4.5) / 16
    }px,${-y / 8}px,0)`;

  const transLeft4 = (x, y) =>
    `translate3d(${
      -(sizeRef[1] * 0.0003) * x - sizeRef[1] * 0.5 + (window.width * 3.5) / 16
    }px,${-y / 8}px,0)`;

  const transLeft3 = (x, y) =>
    `translate3d(${
      -(sizeRef[1] * 0.0003) * x - sizeRef[1] * 0.5 + (window.width * 2.5) / 16
    }px,${-y / 8}px,0)`;

  const transLeft2 = (x, y) =>
    `translate3d(${
      -(sizeRef[1] * 0.0003) * x - sizeRef[1] * 0.5 + (window.width * 1.5) / 16
    }px,${-y / 8}px,0)`;

  const transLeft = (x, y) =>
    `translate3d(${
      -(sizeRef[1] * 0.0003) * x - sizeRef[1] * 0.5 + (window.width * 0.5) / 16
    }px,${-y / 8}px,0)`;

  // Rights
  const transRight = (x, y) =>
    `translate3d(${
      -(sizeRef[1] * 0.0003) * x - sizeRef[1] * 0.5 - (window.width * 0.5) / 16
    }px,${-y / 8}px,0)`;

  const transRight2 = (x, y) =>
    `translate3d(${
      -(sizeRef[1] * 0.0003) * x - sizeRef[1] * 0.5 - (window.width * 1.5) / 16
    }px,${-y / 8}px,0)`;

  const transRight3 = (x, y) =>
    `translate3d(${
      -(sizeRef[1] * 0.0003) * x - sizeRef[1] * 0.5 - (window.width * 2.5) / 16
    }px,${-y / 8}px,0)`;

  const transRight4 = (x, y) =>
    `translate3d(${
      -(sizeRef[1] * 0.0003) * x - sizeRef[1] * 0.5 - (window.width * 3.5) / 16
    }px,${-y / 8}px,0)`;

  const transRight5 = (x, y) =>
    `translate3d(${
      -(sizeRef[1] * 0.0003) * x - sizeRef[1] * 0.5 - (window.width * 4.5) / 16
    }px,${-y / 8}px,0)`;

  const transRight6 = (x, y) =>
    `translate3d(${
      -(sizeRef[1] * 0.0003) * x - sizeRef[1] * 0.5 - (window.width * 5.5) / 16
    }px,${-y / 8}px,0)`;

  const transRight7 = (x, y) =>
    `translate3d(${
      -(sizeRef[1] * 0.0003) * x - sizeRef[1] * 0.5 - (window.width * 6.5) / 16
    }px,${-y / 8}px,0)`;

  const transRight8 = (x, y) =>
    `translate3d(${
      -(sizeRef[1] * 0.0003) * x - sizeRef[1] * 0.5 - (window.width * 7.5) / 16
    }px,${-y / 8}px,0)`;

  // All the values
  return {
    transRight,
    transLeft,
    transRight2,
    transLeft2,
    transRight3,
    transLeft3,
    transRight4,
    transLeft4,
    transRight5,
    transLeft5,
    transRight6,
    transLeft6,
    transRight7,
    transLeft7,
    transRight8,
    transLeft8,
  };
}
