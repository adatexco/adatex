import React from "react";
import { Tabs, TabsBody, TabsHeader, Tab } from "@material-tailwind/react";
export function TabMenu({ children }) {
  return (
    <div className="w-full lg:w-auto h-full">
      <Tabs
        value="dashboard"
        className="w-full lg:w-auto h-full !font-alegreya lg:hidden"
      >
        <TabsHeader className="p-3 !font-alegreya">
          <Tab key={"order"} value={"order"} className="!font-alegreya">
            Ordenes
          </Tab>
          <Tab key={"profile"} value={"profile"} className="!font-alegreya">
            Perfil
          </Tab>
        </TabsHeader>
        <TabsBody>{children}</TabsBody>
      </Tabs>
    </div>
  );
}
