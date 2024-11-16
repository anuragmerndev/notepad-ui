import { INotesCard, INotesDetail, ISideBarData } from "../types/components";
import { IconsData } from "./IconsData";

export const notesData: INotesCard[] = [
  {
    id: 1,
    title: "React Performance Optimization",
    tags: [
      {
        id: 1,
        label: "Dev",
      },
      {
        id: 2,
        label: "React",
      },
    ],
    created_date: "29 Oct 2024",
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    tags: [
      {
        id: 3,
        label: "Dev",
      },
      {
        id: 4,
        label: "TypeScript",
      },
    ],
    created_date: "30 Oct 2024",
  },
  {
    id: 3,
    title: "Understanding JavaScript Closures",
    tags: [
      {
        id: 5,
        label: "JavaScript",
      },
      {
        id: 6,
        label: "Advanced",
      },
    ],
    created_date: "31 Oct 2024",
  },
  {
    id: 4,
    title: "CSS Grid Layout Techniques",
    tags: [
      {
        id: 7,
        label: "CSS",
      },
      {
        id: 8,
        label: "Design",
      },
    ],
    created_date: "1 Nov 2024",
  },
  {
    id: 5,
    title: "Node.js Event Loop Explained",
    tags: [
      {
        id: 9,
        label: "Node.js",
      },
      {
        id: 10,
        label: "Backend",
      },
    ],
    created_date: "2 Nov 2024",
  },
  {
    id: 6,
    title: "GraphQL vs REST: Pros and Cons",
    tags: [
      {
        id: 11,
        label: "API",
      },
      {
        id: 12,
        label: "GraphQL",
      },
    ],
    created_date: "3 Nov 2024",
  },
];

export const tagListData: ISideBarData[] = [
  {
    id: 1,
    label: "Dev",
    icon: <IconsData.tag />,
  },
  {
    id: 2,
    label: "Design",
    icon: <IconsData.tag />,
  },
  {
    id: 3,
    label: "Frontend",
    icon: <IconsData.tag />,
  },
  {
    id: 4,
    label: "Backend",
    icon: <IconsData.tag />,
  },
  {
    id: 5,
    label: "API",
    icon: <IconsData.tag />,
  },
  {
    id: 6,
    label: "Database",
    icon: <IconsData.tag />,
  },
  {
    id: 7,
    label: "Testing",
    icon: <IconsData.tag />,
  },
  {
    id: 8,
    label: "Deployment",
    icon: <IconsData.tag />,
  },
];

export const notesDetailedData: INotesDetail = {
  body: "hello this is a new task",
  id: "1",
  title: "React Performance Optimization",
  tags: [
    {
      id: "1",
      label: "Dev",
    },
    {
      id: "2",
      label: "React",
    },
  ],
  created_date: "29 Oct 2024",
};
