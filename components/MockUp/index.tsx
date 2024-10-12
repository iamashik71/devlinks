import Image from "next/image";
import React, { useState } from "react";
import styles from "./styles.module.css";

const MockUp = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className={`${styles.container} shadow-sm`}>
      <div className={styles.phone_container}>
        <Image
          src={"/images/illustration-phone-mockup.svg"}
          width="0"
          height="0"
          alt="phone mockup"
          priority
          className={styles.phone_mockup}
        />
        <div className={styles.linkBoxes}>
          <h1>Hey Links</h1>
        </div>
        {isOpen ? (
          <div className={styles.tooltip}>
            You can Drag and Drop!
            <button className={styles.okButton} onClick={() => null}>
              Got it!
            </button>
            <div className={styles.arrowDown}></div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default MockUp;
