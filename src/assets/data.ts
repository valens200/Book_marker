import { data } from "../types/appTypes";


export const navButtons = [{name:"Login"}, {name:"Get started"}]
export const MenuItems = [{name:"Delete category"}, {name:"Edit category"}, {name:"more.."}]
export const formData: data[] = [
  {
    name: "Title",
    type: "text",
  },
  {
    name: "Link",
    type: "text",
  },
  {
    name: "Description",
    type: "text",
  },
  {
    name: "image",
    type: "file",
  },
];
export const formData2: data[] = [
  {
    name: "Title",
    type: "description",
  },
  {
    name: "Description",
    type: "text",
  },
  {
    name: "image",
    type: "file",
  },
];

export const inputsData: data[] = [
  {
    name: "Create",
    type: "submit",
  },
  {
    name: "Create Category",
    type: "button",
  },
];

export const inputsData2: data[] = [
    {
        name: "Create Category",
        type: "submit",
    },
    {
      name: "Back",
      type: "button",
    },
];
