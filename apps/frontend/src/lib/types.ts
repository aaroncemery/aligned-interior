import { PageBuilder } from "../../sanity.types";
import { ComponentType } from "react";

type PageBuilderBlock = NonNullable<PageBuilder>[number];

export type BlockComponent = {
  type: string;
  component: ComponentType<any>;
  propsTransformer?: (block: PageBuilderBlock) => any;
};
