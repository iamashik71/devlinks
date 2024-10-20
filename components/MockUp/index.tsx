import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import db from "../../utils/firestore";
import { collection, getDocs } from "firebase/firestore";

interface LinkType {
  id: string;
  [key: string]: any; // Adjust based on the structure of your documents
}

const MockUp = () => {
  const [isOpen, setOpen] = useState(false);
  const [links, setLinks] = useState<LinkType[] | null>(null);

  useEffect(() => {
    const getLinks = async () => {
      const querySnapshot = await getDocs(collection(db, "links"));
      setLinks(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    getLinks();
  }, []);

  console.log("Link from mocup", links);

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
          <div className="p-2 bg-black rounded-md">
            {links?.map((link, index) => (
              <div className="flex items-center space-x-2 pb-1" key={index}>
                <img
                  src={`/icons/icon-link-boxes/icon-${link.platform}-link-box.svg`}
                  alt="Platform Icon"
                />
                <p className="text-white">{link.platform}</p>
              </div>
            ))}
          </div>
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
