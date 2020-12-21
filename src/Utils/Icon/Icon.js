import React from "react";
import IconStyle from "./Icon-style";

const Icon = (props) => {
  const classes = IconStyle();

  return (
    <svg
      width={props.size ? props.size : 24}
      height={props.size ? props.size : 24}
      viewBox='0 0 24 24'
    >
      <path
        className={classes.Icon}
        fill={props.color}
        d={shapes[props.name]}
      ></path>
    </svg>
  );
};

const shapes = {
  leaf:
    "M7.80586 3.31723L5.48863 1L4.34675 4.42561H2.01342L4.13507 10.7906L1.90076 13.0249L6.90074 16.0249L1 21.9256L1.70711 22.6327L7.60785 16.732L10.6079 21.732L12.8422 19.4977L19.2071 21.6193V19.286L22.6327 18.1441L20.3155 15.8269L21.4471 13.5637L16.8304 12.6404L22.6145 7.8203L20.2895 6.65777L21.3943 2.23843L16.975 3.34327L15.8124 1.01821L10.9924 6.8023L10.069 2.18564L7.80586 3.31723ZM8.33672 16.0031L10.8064 20.1192L12.5721 18.3536L18.2071 20.2319V18.5652L20.7815 17.7071L19.0988 16.0243L19.9672 14.2875L14.5838 13.2109L20.7997 8.03093L19.1248 7.19346L20.0199 3.6128L16.4393 4.50796L15.6018 2.83302L10.4219 9.04893L9.34523 3.66559L7.60841 4.534L5.92564 2.85123L5.06751 5.42561H3.40085L5.27919 11.0607L3.51351 12.8263L7.62961 15.296L10.7071 12.2185L11.4142 12.9256L8.33672 16.0031Z",
  link:
    "M14.3254 5.62037C14.1157 5.44066 13.8001 5.46494 13.6204 5.67461C13.4407 5.88427 13.4649 6.19992 13.6746 6.37963L19.6484 11.5H3C2.72386 11.5 2.5 11.7239 2.5 12C2.5 12.2761 2.72386 12.5 3 12.5H19.6484L13.6746 17.6204C13.4649 17.8001 13.4407 18.1157 13.6204 18.3254C13.8001 18.5351 14.1157 18.5593 14.3254 18.3796L21.3254 12.3796L21.7683 12L21.3254 11.6204L14.3254 5.62037Z",
  lock:
    "M9,0.5 C10.4586907,0.5 11.8576372,1.07946262 12.8890873,2.1109127 C13.8560717,3.07789715 14.4258016,4.36787652 14.4932405,5.72727076 L14.5,6 L14.5,10 L18,10 L18,22 L0,22 L0,10 L3.5,10 L3.5,6 C3.5,2.96243388 5.96243388,0.5 9,0.5 Z M9.5,14 L8.5,14 L8.5,17 L9.5,17 L9.5,14 Z M9,1.5 C6.58572667,1.5 4.61551091,3.40123652 4.50489799,5.7881643 L4.5,6 L4.5,10 L13.5,10 L13.5,6 C13.5,4.8065258 13.0258942,3.66193319 12.1819805,2.81801948 C11.3380668,1.97410578 10.1934742,1.5 9,1.5 Z",
  light:
    "M12,1.5 C12.2761,1.5 12.5,1.72386 12.5,2 L12.5,2 L12.5,5.51894 C13.9191,5.62689 15.2108,6.1905 16.2291,7.06379 L16.2291,7.06379 L19.1464,4.14645 C19.3417,3.95118 19.6583,3.95118 19.8536,4.14645 C20.0488,4.34171 20.0488,4.65829 19.8536,4.85355 L19.8536,4.85355 L16.9362,7.77089 C17.8095,8.78924 18.3731,10.0809 18.4811,11.5 L18.4811,11.5 L22,11.5 C22.2761,11.5 22.5,11.7239 22.5,12 C22.5,12.2761 22.2761,12.5 22,12.5 L22,12.5 L18.4811,12.5 C18.3731,13.9191 17.8095,15.2108 16.9362,16.2291 L16.9362,16.2291 L19.8536,19.1464 C20.0488,19.3417 20.0488,19.6583 19.8536,19.8536 C19.6583,20.0488 19.3417,20.0488 19.1464,19.8536 L19.1464,19.8536 L16.2291,16.9362 C15.2108,17.8095 13.9191,18.3731 12.5,18.4811 L12.5,18.4811 L12.5,22 C12.5,22.2761 12.2761,22.5 12,22.5 C11.7239,22.5 11.5,22.2761 11.5,22 L11.5,22 L11.5,18.4811 C10.0809,18.3731 8.78924,17.8095 7.77089,16.9362 L7.77089,16.9362 L4.85355,19.8536 C4.65829,20.0488 4.34171,20.0488 4.14645,19.8536 C3.95118,19.6583 3.95118,19.3417 4.14645,19.1464 L4.14645,19.1464 L7.06379,16.2291 C6.1905,15.2108 5.62689,13.9191 5.51894,12.5 L5.51894,12.5 L2,12.5 C1.72386,12.5 1.5,12.2761 1.5,12 C1.5,11.7239 1.72386,11.5 2,11.5 L2,11.5 L5.51894,11.5 C5.62689,10.0809 6.1905,8.78924 7.06379,7.77089 L7.06379,7.77089 L4.14645,4.85355 C3.95118,4.65829 3.95118,4.34171 4.14645,4.14645 C4.34171,3.95118 4.65829,3.95118 4.85355,4.14645 L4.85355,4.14645 L7.77089,7.06379 C8.78924,6.1905 10.0809,5.62689 11.5,5.51894 L11.5,5.51894 L11.5,2 C11.5,1.72386 11.7239,1.5 12,1.5 Z M12,6.5 C8.96243,6.5 6.5,8.96243 6.5,12 C6.5,15.0376 8.96243,17.5 12,17.5 C15.0376,17.5 17.5,15.0376 17.5,12 C17.5,8.96243 15.0376,6.5 12,6.5 Z",
  dark:
    "M10.3498 3.64271C10.4766 3.7669 10.5281 3.94904 10.4851 4.12127C10.3207 4.77888 10.2143 5.45129 10.2143 6.14286C10.2143 10.381 13.619 13.7857 17.8571 13.7857C18.5615 13.7857 19.2276 13.7045 19.86 13.52C20.0338 13.4693 20.2213 13.5165 20.3504 13.6434C20.4795 13.7702 20.53 13.9569 20.4824 14.1316C19.4817 17.8007 16.1169 20.5 12.1429 20.5C7.381 20.5 3.5 16.619 3.5 11.8571C3.5 7.85352 6.20032 4.51802 9.86844 3.51762C10.0397 3.47091 10.2229 3.51852 10.3498 3.64271ZM9.33321 4.7481C6.50175 5.86713 4.5 8.61499 4.5 11.8571C4.5 16.0667 7.93329 19.5 12.1429 19.5C15.3547 19.5 18.12 17.5038 19.246 14.6801C18.7906 14.7531 18.3273 14.7857 17.8571 14.7857C13.0667 14.7857 9.21429 10.9333 9.21429 6.14286C9.21429 5.6638 9.25875 5.19856 9.33321 4.7481Z",
  contact:
    "M16.9657 5.42975C15.613 3.95416 13.3031 3.90397 11.8877 5.31942L5.85356 11.3536C3.83968 13.3674 3.83968 16.6326 5.85355 18.6464C7.86743 20.6603 11.1326 20.6603 13.1464 18.6465L19.1464 12.6464C19.3417 12.4512 19.6583 12.4512 19.8536 12.6464C20.0488 12.8417 20.0488 13.1583 19.8536 13.3536L13.8536 19.3536C11.4492 21.758 7.55085 21.758 5.14645 19.3536C2.74205 16.9492 2.74205 13.0508 5.14645 10.6464L11.1806 4.61231C12.9986 2.79429 15.9655 2.85875 17.7028 4.75403C19.3669 6.56945 19.2697 9.38344 17.4842 11.0796L11.8626 16.4202C10.8213 17.4094 9.18128 17.3884 8.16568 16.3728C7.13137 15.3385 7.13137 13.6615 8.16568 12.6272L13.1464 7.64645C13.3417 7.45118 13.6583 7.45118 13.8536 7.64645C14.0488 7.84171 14.0488 8.15829 13.8536 8.35355L8.87278 13.3343C8.229 13.9781 8.229 15.0219 8.87278 15.6657C9.50493 16.2978 10.5257 16.3109 11.1739 15.6952L16.7955 10.3546C18.1856 9.03404 18.2613 6.84317 16.9657 5.42975Z",
  smiley:
    "M12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12ZM8.09956 12.8891C8.03833 12.6199 7.77041 12.4512 7.50114 12.5124C7.23187 12.5737 7.06322 12.8416 7.12444 13.1109C7.642 15.3871 9.66569 17.0023 12 17.0023C14.3343 17.0023 16.358 15.3871 16.8756 13.1109C16.9368 12.8416 16.7681 12.5737 16.4989 12.5124C16.2296 12.4512 15.9617 12.6199 15.9004 12.8891C15.4864 14.7101 13.8674 16.0023 12 16.0023C10.1326 16.0023 8.5136 14.7101 8.09956 12.8891ZM9 9C8.44772 9 8 9.44772 8 10C8 10.2761 7.77614 10.5 7.5 10.5C7.22386 10.5 7 10.2761 7 10C7 8.89543 7.89543 8 9 8C10.1046 8 11 8.89543 11 10C11 10.2761 10.7761 10.5 10.5 10.5C10.2239 10.5 10 10.2761 10 10C10 9.44772 9.55228 9 9 9ZM14 10C14 9.44772 14.4477 9 15 9C15.5523 9 16 9.44772 16 10C16 10.2761 16.2239 10.5 16.5 10.5C16.7761 10.5 17 10.2761 17 10C17 8.89543 16.1046 8 15 8C13.8954 8 13 8.89543 13 10C13 10.2761 13.2239 10.5 13.5 10.5C13.7761 10.5 14 10.2761 14 10Z",
  mouse:
    "M8.5 4.27273C8.5 3.56982 9.06982 3 9.77273 3C10.4756 3 11.0455 3.56982 11.0455 4.27273V8.72744C11.0455 8.94355 11.1843 9.1352 11.3897 9.20254L18.1965 11.4348C18.9056 11.6673 19.336 12.3858 19.2063 13.1208L18.0805 19.5002H11.6376C9.66273 19.5002 7.79499 18.6024 6.56149 17.0602L6.46638 16.9412C5.84094 16.1593 5.5 15.1877 5.5 14.187V11.8184C5.5 11.1904 6.00842 10.682 6.63637 10.682H7.5V12.4545C7.5 12.7307 7.72386 12.9545 8 12.9545C8.27614 12.9545 8.5 12.7307 8.5 12.4545V10.182V10V4.27273ZM9.77273 2C8.51754 2 7.5 3.01754 7.5 4.27273V9.68199H6.63637C5.45613 9.68199 4.5 10.6381 4.5 11.8184V14.187C4.5 15.415 4.91833 16.6067 5.68544 17.5659L6.07591 17.2535L5.68544 17.5659L5.78055 17.6848C7.20383 19.4643 9.35891 20.5002 11.6376 20.5002H18.5C18.7426 20.5002 18.9502 20.326 18.9924 20.0871L20.191 13.2945C20.4072 12.0696 19.69 10.8721 18.5081 10.4846L12.0455 8.36521V4.27273C12.0455 3.01754 11.0279 2 9.77273 2ZM12 12.5C12.2761 12.5 12.5 12.7239 12.5 13V16C12.5 16.2761 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.2761 11.5 16V13C11.5 12.7239 11.7239 12.5 12 12.5ZM15.5 13C15.5 12.7239 15.2761 12.5 15 12.5C14.7239 12.5 14.5 12.7239 14.5 13V16C14.5 16.2761 14.7239 16.5 15 16.5C15.2761 16.5 15.5 16.2761 15.5 16V13Z",
  construction:
    "M7 2.5C7.27614 2.5 7.5 2.72386 7.5 3V4.441L7.56638 4.5H14.4285L14.4881 4.43056L14.5691 4.5H16.5V3C16.5 2.72386 16.7239 2.5 17 2.5C17.2761 2.5 17.5 2.72386 17.5 3V4.5H21H21.5V5V13V13.5H21H15.5555L15.5017 13.5606L15.4336 13.5H8.58334L8.51987 13.5762L8.42847 13.5H3H2.5V13V5V4.5H3H6.5V3C6.5 2.72386 6.72386 2.5 7 2.5ZM6.55553 5.5H3.5V7.44038L9.48014 12.4238L9.41667 12.5H14.3086L6.5017 5.56056L6.55553 5.5ZM16.4444 12.5H20.5V11.5593L13.5119 5.56944L13.5714 5.5H8.69138L16.4982 12.4394L16.4444 12.5ZM15.7358 5.5L20.5 9.58364V5.5H17H15.7358ZM7.22847 12.5L3.5 9.39294V12.5H7.22847ZM7 15.5C7.27614 15.5 7.5 15.7239 7.5 16V20.5H16.5V16C16.5 15.7239 16.7239 15.5 17 15.5C17.2761 15.5 17.5 15.7239 17.5 16V20.5H20C20.2761 20.5 20.5 20.7239 20.5 21C20.5 21.2761 20.2761 21.5 20 21.5H17H7H4C3.72386 21.5 3.5 21.2761 3.5 21C3.5 20.7239 3.72386 20.5 4 20.5H6.5V16C6.5 15.7239 6.72386 15.5 7 15.5Z",
  grid:
    "M4 2.5C4.27614 2.5 4.5 2.72386 4.5 3V21C4.5 21.2761 4.27614 21.5 4 21.5C3.72386 21.5 3.5 21.2761 3.5 21V3C3.5 2.72386 3.72386 2.5 4 2.5ZM8 2.5C8.27614 2.5 8.5 2.72386 8.5 3V21C8.5 21.2761 8.27614 21.5 8 21.5C7.72386 21.5 7.5 21.2761 7.5 21V3C7.5 2.72386 7.72386 2.5 8 2.5ZM12.5 3C12.5 2.72386 12.2761 2.5 12 2.5C11.7239 2.5 11.5 2.72386 11.5 3V21C11.5 21.2761 11.7239 21.5 12 21.5C12.2761 21.5 12.5 21.2761 12.5 21V3ZM16 2.5C16.2761 2.5 16.5 2.72386 16.5 3V21C16.5 21.2761 16.2761 21.5 16 21.5C15.7239 21.5 15.5 21.2761 15.5 21V3C15.5 2.72386 15.7239 2.5 16 2.5ZM20.5 3C20.5 2.72386 20.2761 2.5 20 2.5C19.7239 2.5 19.5 2.72386 19.5 3V21C19.5 21.2761 19.7239 21.5 20 21.5C20.2761 21.5 20.5 21.2761 20.5 21V3Z",
  hash:
    "M9.48809 3.10845C9.548 2.83888 9.37803 2.57179 9.10847 2.51189C8.8389 2.45198 8.57181 2.62195 8.51191 2.89152L7.4878 7.49998H4C3.72386 7.49998 3.5 7.72384 3.5 7.99998C3.5 8.27612 3.72386 8.49998 4 8.49998H7.26558L5.71003 15.5H3C2.72386 15.5 2.5 15.7238 2.5 16C2.5 16.2761 2.72386 16.5 3 16.5H5.4878L4.51191 20.8915C4.452 21.1611 4.62197 21.4282 4.89153 21.4881C5.1611 21.548 5.42819 21.378 5.48809 21.1084L6.5122 16.5H15.4878L14.5119 20.8915C14.452 21.1611 14.622 21.4282 14.8915 21.4881C15.1611 21.548 15.4282 21.378 15.4881 21.1084L16.5122 16.5H20C20.2761 16.5 20.5 16.2761 20.5 16C20.5 15.7238 20.2761 15.5 20 15.5H16.7344L18.29 8.49998H21C21.2761 8.49998 21.5 8.27612 21.5 7.99998C21.5 7.72384 21.2761 7.49998 21 7.49998H18.5122L19.4881 3.10845C19.548 2.83888 19.378 2.57179 19.1085 2.51189C18.8389 2.45198 18.5718 2.62195 18.5119 2.89152L17.4878 7.49998H8.5122L9.48809 3.10845ZM15.71 15.5L17.2656 8.49998H8.28997L6.73442 15.5H15.71Z",
  guidelines:
    "M12,13 L17,18 L16.2929,18.7071 L12.7071,22.2929 L12,23 L7.70717,18.7071 L7.00006,18 L11.2929,13.7071 L12,13 Z M12,14.4142 L8.41427,18 L12,21.5858 L15.5858,18 L12,14.4142 Z M6.00003,7.00003 L11,12 L10.2929,12.7071 L6.70714,16.2929 L6.00003,17 L1.70717,12.7071 L1.00006,12 L5.29292,7.70714 L6.00003,7.00003 Z M18,7.00003 L23,12 L22.2929,12.7071 L18.7071,16.2929 L18,17 L13.7072,12.7071 L13.0001,12 L17.2929,7.70714 L18,7.00003 Z M6.00003,8.41424 L2.41427,12 L6.00003,15.5858 L9.58579,12 L6.00003,8.41424 Z M18,8.41424 L14.4143,12 L18,15.5858 L21.5858,12 L18,8.41424 Z M12,1.00003 L12.7071,1.70714 L17,6 L16.2929,6.70711 L12.7071,10.2929 L12,11 L7.70717,6.70711 L7.00006,6 L12,1.00003 Z M12,2.41424 L8.41427,6 L12,9.58576 L15.5858,6 L12,2.41424 Z",
  loading:
    "M12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5ZM3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C7.30558 20.5 3.5 16.6944 3.5 12ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5ZM6.5 12C6.5 8.96243 8.96243 6.5 12 6.5C15.0376 6.5 17.5 8.96243 17.5 12C17.5 15.0376 15.0376 17.5 12 17.5C8.96243 17.5 6.5 15.0376 6.5 12ZM12 11.5C11.7239 11.5 11.5 11.7239 11.5 12C11.5 12.2761 11.7239 12.5 12 12.5C12.2761 12.5 12.5 12.2761 12.5 12C12.5 11.7239 12.2761 11.5 12 11.5ZM10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12Z",
  stop:
    "M12.5859778,1.5 C13.5515691,1.5 14.356063,2.18653773 14.560729,3.10273916 L14.5892108,3.25748758 L14.593,3.291 L14.6868048,3.23983251 C14.8463013,3.16009401 15.0183151,3.10218021 15.1991361,3.06995809 L15.3827554,3.04644308 L15.5333243,3.04054054 C16.5002734,3.04054054 17.3048622,3.76796774 17.4367488,4.72294944 L17.4519083,4.87555418 L17.54,6.331 C17.6951887,6.24658797 17.860892,6.18594428 18.035177,6.15230066 L18.212251,6.12777675 L18.3576976,6.12162162 C19.1433425,6.12162162 19.819929,6.6602891 20.019916,7.4167716 L20.0517386,7.56108625 L20.1071139,7.87281917 C20.5889698,10.5867048 20.6276537,13.362198 20.2228479,16.0863064 L20.1293156,16.6692163 L19.3683056,21.084919 C19.3321377,21.2947801 19.1683482,21.4551807 18.9649223,21.4920017 L18.8755696,21.5 L13.3588237,21.5 L12.8986234,21.4830991 C12.5433665,21.4623133 12.148594,21.4250015 11.7239331,21.3670262 C10.5094756,21.201227 9.29403098,20.9025457 8.15409514,20.4356692 C4.7177887,19.0282712 1.33212429,15.176482 2.92500964,13.0018402 C3.39115167,12.3654487 3.9898525,12.1400897 4.6435311,12.3074403 C4.99984567,12.3986616 5.31039765,12.5717631 5.73843989,12.8848758 L5.9295558,13.0278086 L6.25883283,13.2768934 C6.52976265,13.4791821 6.61202354,13.5302554 6.69688416,13.560318 C6.7534579,13.5803597 6.82892689,13.3260105 6.92329112,12.7972705 C7.13187542,11.5723636 7.34936053,9.65282848 7.5573396,7.407602 L7.59621978,6.98289541 L7.74062114,5.31895253 C7.8235656,4.32407229 8.63984242,3.55405405 9.62509019,3.55405405 C9.85706362,3.55405405 10.0788257,3.59656281 10.2834916,3.6742061 L10.433678,3.73891108 L10.553,3.802 L10.5617269,3.50569105 C10.5864922,2.57372887 11.2195733,1.78940212 12.0982636,1.56338053 L12.2558024,1.52937351 L12.4179973,1.50745913 L12.5859778,1.5 Z M12.6098524,2.49942968 L12.489689,2.50459708 C12.0179916,2.54991516 11.6383561,2.92711394 11.5714521,3.40972525 L11.561369,3.53244311 L11.505,5.367 L11.5083117,9.52298833 C11.4928696,10.102055 10.6970211,10.178406 10.5354236,9.67678611 L10.5129021,9.57594091 L10.505378,5.38673421 C10.4711052,4.99437923 10.198107,4.67415632 9.83958623,4.58129747 L9.72961752,4.56041597 L9.62509019,4.55405405 C9.16540185,4.55405405 8.77734145,4.92012299 8.73716378,5.40203542 C8.48595113,8.41522593 8.2131457,11.0792149 7.94693212,12.7360965 L7.90705305,12.9769932 L7.83127133,13.3931526 C7.66370749,14.2509865 7.24505983,14.7080853 6.58444546,14.5766181 C6.35573419,14.5311028 6.24055133,14.4922784 5.9697084,14.3044322 L5.84331784,14.2143489 L5.17043796,13.7085759 C4.83006789,13.4586323 4.60194737,13.3290456 4.3955164,13.2761965 C4.14388665,13.2117759 3.96014058,13.2809404 3.73174309,13.5927557 C2.70305668,14.9971408 5.6220428,18.3180013 8.53310414,19.5102762 C9.58732987,19.9420489 10.7227712,20.2210703 11.8591997,20.376217 C12.257349,20.4305728 12.6266144,20.4654739 12.9570326,20.4848063 C13.113543,20.4939636 13.2326744,20.4981932 13.3093535,20.4995187 L13.3588237,20.5 L13.4947383,20.5 L13.4955529,20.4674584 C13.4322923,16.8755367 12.6732479,16.0950166 9.89341646,15.4885079 C9.62362101,15.4296434 9.45262766,15.1632119 9.51149212,14.8934165 C9.56381609,14.6535983 9.78014364,14.491846 10.0170564,14.5002041 L10.1065835,14.5114921 L10.532151,14.6102285 C13.4377994,15.3285532 14.422148,16.5653299 14.4955019,20.4997903 L18.454,20.5 L19.1438451,16.4993695 C19.5590568,14.0903915 19.6111768,11.6326483 19.30045,9.21170906 L19.2152091,8.60729051 L19.1225203,8.04767753 L19.0671504,7.73597487 C19.0035718,7.37801841 18.7035251,7.12162162 18.3576976,7.12162162 C18.0038014,7.12162162 17.7050568,7.38898156 17.6468469,7.7269424 L17.6370744,7.82071614 L17.8248029,11.4997148 C17.8294011,12.112757 16.9693773,12.1762197 16.8405593,11.6355567 L16.8257419,11.5338633 L16.4537618,4.93641195 C16.4228753,4.43034422 16.0176312,4.04054054 15.5333243,4.04054054 C15.0796663,4.04054054 14.6733391,4.42989189 14.6176069,4.89072831 L14.6111073,4.99819946 L14.6111073,10.5 C14.6111073,11.1296296 13.719132,11.1646091 13.6200236,10.6049383 L13.6111073,10.5 L13.6111073,3.56154324 C13.6111073,2.9726433 13.1494966,2.5 12.6098524,2.49942968 Z",
  peace:
    "M13.9497 3.39682C14.1149 2.6948 14.9553 2.40458 15.5185 2.85511C15.7928 3.07453 15.9289 3.42377 15.8755 3.77093L15.0058 9.42398C14.9715 9.64696 15.0908 9.86529 15.2969 9.95691L18.3679 11.3218C18.9976 11.6016 19.3556 12.2745 19.2358 12.9532L18.0805 19.5002H11.6376C9.66272 19.5002 7.79498 18.6024 6.56147 17.0602L6.46636 16.9412C6.18785 16.593 5.97705 16.0504 5.88367 15.4907C5.78762 14.915 5.83578 14.4464 5.9472 14.2236C6.41777 13.2825 7.00694 12.5752 7.47854 12.1036L7.49998 12.0822V14.4546C7.49998 14.7307 7.72384 14.9546 7.99998 14.9546C8.27613 14.9546 8.49998 14.7307 8.49998 14.4546V11V10V4.3242C8.49998 3.80449 8.87572 3.36095 9.38836 3.27551C10.0064 3.17251 10.579 3.62353 10.6236 4.24845L10.982 9.26613C11.0115 9.67963 11.3556 10 11.7702 10C12.1368 10 12.4553 9.74775 12.5393 9.39082L13.9497 3.39682ZM7.49998 10V4.3242C7.49998 3.31565 8.22913 2.45492 9.22396 2.28911C10.4232 2.08923 11.5344 2.96448 11.6211 4.17721L11.8813 7.8212L12.9763 3.16778C13.3097 1.75062 15.0063 1.16477 16.1432 2.07424C16.6969 2.51717 16.9717 3.22218 16.8639 3.92298L16.0523 9.19831L18.774 10.408C19.8235 10.8744 20.4202 11.9959 20.2206 13.1269L18.9924 20.0871C18.9502 20.326 18.7426 20.5002 18.5 20.5002H11.6376C9.3589 20.5002 7.20381 19.4643 5.78053 17.6848L5.68542 17.5658C5.26767 17.0435 5.00871 16.323 4.89731 15.6553C4.78858 15.0037 4.80059 14.2808 5.05277 13.7764C5.5822 12.7175 6.24302 11.9249 6.77143 11.3965C7.03604 11.1318 7.26882 10.9321 7.43764 10.7971C7.4595 10.7796 7.48031 10.7632 7.49998 10.7478V10ZM12 12.5C12.2761 12.5 12.5 12.7239 12.5 13V16C12.5 16.2761 12.2761 16.5 12 16.5C11.7238 16.5 11.5 16.2761 11.5 16V13C11.5 12.7239 11.7238 12.5 12 12.5ZM15.5 13C15.5 12.7239 15.2761 12.5 15 12.5C14.7238 12.5 14.5 12.7239 14.5 13V16C14.5 16.2761 14.7238 16.5 15 16.5C15.2761 16.5 15.5 16.2761 15.5 16V13Z",
  menu:
    "M20 8.5C20.2761 8.5 20.5 8.27614 20.5 8C20.5 7.72386 20.2761 7.5 20 7.5L4 7.5C3.72386 7.5 3.5 7.72386 3.5 8C3.5 8.27614 3.72386 8.5 4 8.5L20 8.5ZM20 16.5C20.2761 16.5 20.5 16.2761 20.5 16C20.5 15.7239 20.2761 15.5 20 15.5L4 15.5C3.72386 15.5 3.5 15.7239 3.5 16C3.5 16.2761 3.72386 16.5 4 16.5L20 16.5Z",
  cross:
    "M6.69672 5.98959C6.50146 5.79432 6.18488 5.79432 5.98962 5.98959C5.79435 6.18485 5.79435 6.50143 5.98962 6.69669L11.2929 12L5.98959 17.3033C5.79432 17.4986 5.79432 17.8151 5.98959 18.0104C6.18485 18.2057 6.50143 18.2057 6.69669 18.0104L12 12.7071L17.3033 18.0104C17.4986 18.2057 17.8152 18.2057 18.0104 18.0104C18.2057 17.8151 18.2057 17.4986 18.0104 17.3033L12.7071 12L18.0104 6.6967C18.2057 6.50143 18.2057 6.18485 18.0104 5.98959C17.8151 5.79433 17.4986 5.79433 17.3033 5.98959L12 11.2929L6.69672 5.98959Z",
};

export default Icon;
