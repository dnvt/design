export function privacy(classes, props) {
  let cardPrivacyClass;
  // Switch controller
  switch (true) {
    case props.status === "stop":
      cardPrivacyClass = classes.PrivateCard;
      break;
    case props.status === "construction":
      cardPrivacyClass = classes.PrivateCard;
      break;
    default:
      cardPrivacyClass = classes.Card;
      break;
  }
  return cardPrivacyClass;
}
