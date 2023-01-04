import React from "react";
import classNames from "classnames";
import "./model.css";

const FemaleBack = ({ handleAddOrDeleteKadin, selectedKadinAreas }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${require("../../assets/images/model_kadin_arka.png")}`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "565px",
      }}
      className="female_body"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={263}
        height={250 * 2.28}
        viewBox="0 0 599 1370"
        fill="none"
      >
        <path
          d="M367.998 257.414C343.29 253.356 324.1 251.306 329.477 213.29C329.552 212.761 332.86 205.592 335.065 200.249C318.383 214.123 261.452 213.898 246.577 199C249.056 206.635 252.512 212.355 253.21 214.333C254.21 217.166 254.311 238.09 252.377 241.666C247.613 250.476 231.927 255.738 216.241 258.624C241.596 262.669 346.553 262.398 367.998 257.414Z"
          stroke="#696868"
          strokeWidth="4"
          className={classNames("path", {
            "fill-selected": selectedKadinAreas.includes("Ense"),
          })}
          onClick={() => handleAddOrDeleteKadin("Ense")}
        />
        <path
          d="M395.768 353.2C396.81 346.604 400.331 338.087 402.59 328.792C404.274 321.866 405.259 314.509 403.992 307.188C402.781 300.189 395.409 274.1 376.074 258.829C373.335 258.304 370.635 257.847 367.998 257.414C346.553 262.398 241.596 262.669 216.24 258.625C213.286 259.168 210.335 259.625 207.454 260.008C186.548 274.74 178.916 301.164 178.815 312.971C178.763 319.047 179.532 324.438 180.556 329.17C182.206 336.793 184.525 342.694 185.179 346.915C186.114 352.936 189.278 359.42 188.526 377.225C189.221 376.463 189.887 377.151 190.125 379C190.459 381.583 190.539 387.646 190.709 393.167C191.543 420.334 198.959 455.584 201.209 467.584C202.073 472.191 203.343 480.194 204.621 489.291C217.131 492.884 241.605 495.743 268.675 496.345C277.028 496.531 285.625 494.674 294.195 494.632C302.824 494.59 311.423 496.361 319.708 496.09C344.647 495.273 366.738 492.398 378.312 488.986C379.221 481.611 380.071 475.227 380.46 473.834C381.808 469.012 388.082 432.38 388.96 428.584C391.314 418.404 391.462 401.478 392.21 398.584C392.959 395.691 392.912 376.915 393.96 376.834C394.045 376.828 394.259 377.183 394.578 377.833C394.281 370.042 394.384 361.948 395.768 353.2Z"
          stroke="#696868"
          strokeWidth="4"
          className={classNames("path", {
            "fill-selected": selectedKadinAreas.includes("Sırt"),
          })}
          onClick={() => handleAddOrDeleteKadin("Sırt")}
        />
        <path
          d="M294.194 494.632C285.625 494.674 277.027 496.531 268.674 496.345C241.605 495.743 217.13 492.884 204.62 489.291C206.671 503.886 208.746 521.303 209.208 532.084C209.958 549.584 206.208 558.084 200.458 571.334C198.124 576.711 193.937 586.866 189.352 598.839C201.931 592.166 228.996 587.272 248.29 587.272C274.808 587.272 276.155 597.185 294.563 597.185C311.624 597.185 317.91 587.5 340.832 587.38C360.092 587.28 384.905 594.983 395.2 603.071C392.195 594.265 389.323 585.404 386.375 579.167C382.042 570 374.624 551.667 373.708 547.584C372.669 542.951 374.608 519.745 375.208 515.084C375.562 512.331 376.997 499.627 378.31 488.986C366.737 492.398 344.646 495.273 319.706 496.09C311.422 496.361 302.823 494.589 294.194 494.632Z"
          stroke="#696868"
          strokeWidth="4"
          className={classNames("path", {
            "fill-selected": selectedKadinAreas.includes("Bel"),
          })}
          onClick={() => handleAddOrDeleteKadin("Bel")}
        />
        <path
          d="M294.564 597.185C276.156 597.185 274.808 587.272 248.291 587.272C228.996 587.272 201.932 592.167 189.353 598.839C182.64 616.367 175.072 637.792 171.209 653.834C165.478 677.642 164.218 700.47 164 717.535C193.158 756.785 242.172 776.998 280.954 741.535C281.162 740.43 281.675 739.863 282.626 739.335C284.126 738.501 287.876 732.419 288.876 730.585C289.876 728.751 288.376 726.335 291.543 726.335C294.709 726.335 293.709 728.502 294.626 730.752C295.543 733.002 299.876 737.585 301.376 740.002C301.62 740.396 301.795 740.702 301.926 740.959C340.344 776.78 389.015 757.464 418.447 718.928C417.892 700.248 415.418 682.46 413.209 668.834C410.209 650.334 404.209 627.167 399.543 615.167C398.052 611.332 396.611 607.208 395.201 603.071C384.906 594.982 360.093 587.279 340.833 587.38C317.911 587.5 311.625 597.185 294.564 597.185Z"
          stroke="#696868"
          strokeWidth="4"
          className={classNames("path", {
            "fill-selected": selectedKadinAreas.includes("Popo"),
          })}
          onClick={() => handleAddOrDeleteKadin("Popo")}
        />
      </svg>
    </div>
  );
};

export default FemaleBack;
