import { Refine } from "@pankod/refine";
import routerProvider from "@pankod/refine-react-router";
import dataProvider from "@pankod/refine-simple-rest";

import "@pankod/refine/dist/styles.min.css";

import { PostList } from "./pages/posts/list";
import { EditPost } from "./pages/posts/editPost";

import { ListUsers } from "./pages/users/listUser";
import { CreateUser } from "./pages/users/createUser";
import { UpdateUser } from "./pages/users/updateUser";
import { ShowUser } from "./pages/users/showUser";

import { ListCategory } from "./pages/categories/listCategories";
import { PostShow } from "./pages/posts/showPost";

const API_URL = "https://api.fake-rest.refine.dev"

const App: React.FC = () => {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider(API_URL)}
      resources={[
        {
          name: "posts",
          list: PostList,
          edit: EditPost,
          show: PostShow,
          canDelete: true,
        },
        {
          name: "users",
          list: ListUsers,
          create: CreateUser,
          edit: UpdateUser,
          show: ShowUser,
          canDelete: true,
        },
        {
          name: "categories",
          list: ListCategory,
          canDelete: true,
        }
      ]}
    />
  );
};

export default App;