import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import db from "@/utils/firestore"; // Adjust this import based on your Firebase setup
import CustomLink from "@/components/CusomLink";
import { useLinks } from "@/context/LinkContext";

type LinkType = {
  id: string;
  platform: string;
  url: string;
};

export default function CustomizeLinks() {
  // const [links, setLinks] = useState<LinkType[]>([]);
  const { links, setLinks } = useLinks();

  useEffect(() => {
    const fetchLinks = async () => {
      const querySnapshot = await getDocs(collection(db, "links"));
      const fetchedLinks = querySnapshot.docs.map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          } as LinkType)
      );
      setLinks(fetchedLinks);
    };

    fetchLinks();
  }, []);

  console.log("all links fetched", links);

  const addNewLink = async () => {
    const newLink: Omit<LinkType, "id"> = {
      platform: "GitHub",
      url: "",
    };
    const docRef = await addDoc(collection(db, "links"), newLink);
    setLinks([...links, { ...newLink, id: docRef.id }]);
  };

  const removeLink = async (id: string) => {
    await deleteDoc(doc(db, "links", id));
    setLinks(links.filter((link) => link.id !== id));
  };

  const updateLink = async (
    id: string,
    field: "platform" | "url",
    value: string
  ) => {
    const linkRef = doc(db, "links", id);
    await updateDoc(linkRef, { [field]: value });
    setLinks(
      links.map((link) => (link.id === id ? { ...link, [field]: value } : link))
    );
  };

  const saveAllLinks = async () => {
    for (const link of links) {
      const linkRef = doc(db, "links", link.id);
      await updateDoc(linkRef, { platform: link.platform, url: link.url });
    }
    alert("All links saved successfully!");
  };

  return (
    <div className="mx-auto p-6 bg-white rounded-lg shadow w-full h-full">
      <h2 className="text-2xl font-bold mb-4">Customize your links</h2>
      <p className="text-gray-600 mb-6">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>

      <button
        onClick={addNewLink}
        className="w-full mb-4 px-4 py-2 bg-white text-indigo-600 font-medium border border-indigo-600 rounded-md hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        + Add new link
      </button>

      {links.map((link) => (
        <CustomLink
          key={link.id}
          link={link}
          onRemove={() => removeLink(link.id)}
          onChange={(id, field, value) => updateLink(id, field, value)}
        />
      ))}

      {links.length === 0 && (
        <div className="text-center p-4">
          <img
            src="/images/illustration-empty.svg"
            className="mx-auto mb-4"
            alt="Empty illustration"
          />
          <h1 className="text-xl font-semibold text-gray-900">
            Let's get you started
          </h1>
          <p className="text-gray-600">
            Use the “Add new link” button to get started. Once you have more
            than one link, you can reorder and edit them. We’re here to help you
            share your profiles with everyone!
          </p>
        </div>
      )}

      {links.length > 0 && (
        <div className="mt-6 text-right">
          <button
            type="button"
            onClick={saveAllLinks}
            className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}
