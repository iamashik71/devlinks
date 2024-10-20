import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import db from "../../utils/firestore";
import { collection, getDocs } from "firebase/firestore";

interface LinkType {
  id: string;
  [key: string]: any;
}

const MockUp = () => {
  const [isOpen, setOpen] = useState(false);
  const [links, setLinks] = useState<LinkType[] | null>(null);

  const platformBgColors: Record<string, string> = {
    GitHub: "bg-gray-800",
    YouTube: "bg-red-600",
    LinkedIn: "bg-blue-700",
    Facebook: "bg-blue-600",
    Twitter: "bg-blue-400",
  };

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
        <div className={`${styles.linkBoxes}`}>
          <div className="flex flex-col gap-4">
            {links?.map((link, index) => (
              <div
                className={`flex items-center py-3 px-2 gap-2 rounded-md ${
                  platformBgColors[link.platform] || "bg-black"
                }`}
                key={index}
              >
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
            <button className={styles.okButton} onClick={() => setOpen(false)}>
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
