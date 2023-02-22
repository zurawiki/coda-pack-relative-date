import * as coda from "@codahq/packs-sdk";
export const pack = coda.newPack();
import { formatRelative, subDays } from "date-fns";

pack.addFormula({
  name: "HumanDate",
  description: "Prints a human-readable date.",
  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.Date,
      name: "date",
      description: "The input date.",
    }),
  ],
  resultType: coda.ValueType.String,
  execute: async function ([date], context) {
    return formatRelative(date, new Date());
  },
});
