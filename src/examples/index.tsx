import { Filter } from "./filter";
import { ModalExample } from "./modal";

type ExampleConfig = "filter" | "modal";

export const Example: React.FC<{ config: ExampleConfig }> = ({ config }) => {
  switch (config) {
    case "filter":
      return <Filter />;
    case "modal":
      return (
        <>
          <ModalExample />
        </>
      );
    default:
      return <>Evviva</>;
  }
};
