import { Content } from "@/api";

const { createContext, useState, useEffect } = require("react");

export const ContentContext = createContext();

export function ContentProvider(props) {
  const { children } = props;
  const [content, setContent] = useState(null);

  const getContent = async () => {
    try {
      const c = await Content.get();
      setContent(c);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getContent();
  }, []);

  const data = {
    content,
    setContent,
  };
  return (
    <ContentContext.Provider value={data}>{children}</ContentContext.Provider>
  );
}
