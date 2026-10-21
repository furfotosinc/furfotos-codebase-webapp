export type JournalPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Pet-life photos stored for the journal. The coming-soon page keeps its frames blank. */
export const journalPhotos: JournalPhoto[] = [
  {
    src: "/journal/beach-golden.jpg",
    alt: "A couple on the beach with a golden retriever between them",
    width: 1600,
    height: 1110,
  },
  {
    src: "/journal/chihuahua-sunglasses.jpg",
    alt: "A long-haired chihuahua in round sunglasses sitting on the sand",
    width: 1600,
    height: 1175,
  },
  {
    src: "/journal/family-couch-cat.jpg",
    alt: "A family on a couch with a gray cat in a child's lap",
    width: 1600,
    height: 1104,
  },
  {
    src: "/journal/lab-beach-selfie.jpg",
    alt: "A person on the beach taking a selfie with a yellow Labrador",
    width: 1600,
    height: 1109,
  },
];
