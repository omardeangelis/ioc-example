import { Filter } from "./filter";
// import { ModalExample } from "./modal";
import { IcCModal } from "./modal/ioc";

type ExampleConfig = "filter" | "modal";

export const Example: React.FC<{ config: ExampleConfig }> = ({ config }) => {
  switch (config) {
    case "filter":
      return <Filter />;
    case "modal":
      return (
        <>
          {/* <ModalExample /> */}
          <IcCModal />
        </>
      );
    default:
      return <>Evviva</>;
  }
};
