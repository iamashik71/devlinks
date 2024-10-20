import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import db from "../../utils/firestore";
import { collection, getDocs } from "firebase/firestore";
import { useLinks } from "@/context/LinkContext";

type LinkType = {
  id: string;
  platform: string;
  url: string;
};

const MockUp = () => {
  const [isOpen, setOpen] = useState(false);
  const { links, setLinks } = useLinks();

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

      const fetchedLinks: LinkType[] = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          platform: data.platform || "",
          url: data.url || "",
        };
      });

      setLinks(fetchedLinks);
    };

    getLinks();
  }, []);

  console.log("Link from mocup", links);

  return (
    <section className={`${styles.container} shadow`}>
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
